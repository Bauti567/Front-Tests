// Rutas de admin
import { Router } from "express";

const router = Router();

router.get('/admin/dashboard',(req,res)=>{
    res.json('Panel de administracion')

})



export default router;