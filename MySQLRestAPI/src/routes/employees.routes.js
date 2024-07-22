// this is my routes file
import { Router } from "express";

const router = Router()

app.get('/ping',async(req,res)=>{
    const result = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
})

app.get('/employees',(req,res)=>{res.send('Obteniendo empleados')})
app.post('/employees',(req,res)=>{res.send('Creando empleados')})
app.put('/employees',(req,res)=>{res.send('Actualizando empleados')})
app.delete('/employees',(req,res)=>{res.send('Eliminando empleados')})




export default router;