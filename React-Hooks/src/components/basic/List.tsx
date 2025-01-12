import React, { useState } from 'react';

function List() {
    // Estados para manejar elementos e input, tipados con TypeScript
    const [elements, setElements] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    // Agregar un elemento a la lista
    const addElement = () => {
        if (inputValue.trim() !== '') {
            setElements([...elements, inputValue]);
            setInputValue(''); // Limpiar el input
        }
    };

    // Eliminar un elemento por su índice
    const removeElement = (index: number) => {
        setElements(elements.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="container">
                <h1>Lista de elementos</h1>
                <div className="container-input">
                    <input
                        type="text"
                        value={inputValue}
                        placeholder="Añadir elemento"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={addElement}>Agregar a la lista</button>
                </div>
                <div className="container-list">
                    <ul>
                        {elements.map((element, index) => (
                            <li key={index}>
                                {element}{' '}
                                <button onClick={() => removeElement(index)} aria-label={`Eliminar ${element}`}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default List;
