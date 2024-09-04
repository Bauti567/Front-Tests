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
                <li className='navbar-option'><a href="">Sobre nosotros</a></li>
                <li className='navbar-option'><a href="">Nuestros Productos</a></li>
                <li className='navbar-option'><a href="">Contactanos</a></li>
                <li className='navbar-option login-button'><a href="/login">Login</a></li>
            </ul>
        </header>
    </div>
  )
}
