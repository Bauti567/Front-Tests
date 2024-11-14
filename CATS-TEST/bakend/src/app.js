// Arranque de la aplicacion
import express from 'express';
import authRoutes from './routes/auth.routes.js';
import catRoutes from './routes/cat.routes.js'
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import cors from 'cors'

export const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use('/api',authRoutes);
app.use('/api', catRoutes)

export default app;
