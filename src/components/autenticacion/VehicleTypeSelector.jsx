import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VehicleTypeSelector.css';

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
          <button onClick={() => handleTypeSelection('compacto')}>
            <img src="./img/march.png" alt="Compacto" />
          </button>
          <h3>Compacto</h3>
        </div>
        <div className="button-container">
          <button onClick={() => handleTypeSelection('suv')}>
            <img src="./img/suv.png" alt="SUV" />
          </button>
          <h3>SUV</h3>
        </div>
        <div className="button-container">
          <button onClick={() => handleTypeSelection('pickup')}>
            <img src="./img/silverado.png" alt="pickup" />
          </button>
          <h3>Pickup</h3>
        </div>
        <div className="button-container">
          <button onClick={() => handleTypeSelection('sedan')}>
            <img src="./img/sedan.png" alt="sedan" />
          </button>
          <h3>Sedán</h3>
        </div>
      </div>
      {selectedType && <Link to={`/quotations/${selectedType}`}>Continuar</Link>}
    </div>
  );
}

export default VehicleTypeSelector;
