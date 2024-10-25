// Especificacion de datos al momento de almacenar
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true // Que es TRIM?
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    }
});

export default mongoose.model('User',UserSchema)



