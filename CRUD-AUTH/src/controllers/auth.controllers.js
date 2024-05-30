import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { email, password, username } = req.body;
    
    try {
        const newUser = new User({
            userName: username,
            email,
            password
        });
        
        const userSaved = await newUser.save();
        return res.json(userSaved);  // Aquí enviamos la respuesta y terminamos la ejecución

    } catch (error) {
        console.log('No se pudo registrar el usuario', error);
        return res.status(400).send('Error al registrar el usuario'); // Usamos return para terminar la ejecución aquí también
    }
}

export const login = (req, res) => {
    res.send('Login');
}
