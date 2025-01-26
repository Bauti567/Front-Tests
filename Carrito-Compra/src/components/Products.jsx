import React from 'react'
import './styles.css'

function Products({products}) {

  return (
    <div>
        <h1>Mapeando productos</h1>
        {
           products.map((product, index)=>(
            <div key={index} className="container">
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <img src={product.img} alt="" />
            </div>
           ))
        }
    </div>
  )
}

export default Products