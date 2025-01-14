import React, { useState } from 'react';

function ColorChanger() {
  // Estado para manejar el color
  const [color, setColor] = useState('red'); // Color inicial

  // Función para cambiar el color al hacer clic
  const toggleColor = () => {
    setColor((prevColor) => (prevColor === 'blue' ? 'green' : 'blue')); // Alterna entre azul y verde
  };

  return (
    <div>
      <h1>Color Changer</h1>
      <div
        onClick={toggleColor} // Cambia el color al hacer clic
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color, // Aplica el color actual
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <span style={{ color: 'white', fontSize: '18px' }}>
          Clic para cambiar color
        </span>
      </div>
    </div>
  );
}

export default ColorChanger;
