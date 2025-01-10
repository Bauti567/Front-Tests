// Lista dinámica: Implementa una lista en la que puedas agregar y eliminar elementos con useState.
import React, { useState } from 'react'

function List() {
    const [element,setElement] = useState("")

    const addElement = ()=> {
        setElement(element)
    }

    return (
    <div>
        <div className="container">
            <h1>Lista de elementeos</h1>
            <div className="container-list">
                <li>{element}</li>
            </div>
            <button onClick={addElement}>Agregar a la lista</button>        
        </div>
    </div>
  )
}

export default List