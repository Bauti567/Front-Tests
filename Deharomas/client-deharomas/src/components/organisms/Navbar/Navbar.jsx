import React from 'react'
import { TbTeapot } from "react-icons/tb";
import './navbar.css'



export default function Navbar() {
  

  return (
    <div className='container-navbar'>
        <header className='navbar'>
            <ul className='navbar-list'>
                <li className='Icon'><a href="/"><TbTeapot /></a></li>
                <li><img src="" alt="" /></li>
                <li className='navbar-option'>Sobre nosotros</li>
                <li className='navbar-option'>Nuestros Productos</li>
                <li className='navbar-option'>Contactanos</li>
                <li className='navbar-option login-button'><a href="/login">Login</a></li>
            </ul>
        </header>
    </div>
  )
}
