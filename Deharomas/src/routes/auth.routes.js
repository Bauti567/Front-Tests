// Rutas de admin
import { Router } from "express";

const router = Router();

router.get('/login',(req,res)=>{
    res.json('Ruta de registro')
})

router.get('/admin/dashboard',(req,res)=>{
    res.json('Panel de administracion')

})



export default router;