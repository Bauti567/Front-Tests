import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'El nombre de usuario de requerido',
    }),
    email: z.string({
        required_error: 'Email es requerido'
    }).email({
        message: 'Email inválido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6,{
        message: 'La contraseña debe ser de minimo 6 caracres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email es requerido"
    }).email({
        message: 'Email es invalido'
    }),
    password: z.string({
        required_error: 'La contraseña'
    }).min(6, {
        message: "Contraseña debe tener al menos 6 caracteres"
    }), 

})