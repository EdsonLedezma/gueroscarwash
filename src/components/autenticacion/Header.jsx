import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/Quotations">Cotizaciones</Link></li>
          <li><Link to="/AboutUs">Conócenos</Link></li>
          <li><Link to="/Login">Iniciar Sesión</Link></li>
          <li><Link to="/Register">Registrate</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

