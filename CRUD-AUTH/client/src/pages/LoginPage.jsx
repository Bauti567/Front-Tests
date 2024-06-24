import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import './styles.css'

export default function LoginPage() {
  
  const {
    register, 
    handleSubmit, 
    formState: {errors

    }} = useForm()

  const OnSubmit = handleSubmit((data)=>{
    console.log(data)
  
  })

  return (
    <div className='container-form'>
      
      <form onSubmit={OnSubmit}>
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
    </div>
  )
}
