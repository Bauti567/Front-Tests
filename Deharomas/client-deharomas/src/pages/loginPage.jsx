import React from 'react'
import './stylesPage.css'
import Footer from '../components/organisms/Footer/Footer'
import Header from '../components/organisms/Navbar/Navbar'

export default function LoginPage() {
  
  return (
    <>
    <div>loginPage con Routes</div>
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
      
      </>
  )
}
