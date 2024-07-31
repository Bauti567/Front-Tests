import { Router } from "express";


const router = Router();

router.get('/',(req,res)=>{
    res.send('La ruta principal')

})
router.get('/admin',(req,res)=>{
    res.send('Ruta administrador')

})
router.get('/login',(req,res)=>{res.send('Ruta login')})
router.get('/register',(req,res)=>{res.send('Ruta registro')})




export default router;