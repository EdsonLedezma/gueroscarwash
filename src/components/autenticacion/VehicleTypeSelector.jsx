import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VehicleTypeSelector = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="vehicle-type-selector">
      <h2>Selecciona el tipo de vehículo:</h2>
      <div className="types">
        <div className="button-container">
          <img src="compacto.jpg" alt="Compacto" />
          <button onClick={() => handleTypeSelection('compacto')}>Compacto</button>
        </div>
        <div className="button-container">
          <img src="suv.jpg" alt="SUV" />
          <button onClick={() => handleTypeSelection('suv')}>SUV</button>
        </div>
        <div className="button-container">
          <img src="pickup.jpg" alt="Pickup" />
          <button onClick={() => handleTypeSelection('pickup')}>Pickup</button>
        </div>
        <div className="button-container">
          <img src="sedan.jpg" alt="Sedán" />
          <button onClick={() => handleTypeSelection('sedan')}>Sedán</button>
        </div>
      </div>
      {selectedType && <Link to={`/quotations/${selectedType}`}>Continuar</Link>}
    </div>
  );
}

export default VehicleTypeSelector;