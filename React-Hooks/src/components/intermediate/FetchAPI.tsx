// 2).Petición a una API: Usa useEffect para realizar una llamada a una API pública (como JSONPlaceholder) y mostrar los datos en pantalla.

import React, { useEffect } from 'react'

function FetchAPI() {
    useEffect(()=>{
        async function FetchData() {
                const data = await fetch("https://rickandmortyapi.com/api/character")
                console.log(data)
                
        }
        FetchData();
        
    },[])
  return (
    <div>
        <h1>Ferch data</h1>
    </div>

)
}

export default FetchAPI;
