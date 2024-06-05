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

export const login = (req, res) => {
    console.log('INICIAMOS CON EL LOGIN')
    res.send('Login');

}
