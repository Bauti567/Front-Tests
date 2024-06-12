import React from 'react'
import {useForm} from 'react-hook-form'
import { registerRequest } from '../api/auth.js'
import './register.css'
// Importando hook para validacion

export default function RegisterPage() {
  const { register, handleSubmit } = useForm()

  return (
    <div className='container-form'>
      <form onSubmit={handleSubmit(async values=>{
        console.log(values)
        const res = await registerRequest(values)
        console.log(res)
      })}>

        <h1>Este es mi form de registro</h1>
        <input type="text" {...register('username', {required:true})}
          className='container-input' 
          placeholder='Username'
        />
        <input type="email" className='container-input' {...register('email', {required:true})} placeholder='E-mail' />
        <input type="password" className='container-input' {...register('password', {required:true})} placeholder='Password'/>
        <button type="submit" className='container-button'>Enviar form</button>
      </form>
    </div>
  )
}
