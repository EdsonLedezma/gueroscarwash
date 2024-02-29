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
          <img src="https://s1.1zoom.me/big0/610/Chevrolet_White_Metallic_White_background_599623_1280x853.jpg" alt="Compacto" />
          <button onClick={() => handleTypeSelection('compacto')}>Compacto</button>
        </div>
        <div className="button-container">
          <img src="http://pluspng.com/img-png/white-suv-png-13-38-2048.png" alt="SUV" />
          <button onClick={() => handleTypeSelection('suv')}>SUV</button>
        </div>
        <div className="button-container">
          <img src="https://pngimg.com/uploads/pickup_truck/pickup_truck_PNG102882.png" alt="pickup" />
          <button onClick={() => handleTypeSelection('pickup')}>Pickup</button>
        </div>
        <div className="button-container">
          <img src="" alt="sedan" />
          <button onClick={() => handleTypeSelection('sedan')}>Sedán</button>
        </div>
      </div>
      {selectedType && <Link to={`/quotations/${selectedType}`}>Continuar</Link>}
    </div>
  );
}

export default VehicleTypeSelector;