// Conexion con la base de datos

const mongoose = require('mongoose');

// Conexion con la base de datos
const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://JuanBautista:80274331Juan@atlascluster.lazttss.mongodb.net/authApp?retryWrites=true&w=majority&appName=AtlasCluster')
        console.log('DB is conected!')
    } catch (error){
        console.log('NO SE PUEDE CONECTAR', error);
        
    }
}

module.exports = connectDB;
