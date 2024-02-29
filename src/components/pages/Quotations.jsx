import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const servicesData = {
  compacto: [
    { id: 1, name: 'Lavado interior profesional', image: 'service1.jpg', description: 'Tapiceria lavada a vapor y/o succion, elimina manchas, malos olores y deja tus asientos y alfombra lo mas limpio posible, incluye aromatizante', price: 20 },
    { id: 2, name: 'Servicio 2', image: 'service2.jpg', description: 'Descripción del servicio 2 para vehículos compactos', price: 30 },
    
  ],
  suv: [
    { id: 1, name: 'Servicio 1', image: 'service1.jpg', description: 'Descripción del servicio 1 para SUV', price: 25 },
    { id: 2, name: 'Servicio 2', image: 'service2.jpg', description: 'Descripción del servicio 2 para SUV', price: 35 },
    
  ],
  pickup: [
    { id: 1, name: 'Servicio 1', image: '../img/suv.png', description: 'Descripción del servicio 1 para pickups', price: 30 },
    { id: 2, name: 'Servicio 2', image: 'service2.jpg', description: 'Descripción del servicio 2 para pickups', price: 40 },
    
  ],
  sedan: [
    { id: 1, name: 'Servicio 1', image: 'service1.jpg', description: 'Descripción del servicio 1 para sedanes', price: 22 },
    { id: 2, name: 'Servicio 2', image: 'service2.jpg', description: 'Descripción del servicio 2 para sedanes', price: 32 },
    
  ]
};

const Quotations = () => {
  const { vehicleType } = useParams();
  const [services] = useState(servicesData[vehicleType] || []);
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleServiceSelection = (service) => {
    const isSelected = selectedServices.some((selected) => selected.id === service.id);
    if (isSelected) {
      setSelectedServices(selectedServices.filter((selected) => selected.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  useEffect(() => {
    
    const total = selectedServices.reduce((accumulator, service) => accumulator + service.price, 0);
    setTotalPrice(total);
  }, [selectedServices]);

  return (
    <div className="quotations-container">
      <h2>Servicios disponibles para tu vehiculo:</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${selectedServices.some((selected) => selected.id === service.id) ? 'selected' : ''}`}
            onClick={() => handleServiceSelection(service)}
          >
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Precio: ${service.price}</p>
          </div>
        ))}
      </div>
      <div className="total-price">Precio total: ${totalPrice}</div>
    </div>
  );
};

export default Quotations;
