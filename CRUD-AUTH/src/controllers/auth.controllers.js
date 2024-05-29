// En este archivo se procesan las peticiones de la URL
import User from '../models/userModel.js'

export const register = async (req,res)=>{
    const {email, password, username} = req.body
    // Creando un nuevo usuario
    try{
        const newUser = new User({
            username,
            email,
            password
        }) 
           
        await newUser.save()
        res.send('registrando')

    } catch (error){
        console.log('No se pudo registrar el usuario',error)
        
    }


    
}

export const login = (req,res)=>{
    res.send('Login')
}