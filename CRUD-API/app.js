// Este es el punto de inicio de mi app
const express = require('express')
const path = require('path')

const app = express();
const PORT = 3000

// Este es el Middleware
app.use(express.json())
//mongoose.connect('mongodb+srv://PracticaJuan:3229282156@cluster0.tfqechz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
app.use(express.static(path.join(__dirname, 'routes')))

// Rutas
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'routes','index.html'))
})



app.listen(PORT, ()=>{
    console.log('La aplicacion arranco')
})