import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
import { registerRequest } from '../api/auth';

function RegisterPage() {
    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit(async (values) =>{
      // Cuando se ejecuta el form
      // El register request es importado desde el auth
      const res = await registerRequest(values)
      console.log(res)
    })

    

  return (
    <form onSubmit={onSubmit}>
        <input type="text" className='input' placeholder='username' {...register("username", {required: true})}/>
        <input type="email" placeholder='email' {...register("email", {required: true})} />
        <input type="password" placeholder='password' {...register("password", {required: true})} />
        <button type="submit">Registrate!</button>
    </form>
    
  )
}

export default RegisterPage