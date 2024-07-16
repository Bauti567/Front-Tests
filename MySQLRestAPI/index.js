import express from 'express'

const app = express()
const PORT = 3000


// Routes
app.get('/employees',(req,res)=>{res.send('Obteniendo empleados')})
app.post('/employees',(req,res)=>{res.send('Creando empleados')})
app.put('/employees',(req,res)=>{res.send('Actualizando empleados')})
app.delete('/employees',(req,res)=>{res.send('Eliminando empleados')})





app.listen(PORT)
console.log('App is working on ',PORT)



