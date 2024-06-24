import React from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './styles.css'

export default function LoginPage() {
  
  const {
    register, 
    handleSubmit, 
    formState: {errors

    }} = useForm()

    const {signin, errors: signinErrors} = useAuth()

  const OnSubmit = handleSubmit((data) => {
    console.log(data)
    signin(data)
  })


  return (
    <div className='container-form'>
      {
        signinErrors.map((error, i)=> (
          <div className='bg-blue-500 p-2' key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={OnSubmit}>
        <h1>Login Page</h1>
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
        <button className='container-button' type="submit">Login</button>
      </form>
      <p className='flex gap-x-2 justify-between'>No tienes una cuenta todavía? <Link to="/register" className='text-sky-500'>Registrate</Link></p>
    </div>
  )
}
