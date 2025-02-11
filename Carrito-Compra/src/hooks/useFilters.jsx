import { useContext } from "react";
import { FiltersContext } from "../context/filterContext";

export function useFilters() {
    const [products] = useState(initialProducts);
    const {filters,setFilters} = useContext(FiltersContext);
  
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