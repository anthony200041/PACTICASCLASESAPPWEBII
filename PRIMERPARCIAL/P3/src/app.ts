import express, { Request, Response } from 'express';
import { PrismaClient, Estado } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Rutas para la entidad Idioma
app.get('/idiomas', async (req: Request, res: Response) => {
  const idiomas = await prisma.idioma.findMany({
    where: { estado: Estado.Activo },
  });
  res.json(idiomas);
});

app.post('/idiomas', async (req: Request, res: Response) => {
  const { Id, Descripcion, estado } = req.body;
  const idioma = await prisma.idioma.create({
    data: { Id, Descripcion, estado },
  });
  res.json(idioma);
});

app.put('/idiomas/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Descripcion, estado } = req.body;
  const idioma = await prisma.idioma.update({
    where: { Id: Number(id) },
    data: { Descripcion, estado },
  });
  res.json(idioma);
});

app.delete('/idiomas/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const idioma = await prisma.idioma.update({
    where: { Id: Number(id) },
    data: { estado: Estado.Eliminado },
  });
  res.json(idioma);
});

app.patch('/idiomas/recuperar/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const idioma = await prisma.idioma.update({
    where: { Id: Number(id) },
    data: { estado: Estado.Activo },
  });
  res.json(idioma);
});

// Rutas para la entidad Palabra
app.get('/palabras', async (req: Request, res: Response) => {
  const palabras = await prisma.palabra.findMany({
    where: { estado: Estado.Activo },
  });
  res.json(palabras);
});

app.post('/palabras', async (req: Request, res: Response) => {
  const { Id, Palabra, Deletreo, estado } = req.body;
  const palabra = await prisma.palabra.create({
    data: { Id, Palabra, Deletreo, estado },
  });
  res.json(palabra);
});

app.put('/palabras/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Palabra, Deletreo, estado } = req.body;
  const palabra = await prisma.palabra.update({
    where: { Id: Number(id) },
    data: { Palabra, Deletreo, estado },
  });
  res.json(palabra);
});

app.delete('/palabras/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const palabra = await prisma.palabra.update({
    where: { Id: Number(id) },
    data: { estado: Estado.Eliminado },
  });
  res.json(palabra);
});

app.patch('/palabras/recuperar/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const palabra = await prisma.palabra.update({
    where: { Id: Number(id) },
    data: { estado: Estado.Activo },
  });
  res.json(palabra);
});

// Rutas para la entidad Registro
app.get('/registros', async (req: Request, res: Response) => {
  const registros = await prisma.registro.findMany({
    where: { estado: Estado.Activo },
    include: {
      Idioma: true,
      Palabra: true,
    },
  });
  res.json(registros);
});

app.post('/registros', async (req: Request, res: Response) => {
  const { Id, IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado } = req.body;
  const registro = await prisma.registro.create({
    data: { Id, IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado },
  });
  res.json(registro);
});

app.put('/registros/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado } = req.body;
  const registro = await prisma.registro.update({
    where: { Id: Number(id) },
    data: { IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado },
  });
  res.json(registro);
});

app.delete('/registros/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const registro = await prisma.registro.update({
    where: { Id: Number(id) },
    data: { estado: Estado.Eliminado },
  });
  res.json(registro);
});

app.patch('/registros/recuperar/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const registro = await prisma.registro.update({
    where: { Id: Number(id) },
    data: { estado: Estado.Activo },
  });
  res.json(registro);
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
