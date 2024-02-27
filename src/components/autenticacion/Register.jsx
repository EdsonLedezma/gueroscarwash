import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegar entre páginas

const Register = () => {
  return (
    <div className="register-container">
      <h2>Registro</h2>
      {/* Formulario de registro */}
      <form>
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Registrarse</button>
      </form>
      
      {/* Enlace para ir a la página de login */}
      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
    </div>
  );
}

export default Register;
