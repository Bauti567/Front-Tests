const mongoose = require('mongoose') // Trayendo lo instalado para la bd

mongoose.connect('mongodb+srv://PracticaJuan:3229282156@cluster0.tfqechz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// De esta manera se conecta con la base de datos de Mongo

// De esta manera se crea un usuario, como si fuera un objeto
const User = mongoose.model('User',{
    userName: String,
    edad: Number,

})

// Funcion asyncrona para conectar
const crear = async ()=>{
    const user = new User({userName: 'Juan', edad: 23});
    const saveUser = await user.save() // Almacenar usuario y retorna una promesa
    console.log(saveUser)

}


crear();




