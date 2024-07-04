import { Router } from 'express';
import { getIdiomas, createIdioma, updateIdioma, deleteIdioma } from '../controllers/idioma.controller';

const router = Router();

router.get('/idiomas', getIdiomas);
router.post('/idiomas', createIdioma);
router.put('/idiomas/:id', updateIdioma);
router.delete('/idiomas/:id', deleteIdioma);

export default router;
