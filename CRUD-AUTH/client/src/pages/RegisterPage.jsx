import React from 'react'
import { useForm } from 'react-hook-form'


export default function RegisterPage() {
  const {register, handleSubmit} = useForm()


  return (
    <div>
      <form onSubmit={handleSubmit((values)=>{
        console.log(values)
      })}>
        <input type="text" name="username" {...register("username", {required:true})} />
        <input type="email" name="email" {...register("email", {required:true})}/>
        <input type="password" name="username" {...register("password", {required:true})}/>        
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
