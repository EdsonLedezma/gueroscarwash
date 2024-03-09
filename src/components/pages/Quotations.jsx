import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';





const Quotations = () => {
  const { vehicleType } = useParams();
  const [services,setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userLocation, setUserLocation] = useState(null);

 
useEffect(() =>{
  fetch("https://getpantry.cloud/apiv1/pantry/6df0687d-d6bc-4335-b99f-f876ee81c71f/basket/NewText")
  .then((response) => response.json())
  .then((data) => {
    setServices (data[vehicleType]);
    
 })

},[])
  const handleServiceSelection = (service) => {
    const isSelected = selectedServices.some((selected) => selected.id === service.id);
    if (isSelected) {
      setSelectedServices(selectedServices.filter((selected) => selected.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
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
      <button onClick={getUserLocation}>Obtener ubicación</button>
      {userLocation && (
        <p>Ubicación seleccionada: Latitud: {userLocation.latitude}, Longitud: {userLocation.longitude}</p>
      )}
    </div>
  );
};

export default Quotations;
