import React from 'react'
import { useForm } from 'react-hook-form'

function LoginPage() {
  const {register, handleSubmit} = useForm();

  return (
    <div>
      <form action="" onSubmit={handleSubmit((values)=>{
        console.log(values)
      })}>
        <input type="text" placeholder='username' {...register ("username", {required: true})}/>
        <input type="text" placeholder='password' {...register ("password", {required: true})}/>
        <button type='submit'>
          Iniciar sesion!
        </button>
      </form>
    </div>
  )
}

export default LoginPage