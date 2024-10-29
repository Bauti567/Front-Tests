// Funciones que se ejecutan al entrar a la URL
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'


export const register = async(req,res)=>{
    const {username, email, password} = req.body

    try {
        const passwordHash = await bcrypt.hash(password, 10) // hasheando password 
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })

        const UserSaved = await newUser.save()

        res.status(200).send(UserSaved)

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }
    
}

export const login = async (req,res)=>{
    const {email, password} = req.body
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

export const logout = (req,res)=>{
    res.send('logout')
}

export const profile = (req,res) =>{
    res.send('profile')
}

export const resetPassword = (req,res) =>{
    const {email} = req.body
    const UserFound = User.findOne({email})
    
}