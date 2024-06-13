import React from 'react'

export default function LoginPage() {
  return (
    <div>
      <form>

        <h1>Este es mi formulario de login</h1>
        <input type="email" className='container-input' placeholder='E-mail' />
        
        <input type="password" className='container-input'  placeholder='Password'/>

        <button type="submit" className='container-button'>Enviar form</button>
      </form>
    </div>
  )
}
