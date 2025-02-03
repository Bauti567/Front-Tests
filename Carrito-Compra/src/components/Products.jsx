import React, { useContext, useState } from 'react'
import { CartContext } from '../context/context'
import './styles.css'

function Products({products}) {
  const {total,setTotal} = useContext(CartContext);
  const [totalProduct, setTotalProduct] = useState(0);
  
  const addToCart = (productName) =>{
    setTotalProduct(()=>{

    });
    console.log('State local en el componente', productName);
    
  }
  return (
    <div className='grid-container'>
        {
           products.map((product, index)=>(
            <div key={index} className="container">
                <img src={product.img} alt="" className="card-img"/>
                <h1 className="container-title">{product.name}</h1>
                <span>{product.price}</span>
                <button onClick={()=> addToCart(product.name)}>Agregar al carrito</button>
            </div>
           ))
        }
    </div>
  )
}

export default Products;