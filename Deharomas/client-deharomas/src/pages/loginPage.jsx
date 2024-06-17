import React from 'react'
import Footer from '../components/organisms/Footer/Footer'

export default function LoginPage() {
  
  return (
    <>
    <Header></Header>
    <div>loginPage con Routes</div>
    <h2>Este es el login</h2>
      <div className="container">
        <div className="container-logo">
          <label htmlFor="">Aqui va la imagen</label>
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
      <Footer></Footer>
      </>
  )
}
