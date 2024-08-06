// Rutas de admin
import { Router } from "express";
import { Register, Login } from "../controllers/auth.controller.js";

const router = Router();

router.get('/login',(req,res)=>{
    res.json('Ruta de registro')
})

router.post('/register',Register)
router.post('/login',Login)



export default router;
