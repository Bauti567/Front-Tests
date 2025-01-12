// Formulario controlado: Diseña un formulario que use useState para gestionar el nombre y el correo electrónico de un usuario.

import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados correctamente');
    console.log(`Nombre: ${name}`);
    console.log(`Correo: ${email}`);
    console.log(`Password: ${password}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Formulario de registro</h2>

        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          value={name}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
