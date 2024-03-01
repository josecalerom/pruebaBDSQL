import styles from "./Formulario.module.scss";
import React, { useState } from 'react';

export const Formulario = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Lógica para enviar las credenciales al backend
      onLogin({ username, password });
    };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
