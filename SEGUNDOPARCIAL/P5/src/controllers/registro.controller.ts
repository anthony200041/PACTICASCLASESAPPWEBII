import { Request, Response } from 'express';
import { RegistroRepository } from '../repositories/registro.repository';

const registroRepository = new RegistroRepository();

export const getRegistros = async (req: Request, res: Response) => {
  const registros = await registroRepository.findAll();
  res.json(registros);
};

export const createRegistro = async (req: Request, res: Response) => {
  const { IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado } = req.body;
  const registro = await registroRepository.create({ IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado });
  res.json(registro);
};

export const updateRegistro = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado } = req.body;
  const registro = await registroRepository.update(id, { IdiomaId, PalabraId, Deletreo, Silabas, Fonetica, estado });
  res.json(registro);
};

export const deleteRegistro = async (req: Request, res: Response) => {
  const { id } = req.params;
  const registro = await registroRepository.delete(id);
  res.json(registro);
};
