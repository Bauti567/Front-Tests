import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
import { registerRequest } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

function RegisterPage() {
    const {register, handleSubmit} = useForm();
    const {signup, isAuthenticated} = useAuth()
    const navidegate = useNavigate();
    
    useEffect(()=>{
      if(isAuthenticated) Navigate
    },[isAuthenticated])

    const onSubmit = handleSubmit(async (values) =>{
      signup(values);

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