import { useState } from "react";
import Header from "./components/Header.jsx";
import { CartContextProvider } from "./context/context.jsx";
import ProductsList from "./components/Products-List.jsx";

function App() {
  const [product] = useState([]);
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  });

  const filterProducts = () =>{
    return product.filter(product => {
      product.price >= filter.minPrice && (
        filter.category === 'all' ||
        product.category === filter.category
      )
    })
  }

  const filteredProducts = filterProducts()
  

  return (
    <>
      <CartContextProvider> 
        <Header changeFilters={setFilter} />
        <ProductsList/>
      </CartContextProvider>
    </>
  );
}

export default App;
