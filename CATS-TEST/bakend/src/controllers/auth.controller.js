// Funciones que se ejecutan al entrar a la URL
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'


export const register = async(req,res)=>{
    const {username, email, password} = req.body

    try {
        const userFound = await User.findOne({email})
        if(userFound) return res.status(400).json({message:["The email is already in use"]})
            
        const passwordHash = await bcrypt.hash(password, 10) // hasheando password 
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })

        const UserSaved = await newUser.save()
        const token = await createAccessToken({id: UserSaved._id})
        res.cookie('token', token)
        res.json({
            id: UserSaved._id,
            username: UserSaved.username,
            email: UserSaved.email
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
    
}

export const login = async (req,res)=>{
    const {email, password} = req.body;

    try {
        // Buscando usuario
        const UserFound = await User.findOne({email})
        if(!UserFound) return res.status(400).json({
            message: 'User not found'
        })

        const isMatch = await bcrypt.compare(password, UserFound.password)
        if(!isMatch) return res.status(400).json({
            message: 'Invalid credentials'
        })

        const token = await createAccessToken({id: UserFound._id })
        res.cookie('token',token)
        res.json({
            id: UserFound._id,
            username: UserFound.username,
            email: UserFound.email
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }
}

export const logout = async (req,res)=>{
    res.cookie('token',"",{
        expires: new Date(0)

    })
    return res.sendStatus(200)
}

export const profile = async (req,res) =>{
    // verificar usuario autenticado
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({
        message: "User not found"

    })

    return res.json({
        id: userFound._id,
        email: userFound.email,
        username: userFound.username
    })
    
    res.send('profile')

}

export const resetPassword = (req,res) =>{
    const {email} = req.body
    const UserFound = User.findOne({email})
    
}