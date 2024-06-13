import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const { 
    register, 
    handleSubmit,
    formState: { errors }
   } = useForm()

   const {signin, errors: signinErrors } = useAuth()


  const onSubmit = handleSubmit(data => {
    console.log(data)
    signin(data)
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Este es mi formulario de login</h1>
        <input type="email" className='container-input' {...register('email', { required: true })} placeholder='E-mail' />
        <input type="password" className='container-input' {...register('password', { required: true })} placeholder='Password' />
        <button type="submit" className='container-button'>Ingresar</button>

      </form>
    </div>
  )
}
