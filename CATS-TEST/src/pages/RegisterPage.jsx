import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';

function RegisterPage() {
    const {register, handleSubmit} = useForm();
    
    
  return (
    <form onSubmit={handleSubmit(values =>{
        console.log(values)
    })}>
        <input type="text" className='input' placeholder='username' {...register("username", {required: true})}/>
        <input type="email" placeholder='email' {...register("email", {required: true})} />
        <input type="password" placeholder='password' {...register("password", {required: true})} />
        <button type="submit">Registrate!</button>
    </form>
    
  )
}

export default RegisterPage