import React from 'react';
import { Button } from 'react-bootstrap';
import './CarCard.css';

const CarCard = ({
  name,
  image,
  alt,
  onBook,
  actionLabel = 'Book Now',
  imageFit = 'cover',
  className = '',
}) => {
  return (
    <div className={`rental-car-card ${className}`.trim()}>
      <img
        src={`/assets/cars/${image}`} 
        alt={alt}
        className={`rental-car-card__image rental-car-card__image--${imageFit}`}
        loading="lazy"
        decoding="async"
        width="280"
        height="180"
      />
      <h5 className="rental-car-card__name">{name}</h5>
      {onBook && (
        <Button variant="warning" className="rental-car-card__action" onClick={onBook}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default CarCard;
