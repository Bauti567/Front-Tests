// La carpeta de las rutas URL del backend
import { Router } from "express";
import { login,register, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.post('/regis ter',register)
router.post('/login', login)
router.post('/logout', logout)


// authenticated profiles
router.get('/profile',authRequired, profile)


export default router;
