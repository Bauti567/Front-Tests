import React, { useEffect, useState } from 'react';

function Form() {
  // Estados de los inputs del formulario
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [savedData, setSavedData] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'firstName') setFirstName(value);
    else if (name === 'lastName') setLastName(value);
    else if (name === 'email') setEmail(value);
  };

  const saveData = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = { firstName, lastName, email };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Los datos se han guardado correctamente en el localStorage');
    setSavedData(JSON.stringify(userData)); // Actualizar los datos guardados
  };

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setSavedData(storedData); // Cargar los datos desde el localStorage
    }
  }, []);

  return (
    <div>
      <form onSubmit={saveData}>
        <h1>Formulario de registro</h1>
        <p>Ingresa para tener acceso completo a la aplicación</p>
        <div className="flex">
          <label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
            <span>First Name</span>
          </label>
          <label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
            <span>Last Name</span>
          </label>
        </div>
        <label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <span>Email</span>
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <button type="submit">Submit</button>
        <p>
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
      {savedData && (
        <div>
          <h2>Datos guardados:</h2>
          <pre>{savedData}</pre>
        </div>
      )}
    </div>
  );
}

export default Form;
