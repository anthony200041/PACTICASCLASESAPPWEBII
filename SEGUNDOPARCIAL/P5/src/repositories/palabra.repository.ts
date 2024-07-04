import prisma from '../datasources/palabra.datasource';
import { Palabra } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export class PalabraRepository {
  async findAll(): Promise<Palabra[]> {
    return prisma.palabra.findMany({ where: { estado: 'Activo' } });
  }

  async create(data: { Palabra: string, Deletreo: string, estado: string }): Promise<Palabra> {
    return prisma.palabra.create({
      data: { Id: uuidv4(), ...data },
    });
  }

  async update(id: string, data: { Palabra: string, Deletreo: string, estado: string }): Promise<Palabra> {
    return prisma.palabra.update({
      where: { Id: id },
      data,
    });
  }

  async delete(id: string): Promise<Palabra> {
    return prisma.palabra.update({
      where: { Id: id },
      data: { estado: 'Eliminado' },
    });
  }
}
