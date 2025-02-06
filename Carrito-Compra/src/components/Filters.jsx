import React, { useState } from "react";

function Filters({changeFilters}) {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange(precState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  };

  const handleChangeCategory = (event) =>{
    onChange(prevState => ({
      ...prevState,
      cathegory: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div className="container-filters">
        <label htmlFor="price">Precio a partir de</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select name="" id="category">
          <option value="all">Todas</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
