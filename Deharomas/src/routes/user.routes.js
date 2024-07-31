import { Router } from "express";

const router = Router()


router.get('/user',(req,res)=>{
    res.json('ruta usuario')
})



export default router;