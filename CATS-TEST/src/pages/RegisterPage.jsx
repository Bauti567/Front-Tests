import React from 'react'
import { useForm } from 'react-hook-form'

function RegisterPage() {
    const {register, handleSubmit} = useForm();

    

  return (
    <form onSubmit={handleSubmit(values =>{
        console.log(values)
    })}>
        <input type="text" {...register("username", {required: true})}/>
        <input type="email" {...register("email", {required: true})} />
        <input type="text" {...register("password", {required: true})} />

        <button type="submit">Registrate!</button>
    </form>
    
  )
}

export default RegisterPage