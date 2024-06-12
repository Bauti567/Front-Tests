import React from 'react'
import {useForm} from 'react-hook-form'
// Importando hook para validacion

export default function RegisterPage() {
  const { register, handleSubmit } = useForm()

  return (
    <div className=' max-w-md p-10 rounded-md'>
      <form onSubmit={handleSubmit(values=>{
        console.log(values)
      })}>
        <h1>Este es mi form de registro</h1>
        <input type="text" {...register('username', {required:true})}
          className=' text-black px-4 py2 rounded-md' 
          placeholder='username'
        />
        <input type="email" {...register('email', {required:true})} placeholder='mail' />
        <input type="password" {...register('username', {required:true})} placeholder='password'/>
        <button type="submit">Enviar form</button>
      </form>
    </div>
  )
}
