import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/context";

function ProductsList({ products }) {
  const { total, setTotal } = useContext(CartContext);
  const [totalProduct, setTotalProduct] = useState(0);
  const [fetchProducts, setFetchProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setFetchProducts(data);
      setLoading(false);
      console.log(data);
    
    }

    fetchData();
    
  }, []);

  return (
    <div className="grid-container">
      {loading ? (
        <h1>Cargando pantalla</h1>
      ) : (
        <div className="container">
          {fetchProducts.map((product) => (
            <div className="card-product" key={product.id}>
              <img src={product.image} alt="" className="img" />
              <h2>{product.title}</h2>
              <span>{product.price}</span>
              <span>{product.rating.rate}</span>
              <button>Corazon</button>
              <button>Buy now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsList;
