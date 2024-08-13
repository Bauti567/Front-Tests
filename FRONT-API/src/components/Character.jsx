import React from "react";

function Character({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default Character;
