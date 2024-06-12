import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './register.css'

// Importando hook para validacion

export default function RegisterPage() {
  const { 
    register, 
    handleSubmit, 
    formState:{
      errors
  }} = useForm()
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth()

  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated) navigate('/tasks')
  },[isAuthenticated])
  // Función para enviar el formulario 
  const onSubmit = handleSubmit(async values=>{
    signup(values)
  })

  return (
    <div className='container-form'>
      {
        RegisterErrors.map((error,i)=>{
          <div>
            {error}
          </div>
        })
      }
      <form onSubmit={onSubmit}>

        <h1>Este es mi form de registro</h1>
        <input type="text" {...register('username', {required:true})}
          className='container-input' 
          placeholder='Username'
        />
        
        {
          errors.username && <p>El nombde de usuario es requerido</p>
        }

        <input type="email" className='container-input' {...register('email', {required:true})} placeholder='E-mail' />
        {
          errors.username && <p>El nombde de usuario es requerido</p>
        }

        <input type="password" className='container-input' {...register('password', {required:true})} placeholder='Password'/>

        {
          errors.username && <p>El nombde de usuario es requerido</p>
        }

        <button type="submit" className='container-button'>Enviar form</button>
      </form>
    </div>
  )
}
