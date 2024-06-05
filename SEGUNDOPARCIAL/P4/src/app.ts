import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// Rutas para la entidad Idioma
app.get('/idiomas', async (req: Request, res: Response) => {
  const idiomas = await prisma.idioma.findMany({ where: { estado: 'Activo' } });
  res.json(idiomas);
});

app.post('/idiomas', async (req: Request, res: Response) => {
  const { Descripcion, estado } = req.body;
  const idioma = await prisma.idioma.create({
    data: { Id: uuidv4(), Descripcion, estado },
  });
  res.json(idioma);
});

app.put('/idiomas/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Descripcion, estado } = req.body;
  const idioma = await prisma.idioma.update({
    where: { Id: id },
    data: { Descripcion, estado },
  });
  res.json(idioma);
});

app.delete('/idiomas/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const idioma = await prisma.idioma.update({
    where: { Id: id },
    data: { estado: 'Eliminado' },
  });
  res.json(idioma);
});

// Rutas para la entidad Palabra
app.get('/palabras', async (req: Request, res: Response) => {
  const palabras = await prisma.palabra.findMany({ where: { estado: 'Activo' } });
  res.json(palabras);
});

app.post('/palabras', async (req: Request, res: Response) => {
  const { Palabra, Deletreo, estado } = req.body;
  const palabra = await prisma.palabra.create({
    data: { Id: uuidv4(), Palabra, Deletreo, estado },
  });
  res.json(palabra);
});

app.put('/palabras/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Palabra, Deletreo, estado } = req.body;
  const palabra = await prisma.palabra.update({
    where: { Id: id },
    data: { Palabra, Deletreo, estado },
  });
  res.json(palabra);
});

app.delete('/palabras/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const palabra = await prisma.palabra.update({
    where: { Id: id },
    data: { estado: 'Eliminado' },
  });
  res.json(palabra);
});

// Rutas para la entidad Registro
app.get('/registros', async (req: Request, res: Response) => {
  const registros = await prisma.registro.findMany({
    where: { estado: 'Activo' },
    include: { Idioma: true, Palabra: true },
  });
  res.json(registros);
});

app.post('/registros', async (req: Request, res: Response) => {
  const { IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado } = req.body;
  const registro = await prisma.registro.create({
    data: {
      Id: uuidv4(),
      Idioma: { connect: { Id: IdiomaId } },
      Palabra: { connect: { Id: PalabraId } },
      Deletreo,
      Silabas,
      Fonetica,
      estado,
    },
  });
  res.json(registro);
});

app.put('/registros/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado } = req.body;
  const registro = await prisma.registro.update({
    where: { Id: id },
    data: {
      Idioma: { connect: { Id: IdiomaId } },
      Palabra: { connect: { Id: PalabraId } },
      Deletreo,
      Silabas,
      Fonetica,
      estado,
    },
  });
  res.json(registro);
});

app.delete('/registros/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const registro = await prisma.registro.update({
    where: { Id: id },
    data: { estado: 'Eliminado' },
  });
  res.json(registro);
});

// Ruta GET para obtener datos desde el servicio REST de otro compañero
app.get('/datos-compañero', async (req: Request, res: Response) => {
    try {
      const response = await axios.get('http://192.27.64.1:3000/asignaturas'); // Reemplazar con la dirección IP y el puerto correctos
      res.json(response.data);    
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los datos del compañero' });
    }
  });
  

// Inicia el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
