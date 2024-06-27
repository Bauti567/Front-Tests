// Este archivo se define para las rutas de mi app

import { Router } from "express";
import { login, register, logout, profile,verifyToken } from '../controllers/auth.controllers.js';
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from "../middlewares/validatorMidleware.js";
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema),login)
router.get("/verify", verifyToken)
router.post('/logout', logout)
router.get("/profile", authRequired, profile)


export default router;