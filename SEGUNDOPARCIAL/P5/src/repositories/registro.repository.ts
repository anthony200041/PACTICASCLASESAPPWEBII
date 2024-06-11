import prisma from '../datasources/registro.datasource';
import { Registro } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export class RegistroRepository {
  async findAll(): Promise<Registro[]> {
    return prisma.registro.findMany({
      where: { estado: 'Activo' },
      include: { Idioma: true, Palabra: true },
    });
  }

  async create(data: { IdiomaId: string, PalabraId: string, Deletreo: string, Silabas: string, Fonetica: string, estado: string }): Promise<Registro> {
    return prisma.registro.create({
      data: {
        Id: uuidv4(),
        ...data,
        Idioma: { connect: { Id: data.IdiomaId } },
        Palabra: { connect: { Id: data.PalabraId } },
      },
    });
  }

  async update(id: string, data: { IdiomaId: string, PalabraId: string, Deletreo: string, Silabas: string, Fonetica: string, estado: string }): Promise<Registro> {
    return prisma.registro.update({
      where: { Id: id },
      data: {
        ...data,
        Idioma: { connect: { Id: data.IdiomaId } },
        Palabra: { connect: { Id: data.PalabraId } },
      },
    });
  }

  async delete(id: string): Promise<Registro> {
    return prisma.registro.update({
      where: { Id: id },
      data: { estado: 'Eliminado' },
    });
  }
}
