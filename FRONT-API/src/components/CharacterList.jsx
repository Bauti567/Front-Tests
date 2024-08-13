import React from 'react'
import { useState,useEffect } from 'react';
import Character from './Character';

function CharacterList() {
    const [characters, setCharacters] = useState([])

  useEffect(()=>{
    async function fetchData(){ // Busqueda de datos
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()
      setCharacters(data.results)
    
    }
    
    fetchData();

  },[])
  return (
    <div></div>
  )
}

export default CharacterList;
