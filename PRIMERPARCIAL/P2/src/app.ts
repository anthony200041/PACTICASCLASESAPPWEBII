import { PrismaClient } from '@prisma/client'
import {create} from 'domain'
import {connect} from 'http2'


const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // Agregar tres registros de idiomas
  const idioma1 = await prisma.idioma.create({
    data: {
      Descripcion: 'Español',
    },
  });

  const idioma2 = await prisma.idioma.create({
    data: {
      Descripcion: 'Inglés',
    },
  });

  const idioma3 = await prisma.idioma.create({
    data: {
      Descripcion: 'Francés',
    },
  });

  console.log('Registros de idiomas creados:', idioma1, idioma2, idioma3);

  // Agregar tres registros de palabras
  const palabra1 = await prisma.palabra.create({
    data: {
      Palabra: 'Casa',
      Deletreo: 'ka-sa',
    },
  });

  const palabra2 = await prisma.palabra.create({
    data: {
      Palabra: 'House',
      Deletreo: 'haʊs',
    },
  });

  const palabra3 = await prisma.palabra.create({
    data: {
      Palabra: 'Maison',
      Deletreo: 'mɛ.zɔ̃',
    },
  });

  console.log('Registros de palabras creados:', palabra1, palabra2, palabra3);

  // Agregar tres registros de registro
  const registro1 = await prisma.registro.create({
    data: {
      Idioma: { connect: { Id: idioma1.Id } },
      Palabra: { connect: { Id: palabra1.Id } },
      Deletreo: palabra1.Deletreo,
      Silabas : "ka-sa",
        Fonetica: "ka.sa",
      Estado: true,
    },
  });

  const registro2 = await prisma.registro.create({
    data: {
      Idioma: { connect: { Id: idioma2.Id } },
      Palabra: { connect: { Id: palabra2.Id } },
      Deletreo: palabra2.Deletreo,
      Silabas: "haʊs",
        Fonetica: "haʊs",
      Estado: true,
    },
  });

  const registro3 = await prisma.registro.create({
    data: {
      Idioma: { connect: { Id: idioma3.Id } },
      Palabra: { connect: { Id: palabra3.Id } },
      Deletreo: palabra3.Deletreo,
      Silabas: "ma-i-son",
      Fonetica: "mɛ.zɔ̃",
      Estado: true,
    },
  })
  console.log('Registros de registro creados:', registro1, registro2, registro3);



  
}


async function eliminarRegistro(id: number): Promise<void> {
    try {
      // Buscar el registro por su ID
      const registro = await prisma.registro.findUnique({
        where: { Id: id },
      });
  
      if (!registro) {
        throw new Error('No se encontró el registro con el ID especificado.');
      }
  
      // Actualizar el estado del registro a FALSE
      const registroActualizado = await prisma.registro.update({
        where: { Id: id },
        data: { Estado: false },
      });
  
      console.log('Registro eliminado:', registroActualizado);
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
    }
  }
  
  async function recuperarRegistro(id: number): Promise<void> {
    try {
      // Buscar el registro por su ID
      const registro = await prisma.registro.findUnique({
        where: { Id: id },
      });
  
      if (!registro) {
        throw new Error('No se encontró el registro con el ID especificado.');
      }
  
      // Actualizar el estado del registro a TRUE
      const registroActualizado = await prisma.registro.update({
        where: { Id: id },
        data: { Estado: true },
      });
  
      console.log('Registro recuperado:', registroActualizado);
    } catch (error) {
      console.error('Error al recuperar el registro:', error);
    }
  }
  
  // Llamadas de ejemplo a las funciones
  eliminarRegistro(1); // Eliminar el registro con ID 1
  recuperarRegistro(1); // Recuperar el registro con ID 1
  

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })