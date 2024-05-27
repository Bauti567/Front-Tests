// Conexion con la base de datos
import mongoose from "mongoose";

// Conexion con la base de datos
export const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://JuanBautista:80274331Juan@atlascluster.lazttss.mongodb.net/authApp?retryWrites=true&w=majority&appName=AtlasCluster')
        console.log('DB is conected!')
    } catch (error){
        console.log('NO SE PUEDE CONECTAR', error);
        
    }
}

export default connectDB;