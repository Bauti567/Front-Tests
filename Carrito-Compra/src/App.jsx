import React from "react";
import { useState } from "react";
import { products as initialProducts } from "./mocks/product.json";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";


function useFilters(params) {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = () => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { filters, filterProducts, setFilters };
}

function App() {
  const [products] = useState(initialProducts);
  const {filters, filterProducts, setFilters} = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <h1>App carro de compras</h1>
      <Header changeFilters={setFilters} />
      <Product products={filteredProducts} />
      <Footer filters={filters}/>

    </>
  );
}

export default App;
