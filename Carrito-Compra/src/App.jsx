import { useState } from "react";
import Products from "./components/Products";
import productos from "../data.js";

function App() {
  const agregarAlCarro = (product) =>{
    console.log(first)
  }

  return (
    <>
      <h1>Carrito de compras</h1>
      <Products products={productos} />
    </>
  )
}

export default App;
