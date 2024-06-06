import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { email, password, username } = req.body;   
    
    try {
        // Encriptado de contraseña
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            userName: username,
            email,
            password: passwordHash,
        });
        

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id})
        res.cookie('token', token)
        return res.json({
            id: userSaved.id,
            username: userSaved.userName,
            email: userSaved.email

        });  // Aquí enviamos la respuesta y terminamos la ejecución

    } catch (error) {
        console.log('No se pudo registrar el usuario', error);
        return res.status(400).send('Error al registrar el usuario'); // Usamos return para terminar la ejecución aquí también
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body;   
    
    try {
        // Validando existencia usuario
        const userFound = await User.findOne({email})
        if (!userFound) return res.status(400).json({
                message: "User not found"
            })


        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json({message:"Incorrect Credentials"})


        const token = await createAccessToken({id: userFound._id})
        res.cookie('token', token)
        return res.json({
            id: userFound.id,
            username: userFound.userName,
            email: userFound.email

        });  // Aquí enviamos la respuesta y terminamos la ejecución

    } catch (error) {
        console.log('No se pudo registrar el usuario', error);
        return res.status(400).send('Error al registrar el usuario'); // Usamos return para terminar la ejecución aquí también
    }

}

export const logout = async(req,res) =>{
    res.cookie("token", "",{
        expires: new Date(0)
    })
    res.sendStatus(200)
}

export const profile = async(req,res)=>{
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({
        message: "User not found"
    })

    return res.json({
        id: userFound.id,
        email: userFound.email,
        username: userFound.username,
        createdAt: userFound.createdAt
    })
    
}