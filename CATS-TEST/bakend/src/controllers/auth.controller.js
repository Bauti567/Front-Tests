// Funciones que se ejecutan al entrar a la URL
import User from '../models/user.model.js'
import { hash } from 'bcryptjs'

export const register = async(req,res)=>{
    const {username, email, password} = req.body

    try {
        const passwordHash = password.hash() 
        const newUser = new User({
            username,
            email,
            password
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

export const login = (req,res)=>{
    const {user,email} = req.body
    
}

export const logout = (req,res)=>{
    res.send('logout')
}

export const profile = (req,res) =>{
    res.send('profile')
}

export const resetPassword = (req,res) =>{

}