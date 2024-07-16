// Aqui se inicializa mi app ;)
import express from 'express'


const app = express()
const PORT = 4000

// Rutas base 
app.get('/',(req,res)=>{res.send('La ruta principal')})
app.get('/admin',(req,res)=>{res.send('Ruta administrador')})
app.get('/login',(req,res)=>{res.send('Ruta login')})
app.get('/register',(req,res)=>{res.send('Ruta registro')})




app.listen(PORT,()=>{
    console.log('Server is running on PORT',PORT)

})