import React from "react";
import { useState, useEffect } from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Busqueda de datos
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return (
    <div className="container bg-danger">
      <h1>Rick and Morty API</h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4">
                <Character key={character.id} character={character}></Character>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
