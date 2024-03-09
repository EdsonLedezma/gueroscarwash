// components/Home.jsx
import React from 'react';

import Carousel from '../autenticacion/Carousel';
import ServiceCard from '../autenticacion/ServiceCard';
import './Home.css';

const Home = () => {
  
  const service1Images = ["https://images-na.ssl-images-amazon.com/images/I/71GDy02YHtL._AC_SL1000_.jpg", "https://detailpark.com/wp-content/uploads/elementor/thumbs/polishing-oczeo6p7rxf4lol3nag668dzomex03kb06eptl06ms.png", "./img/productos.png"];
  const service1Description = "Trabajamos con la mejor calidad, siempre brindando la mejor atencion y cuidado que tu vehiculo merece";

  const service2Images = ["https://okdiario.com/img/2016/11/07/lluvia-acida-formacion-como-a.jpg", "https://phantom-marca.unidadeditorial.es/1611a1c27f3765f6f73d461f0aae62a1/crop/0x157/2047x1309/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/15/16473468325482.jpg", "https://tse3.mm.bing.net/th?id=OIP.4bFNiWMg8cQybhpuMh3shAHaCv&pid=Api&P=0&h=180"];
  const service2Description = "Existen multiples factores que pueden llegar a afectar los acabados externos e internos de tu vehiculo por eso es recomendable estar informado sobre el tipo de materiales de tu auto para evitar lo mejor posible que este se desgaste y pierda valor de reventa";

  return (
    <div className="home-container">
      
      <Carousel />
      <h1 style={{ backgroundColor: '#007bff',textAlign:'center', color: 'white', padding: '40px' }}>El aspecto de tu auto habla mucho de ti por eso te ofrecemos las mejores opciones en detallado automotriz</h1>

      <ServiceCard images={service1Images} description={service1Description} />
      <ServiceCard images={service2Images} description={service2Description} />
    
    </div>
  );
}

export default Home;
