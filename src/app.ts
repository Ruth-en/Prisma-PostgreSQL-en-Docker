import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(usuarioRoutes);

export default app;
