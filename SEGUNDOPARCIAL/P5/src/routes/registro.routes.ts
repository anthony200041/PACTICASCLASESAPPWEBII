import { Router } from 'express';
import { getRegistros, createRegistro, updateRegistro, deleteRegistro } from '../controllers/registro.controller';

const router = Router();

router.get('/registros', getRegistros);
router.post('/registros', createRegistro);
router.put('/registros/:id', updateRegistro);
router.delete('/registros/:id', deleteRegistro);

export default router;
