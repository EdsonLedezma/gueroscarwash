// components/Home.jsx
import React from 'react';
import Header from '../autenticacion/Header';
import Carousel from '../autenticacion/Carousel';
import ServiceCard from '../autenticacion/ServiceCard';
import Footer from '../autenticacion/Footer';
import './Home.css';

const Home = () => {
  
  const service1Images = ["url1", "url2", "url3"];
  const service1Description = "Descripción del Servicio 1";

  const service2Images = ["url4", "url5", "url6"];
  const service2Description = "Descripción del Servicio 2";

  return (
    <div className="home-container">
      <Header />
      <Carousel />
      <ServiceCard images={service1Images} description={service1Description} />
      <ServiceCard images={service2Images} description={service2Description} />
      <Footer />
    </div>
  );
}

export default Home;
