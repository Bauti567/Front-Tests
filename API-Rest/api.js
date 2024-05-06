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

// Status de la aplicación
// 200 ok
// 201 ok creado
// 204 Procesado & no content PUT PATCH y Delete

// El verbo put me persmite actualizar el recurso de la API
// el /:id es un dato variable pero que va a aparecer en la ruta
app.put('/:id', (req,res)=>{
   res.sendStatus(204); // Solamente retorna el codigo de estado
    console.log(req.params)
    // Mostrando por consola los parametros de la URL
})

app.patch('/:id', (req,res)=>{
    res.sendStatus(204);

})

app.delete('/:id', (req,res)=>{
    res.sendStatus(204);
})

app.listen(port, ()=>{
    console.log('Aranca la aplicación')

})

