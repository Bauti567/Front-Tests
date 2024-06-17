import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import './footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <footer className='Footer'>
        <div className="group-1">
          <div className="box">
            <a href=""><img src="" alt="" />Aqui va la imagen</a>
          </div>
          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, in.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, in.</p>
          </div>
          <div className="box">
            <h2>Síguenos</h2>
            <div className="social-media">
              <a href="#"><FaFacebookSquare /></a>
              <a href="#"><FaInstagram/></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="group-2">
            <small>&copy; 2024 <b>Juan Bautista</b> - Todos los derechos reservados -</small>
          </div>
      </footer>
    </div>

  )
}
