import { Request, Response } from 'express';
import { IdiomaRepository } from '../repositories/idioma.repository';

const idiomaRepository = new IdiomaRepository();

export const getIdiomas = async (req: Request, res: Response) => {
  const idiomas = await idiomaRepository.findAll();
  res.json(idiomas);
};

export const createIdioma = async (req: Request, res: Response) => {
  const { Descripcion, estado } = req.body;
  const idioma = await idiomaRepository.create({ Descripcion, estado });
  res.json(idioma);
};

export const updateIdioma = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Descripcion, estado } = req.body;
  const idioma = await idiomaRepository.update(id, { Descripcion, estado });
  res.json(idioma);
};

export const deleteIdioma = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idioma = await idiomaRepository.delete(id);
  res.json(idioma);
};
