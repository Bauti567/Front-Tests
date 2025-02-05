import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/context";
import "./styles.css";
import Product from "./Product";


function ProductsList({ products }) {
  
  const { total, setTotal } = useContext(CartContext);
  const [totalProduct, setTotalProduct] = useState(0);
  const [fetchProducts, setFetchProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters,setFilters] = useState({
    minPrice: 0

  })

  const filterProduct = () =>{
    return products.filter(product => {
      return(
        product.price >= filters.minPrice 
      )
    })
  }

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
        <div>
          {fetchProducts.map((product) => (
            <div className="contaiener" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsList;
