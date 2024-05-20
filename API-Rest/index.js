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
    const user = new User({userName: 'Prueba', edad: 13});
    const saveUser = await user.save() // Almacenar usuario y retorna una promesa
    console.log(saveUser)

}


// Con este tipo de funcion se pueden consultar todos los usuarios
const buscarTodo = async ()=>{
    const users = await User.find()
    console.log(users)

}

// Buscar un usuario por username
const buscar = async ()=>{
    const users = await User.find({ userName: 'Busqueda' })
    console.log(users);
    // En este caso volví a registrar un usuario para poder enviar los datos

}

const buscarUno = async () =>{
    const user = await User.findOne({userName: 'Prueba'})
    // La funcion de FindOne retorna un objeto
    console.log(user)
}

const actualizar = async ()=>{
    const user = await User.findOne({userName: 'Chanchito triste', edad: 30})
    console.log(user)
    user.edad = 30
    await user.save();
    
}


//crear();
//buscar();
//buscarTodo();
//buscarUno();
// actualizar();

const eliminar = async()=>{
    const user = await User.find({userName: 'Chanchito triste'})
    console.log(user)
    // Eliminando al usuario de la BD
    if (user) {
        await user.remove()
    
    } else{
        console.log('No existe papi')
    }
}


eliminar();

