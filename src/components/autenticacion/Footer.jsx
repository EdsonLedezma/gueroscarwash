import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer-links">
          <li><a href="https://api.whatsapp.com/send?phone=6144611223" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
          <li><a href="https://www.instagram.com/stories/highlights/17953885046560444/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="mailto:edsonmon985@gmail.com">Dudas y Sugerencias</a></li>
          <li><a href="#">© {new Date().getFullYear()} Guero's CarWash. Todos los derechos reservados.</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;

