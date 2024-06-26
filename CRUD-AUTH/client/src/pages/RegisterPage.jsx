import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { registerRequest } from '../api/auth'
import { useNavigate, Link } from 'react-router-dom'
import '../api/auth'
import './styles.css'

export default function RegisterPage() {
  // Funcion para mostrar por consola

  const {
    register, 
    handleSubmit, 
    formState: {errors}
  
  } = useForm()
  
  const { signup, isAuthenticated, errors: registerErrors } = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated) navigate('/tasks')
  },[isAuthenticated])

  const OnSubmit = handleSubmit(async (values)=>{
    signup(values);

  
  })

  return (
    <div className='container-form'>
      {
        registerErrors.map((error, i)=> (
          <div className='bg-blue-500 p-2' key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={OnSubmit}>
        <input className='container-input' placeholder='username' type="text" name="username" {...register("username", {required:true})} />
        {
          errors.username && (
            <p>Username es requerido</p>
          )
        }
        <input className='container-input' placeholder='email' type="email" name="email" {...register("email", {required:true})}/>
        {
          errors.email && (
            <p className='text-white-500'>Email es requerido</p>
          )
        }
        <input className='container-input' placeholder='password' type="password" name="username" {...register("password", {required:true})}/>        
        {
          errors.username && (
            <p className='text-white-500'>Password es requerido</p>
          )
        }
        <button className='container-button' type="submit">Register</button>
      </form>
      <p className='flex gap-x-2 justify-between'>No tienes una cuenta todavía? <Link to="/login" className='text-sky-500'>Inicia sesión</Link></p>

    </div>
  )
} 
