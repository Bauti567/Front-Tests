import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import "./styles.css";


function Product({ product }) {

  return (
    <div className="card">
      <img src={product.image} alt="" className="card-img" />
      <h2>{product.title}</h2>
      <span className="card-price">{product.price}</span>
      <button className="favorite">
        <FaShoppingCart/>
      </button>
    </div>
  );
}

export default Product;
