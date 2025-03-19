import React, { useState, useEffect } from "react";

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Filtramos los personajes según la búsqueda
  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Personajes</h1>

      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredData.length > 0 ? (
        filteredData.map((character) => (
          <div key={character.id}>
            <p>{character.name}</p>
            <p>{character.status}</p>
          </div>
        ))
      ) : (
        <p>No se encontraron personajes</p>
      )}
    </div>
  );
}

export default Search;
