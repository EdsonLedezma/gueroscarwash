import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ images, description }) => {
  return (
    <div className="service-card">
      <div className="image-carousel">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Service Image ${index}`} />
        ))}
      </div>
      <p className="description">{description}</p>
    </div>
  );
}

export default ServiceCard;
