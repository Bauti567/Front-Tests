// La carpeta de las rutas URL del backend
import { Router } from "express";
import { login,register, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";

const router = Router()

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)

// authenticated profiles
router.get('/profile',authRequired, profile)


export default router;
