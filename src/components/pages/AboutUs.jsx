import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="conocenos-container">
      <section className="section">
        <img src="imagen1.jpg" alt="Imagen 1" />
        <p>Descripción de la imagen 1</p>
      </section>
      <section className="section">
        <img src="imagen2.jpg" alt="Imagen 2" />
        <p>Descripción de la imagen 2</p>
      </section>
      <section className="section">
        <img src="imagen3.jpg" alt="Imagen 3" />
        <p>Descripción de la imagen 3</p>
      </section>
    </div>
  );
}

export default AboutUs;
