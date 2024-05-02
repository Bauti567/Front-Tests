// Creando mi primera API
const express = require('express') // Asignacion de Framework

const app = express()
const port = 3000
// Un endpoint 


// Indicando que en la ruta Root / va a inicializar

// Los parametros de req y res hacen referencia a Request y Response

app.get('/', (req,res) =>{ // Request y Response
    res.status(200).send('Chanchito Feliz')
    // El codigo 200 indica que la respuesta ha sido correcta


});

app.post('/', (req,res)=>{
    res.status(201).send('Creando el chanchito')

})

app.listen(port, ()=>{
    console.log('Aranca la aplicación')

})
