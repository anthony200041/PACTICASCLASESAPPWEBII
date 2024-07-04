// src/factories.ts
import { v4 as uuidv4 } from 'uuid';
import { addDays, format } from 'date-fns';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateIdiomaInput {
  Descripcion: string;
  estado: string;
}

export async function createIdiomaFactory(input: CreateIdiomaInput) {
  const id = uuidv4();
  const createdAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

  const idioma = await prisma.idioma.create({
    data: {
      Id: id,
      Descripcion: input.Descripcion,
      Estado: input.estado,
      createdAt: createdAt,
    },
  });

  return idioma;
}
