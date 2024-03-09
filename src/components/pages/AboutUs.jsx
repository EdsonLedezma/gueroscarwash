import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="conocenos-container">
      <section className="section">
        <img src="./img/cx7.jpeg" alt="Imagen 1" />
        <p>Este cliente nos pidio un servicio de restauracion de faros, lavado interior basico y un lavado exterior completo, se acudio a su domicilio y el servicio se realizo en poco mas de 2 horas</p>
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
