import React from "react";

function Character({ character }) {
  return (
    <div className="text-center p-5 mb-5 card">
      <h2 className="card-header">{character.name}</h2>
      <p className="card-body">{character.species}</p>
      <p>{character.gender}</p>
      <img src={character.image} alt={character.name} className="img-fluid rounded-pill" />
    </div>
  );
}

export default Character;
