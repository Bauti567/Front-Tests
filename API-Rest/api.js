// Creando mi primera API
const express = require('express') // Asignacion de Framework
const mongoose = require('mongoose')
const user = require('./user.Controller');
const app = express()
const port = 3000
mongoose.connect('mongodb+srv://PracticaJuan:3229282156@cluster0.tfqechz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// Definiendo modelo de usuario

// Un endpoint 
app.get('/', user.list);
app.post('/', user.create);

app.get('/id:', user.get);
app.put('/:id', user.update);
app.patch('/:id', user.update);
app.delete('/:id', user.destroy);


app.get('*', (req,res)=>{
    res.status(404).send('Esta pagina no sirve');

});

app.post('*', (req,res)=>{
    res.status(404).send('Esta pagina no sirve');

});

app.listen(port, ()=>{
    console.log('Arrancando al app')
})


// // Indicando que en la ruta Root / va a inicializar

// // Los parametros de req y res hacen referencia a Request y Response

// app.get('/', (req,res) =>{ // Request y Response
//     res.status(200).send('Chanchito Feliz')
//     // El codigo 200 indica que la respuesta ha sido correcta


// });

// app.post('/', (req,res)=>{
//     res.status(201).send('Creando el chanchito')

// })

// // Status de la aplicación
// // 200 ok
// // 201 ok creado
// // 204 Procesado & no content PUT PATCH y Delete

// // El verbo put me persmite actualizar el recurso de la API
// // el /:id es un dato variable pero que va a aparecer en la ruta
// app.put('/:id', (req,res)=>{
//    res.sendStatus(204); // Solamente retorna el codigo de estado
//     console.log(req.params)
//     // Mostrando por consola los parametros de la URL
// })

// app.get('/:id', (req,res)=>{
//     console.log(req.params);
//     res.status(200).send(req.params);
// })

// app.patch('/:id', (req,res)=>{
//     res.sendStatus(204);

// })

// app.delete('/:id', (req,res)=>{
//     res.sendStatus(204);
// })

// app.listen(port, ()=>{
//     console.log('Aranca la aplicación')

// })

/// Un endpoint es una ruta con los verbos HTTP Get Post Put Delete
// Podemos llamar a la misma ruta pero dependiento del verbo cambia la accion a ejecutar
// listar crear actualizar o eliminar