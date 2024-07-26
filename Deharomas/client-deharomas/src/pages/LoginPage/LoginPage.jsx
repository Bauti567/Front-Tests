import React, { useState } from 'react'
import './stylesLogin.css'

export default function LoginPage() {
  
  const [status,SetStatus] = useState()
  
  return (

    <>
    <div className='login-page'>loginPage con Routes
    <h2>Este es el login</h2>
      <div className="container">
        <div className="container-logo">
          <img src="" alt="" />
        </div>
        <form action="">
          <label htmlFor="">Correo electrónico</label>
          <input type="email" name="" id="" placeholder='E-mail'/>
          <label htmlFor="">Contraseña</label>
          <input type="password" name="" id="" />
          <button type="submit">Ingresar</button>
        </form>
      </div>
      </div>
      
      </>
  )
}
