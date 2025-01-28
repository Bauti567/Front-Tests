import React, { useContext, useState } from 'react'
import './styles.css'
import { CartContext } from '../context/context'


function Products({products}) {
  const contextData = useContext(CartContext);
  const [total,setTotal] = useState(0);
  
  return (
    <div>
        <h1>Mapeando productos</h1>
        {
           products.map((product, index)=>(
            <div key={index} className="container">
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>Data: {contextData}</p>
            </div>
           ))
        }
    </div>
  )
}

export default Products