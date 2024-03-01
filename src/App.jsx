import React, { useState } from "react";
import "./App.css";
import { Formulario } from "./components/Formulario";
import { Registro } from "./components/Registro";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [registedUser, setRegistedUser] = useState(null);

  const handleRegister = async (credentials) => {
    // Realiza una llamada al backend para verificar las credenciales
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const user = await response.json();
        setRegistedUser(user);
      } else {
        // Manejar error de autenticación
        console.error("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al realizar la llamada al backend", error);
    }
  };

  const handleLogin = async (credentials) => {
    // Realiza una llamada al backend para verificar las credenciales
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const user = await response.json();
        setAuthenticatedUser(user);
      } else {
        // Manejar error de autenticación
        console.error("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al realizar la llamada al backend", error);
    }
  };

  return (
    <div className="appContainer">
      <h1>Prueba login BD</h1>
      <h2>Nuevo usuario</h2>
      {registedUser ? (
          <p>¡Te has registrado como, {registedUser.username}!</p>
        ) : (
          <Registro onRegister={handleRegister}/>
        )}
      <h2>Iniciar Sesión</h2>
      <div>
        {authenticatedUser ? (
          <p>¡Bienvenido!</p>
        ) : (
          <Formulario onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default App;
