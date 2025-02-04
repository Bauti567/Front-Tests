import { useState } from "react";
import Header from "./components/Header.jsx";
import { CartContextProvider } from "./context/context.jsx";
import ProductsList from "./components/Products-List.jsx";

function App() {
  const agregarAlCarro = (product) => {
    console.log(first);
  };

  return (
    <>
      <CartContextProvider>
        <Header />
        <ProductsList/>
      </CartContextProvider>
    </>
  );
}

export default App;
