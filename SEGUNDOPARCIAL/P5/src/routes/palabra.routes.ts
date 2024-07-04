import { Router } from 'express';
import { getPalabras, createPalabra, updatePalabra, deletePalabra } from '../controllers/palabra.controller';

const router = Router();

router.get('/palabras', getPalabras);
router.post('/palabras', createPalabra);
router.put('/palabras/:id', updatePalabra);
router.delete('/palabras/:id', deletePalabra);

export default router;
