import { useState } from "react";
import Products from "./components/Products";
import productos from "../data.js";
import Header from "./components/Header.jsx";
import { CartContextProvider } from "./context/context.jsx";

function App() {
  const agregarAlCarro = (product) => {
    console.log(first);
  };

  return (
    <>
      <CartContextProvider>
        <Header />
        <Products products={productos} />
      </CartContextProvider>
    </>
  );
}

export default App;
