import React, { useContext, useState } from 'react'
import './styles.css'
import { CartContext } from '../context/context'

function Products({products}) {

  const { total, setTotal } = useContext(CartContext);
  const [totalProduct, setTotalProduct] = useState(0);


  const addToCart = () => {
    setTotal((prevTotal) =>
      typeof prevTotal === "number" ? prevTotal + 1 : 1
    );
  };

  return (
    <div>
        <h1>Mapeando productos</h1>
        {
           products.map((product, index)=>(
            <div key={index} className="container">
                <h1 className="container-title">{product.name}</h1>
                <img src={product.img} alt="" className="card-img"/>
                <span>{product.price}</span>
                <p>Data: {total}</p>
                <button onClick={addToCart}>Agregar al carrito</button>
                <span>Total: {total}</span>
            </div>
           ))
        }
    </div>
  )
}

export default Products