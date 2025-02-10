import React from "react";
import './product.css'
import { AddToCartIcon } from "./Icons";


function Product({products}) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thubnail} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <strong>-${product.price}</strong>

            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Product;
