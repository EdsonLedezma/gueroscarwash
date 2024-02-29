import React from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      
      <form>
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Iniciar Sesión</button>
      </form>
      
      
      <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </div>
  );
}

export default Login;
