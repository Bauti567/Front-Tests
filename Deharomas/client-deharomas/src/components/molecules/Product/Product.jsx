import React from 'react'
import './Product.css'

export default function Product() {
  return (
    <div className='container'>
        <div className="container-card">
            <h3 className="header-card"></h3>
            <div className="body-card">
                <p className="description-card"></p>
                <span className="price-card"></span>
            </div>
            <div className="footer-card"></div>
        </div>
    </div>
  )
}
