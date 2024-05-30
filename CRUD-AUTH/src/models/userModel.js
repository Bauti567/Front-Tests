//Un modelo es como una tabla de datos
//Simplemente es un objeto para almacenamiento de datos
import mongoose from "mongoose";

// Esquema para almacenamiento
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true, // Eliminar espacios del texto
        unique: true
    },

    password:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true,
    },
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;

