import React, { useState, useId } from "react";
import { BiCategory } from "react-icons/bi";

function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section>
      <label htmlFor={minPriceFilterId}>Price</label>
      <input
        type="range"
        id={minPriceFilterId}
        min="0"
        max="1000"
        onChange={handleChangeMinPrice}
      />
      <span>${minPrice}</span>
      <div className="category">
        <label htmlFor={categoryFilterId}>Categorías</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
