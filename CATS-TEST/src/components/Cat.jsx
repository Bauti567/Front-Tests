import React from "react";

function Cat({ cat }) {
  return (
    <div>
      {cat.breeds.map((breed, index) => (
        <div key={index}>
          <div className="container bg-white text-dark align-items-center ">
            <h1>{breed.name}</h1>
            <p>Temperamento: {breed.temperament}</p>
            <img src={cat.url} alt="gato" width="300" height="300"/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cat;
