import React from 'react'
import { useForm } from 'react-hook-form'
import '../api/auth'
import './register.css'
import { registerRequest } from '../api/auth'

export default function RegisterPage() {
  // Funcion para mostrar por consola

  const {register, handleSubmit} = useForm()

  return (
    <div className='container-form'>
      <form onSubmit={handleSubmit(async (values)=>{
        console.log(values)
        const res = await registerRequest(values)
        console.log('Este es el resultado'.res)
  })}>
        <input className='container-input' type="text" name="username" {...register("username", {required:true})} />
        <input className='container-input' type="email" name="email" {...register("email", {required:true})}/>
        <input className='container-input' type="password" name="username" {...register("password", {required:true})}/>        
        <button className='container-button' type="submit">Register</button>
      </form>
    </div>
  )
} 
