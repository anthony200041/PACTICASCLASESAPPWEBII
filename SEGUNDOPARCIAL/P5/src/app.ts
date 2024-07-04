import express from 'express';
import cors from 'cors';
import axios from 'axios';
import env from './config';
import idiomaRoutes from './routes/idioma.routes';
import palabraRoutes from './routes/palabra.routes';
import registroRoutes from './routes/registro.routes';
import githubRoutes from './routes/github.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', idiomaRoutes);
app.use('/api', palabraRoutes);
app.use('/api', registroRoutes);
app.use('/api', githubRoutes);



export default app;
