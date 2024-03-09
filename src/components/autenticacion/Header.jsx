import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/Quotations">Cotizaciones</Link></li>
          <li></li>
          <li></li>
          <li></li>
          <li><Link to="/AboutUs">Conócenos</Link></li>
          <li></li>
          <li></li>
          <li></li>
          <li><Link to="/Login">Iniciar Sesión</Link></li>
          <li></li>
          <li></li>
          <li></li>
          <li><Link to = "/">Inicio</Link></li>
        </ul>
      </nav>
      <div className="logo-container">
        <img src="./img/LogoCarWash.png" alt="GueroCarWash" className="logo" />
      </div>
    </header>
  );
}

export default Header;

