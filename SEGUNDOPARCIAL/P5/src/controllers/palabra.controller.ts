import { Request, Response } from 'express';
import { PalabraRepository } from '../repositories/palabra.repository';

const palabraRepository = new PalabraRepository();

export const getPalabras = async (req: Request, res: Response) => {
  const palabras = await palabraRepository.findAll();
  res.json(palabras);
};

export const createPalabra = async (req: Request, res: Response) => {
  const { Palabra, Deletreo, estado } = req.body;
  const palabra = await palabraRepository.create({ Palabra, Deletreo, estado });
  res.json(palabra);
};

export const updatePalabra = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Palabra, Deletreo, estado } = req.body;
  const palabra = await palabraRepository.update(id, { Palabra, Deletreo, estado });
  res.json(palabra);
};

export const deletePalabra = async (req: Request, res: Response) => {
  const { id } = req.params;
  const palabra = await palabraRepository.delete(id);
  res.json(palabra);
};
