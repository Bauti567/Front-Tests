// En este archivo se procesan las peticiones de la URL
import User from '../models/userModel.js'

export const register = async (req,res)=>{
    const {email, password, username} = req.body
    
    // Creando un nuevo usuario
    try{
        const newUser = new User({
            userName: username,
            email,
            password
        });
           
        const userSaved = await newUser.save()
        res.json(userSaved)

        res.status(200).send('registrando')

    } catch (error){
        console.log('No se pudo registrar el usuario',error)
        res.status(400).send('Error al registrar el usuario');
        
    }


    
}

export const login = (req,res)=>{
    res.send('Login')
}