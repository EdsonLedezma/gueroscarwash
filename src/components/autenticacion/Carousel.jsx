import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://i.pinimg.com/originals/27/4c/b0/274cb0c1f2ad74dae983a621fa7300e5.jpg',
    'https://i.pinimg.com/originals/27/4c/b0/274cb0c1f2ad74dae983a621fa7300e5.jpg',
    'https://i.pinimg.com/originals/27/4c/b0/274cb0c1f2ad74dae983a621fa7300e5.jpg',
    'https://i.pinimg.com/originals/27/4c/b0/274cb0c1f2ad74dae983a621fa7300e5.jpg'
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
