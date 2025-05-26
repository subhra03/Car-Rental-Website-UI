import React from 'react';

const CarCard = ({ name, image, alt }) => {
  return (
    <div className="car-card border rounded shadow-sm p-3 text-center">
      <img
        src={`/assets/cars/${image}`} 
        alt={alt}
        className="img-fluid mb-2"
        style={{ maxHeight: '150px', objectFit: 'contain' }}
      />
      <h5 className="car-name">{name}</h5>
    </div>
  );
};

export default CarCard;
