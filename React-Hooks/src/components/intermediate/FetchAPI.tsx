// 2).Petición a una API: Usa useEffect para realizar una llamada a una API pública (como JSONPlaceholder) y mostrar los datos en pantalla.

import React, { useEffect, useState } from 'react'

type Character = {
    id: number,
    name: string,
    species: string,
    gender: string
    image: string
}

function FetchAPI() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        async function FetchData() {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const data = await response.json();
            console.log(data)
            setCharacters(data.results);

                
        }
        FetchData();
    },[]);

  return (
    <div>
        <h1>Fetch data</h1>
        <div>
            {
                characters.map((character)=>{
                    return(
                        <div key={character.id}>
                            <p>{character.name}</p>
                            <p>{character.species}</p>
                            <p>{character.gender}</p>
                            <img src={character.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>

)
}

export default FetchAPI;
