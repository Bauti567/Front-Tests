import React from "react";
import { useState } from "react";
import { products as initialProducts } from "./mocks/product.json";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";import { FiltersContext } from "./context/filterContext";
import { useFilters } from "./hooks/useFilters";


function App() {
  const [products] = useState(initialProducts);
  const {filters, filterProducts, setFilters} = useFilters();

  const filteredProducts = filterProducts(products);
  return (
    <>
      <h1>App carro de compras</h1>
      <Header />
      <Product products={filteredProducts} />
      <Footer filters={filters}/>
    </>
  );
}

export default App;
