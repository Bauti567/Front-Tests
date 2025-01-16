import React, { useState, useEffect } from 'react';

function Cronometer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); 

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval); 
    }

    return () => clearInterval(interval);
  }, [isRunning]); 

  const resetTime = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Cronómetro</h1>
      <div className="cronometer">
        <h2>{time}s</h2>
        <div>
          <button onClick={() => setIsRunning(true)}>Iniciar</button>
          <button onClick={() => setIsRunning(false)}>Pausar</button>
          <button onClick={resetTime}>Reiniciar</button>
        </div>
      </div>
    </div>
  );
}

export default Cronometer;
