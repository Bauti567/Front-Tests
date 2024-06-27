import express from "express"; // Express para inicializar la app
import morgan from "morgan"; // Morgan para iniciar la APP
import authRoutes from "./routes/auth.routes.js"
import taskRoutes from './routes/task.routes.js'
import cookieParser from 'cookie-parser' /// ESTE ME PERMITE VER LAS COOKIES
import cors from 'cors'


const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({ 
    // Solo este dominio se puede comunicar con el back
    origin: 'http://localhost:5173',
    credentials: true // permite compartir los headers
}))


app.use("/api", authRoutes)
app.use("/api", taskRoutes)

export default app;

