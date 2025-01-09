import React from 'react'
import { useState } from 'react';

function Form() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState(0)
    

    const handleSubmit =(e: any) =>{
        e.preventDefault();
        console.log("datos enviados correctamente");
        console.log(name)

    }

    const handleInputChange = () =>{

    }
  return (
    <div>
        <form action="">
            <h2>Formulario de registro</h2>
            <label htmlFor="">Username</label>
            <input type="text" name="username" id="name" placeholder='username' value={name}/>
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" placeholder='email'/>             
            <label htmlFor="">Password</label>
            <input type="text" name="" id="" placeholder='password'/>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Form;
