import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Carousel;
