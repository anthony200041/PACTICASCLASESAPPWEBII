import prisma from '../datasources/idioma.datasource';
import { Idioma } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export class IdiomaRepository {
  async findAll(): Promise<Idioma[]> {
    return prisma.idioma.findMany({ where: { estado: 'Activo' } });
  }

  async create(data: { Descripcion: string, estado: string }): Promise<Idioma> {
    return prisma.idioma.create({
      data: { Id: uuidv4(), ...data },
    });
  }

  async update(id: string, data: { Descripcion: string, estado: string }): Promise<Idioma> {
    return prisma.idioma.update({
      where: { Id: id },
      data,
    });
  }

  async delete(id: string): Promise<Idioma> {
    return prisma.idioma.update({
      where: { Id: id },
      data: { estado: 'Eliminado' },
    });
  }
}
