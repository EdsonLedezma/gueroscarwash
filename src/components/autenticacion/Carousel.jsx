import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
const CarouselComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    './img/sedan.png',
    './img/interiorsentra.png',
    './img/ceracivic.png',
    './img/exteriorsentra.png'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      <Carousel showArrows={true} autoPlay={true} interval={5000} selectedItem={currentImageIndex}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
