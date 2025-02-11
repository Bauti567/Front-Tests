import React from "react";
import { useState, useEffect } from "react";
import Character from "./Character";

function NavPage(props){
 
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {props.page}</p>
      <button className="btn btn-primary btn-sm"
        onClick={()=>{
          props.setPage(props.page + 1)

        }}>
        Page {props.page + 1}
      </button>
    </header>
  )
}


function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page,setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      // Busqueda de datos
      const response = await fetch(`https://rickandmortyapi.com/api/character?page= ${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  
  },[page]);


  return (
  
    <div className="container ">
      <h1>Rick and Morty API</h1>
      <NavPage page={page} setPage={setPage} ></NavPage>

      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              // Para poner el key debe ser con el elemento que lo contiene
              <div className="col-md-4" key={character.id}>
                <Character character={character}></Character>
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage} ></NavPage>
    </div>
  );
}

export default CharacterList;
