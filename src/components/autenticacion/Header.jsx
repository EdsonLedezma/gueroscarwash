import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/pages/Quotations">Cotizaciones</Link></li>
          <li><Link to="/pages/AboutUs">Conócenos</Link></li>
          <li><Link to="/Login">Iniciar Sesión</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

