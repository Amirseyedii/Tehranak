import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="property-card-link">
      <div className="property-card">
        <img src={property.image} alt={property.name} className="property-image" />
        <div className="property-details">
          <h3 className="property-name">{property.name}</h3>
          <p className="property-location">{property.location}</p>
          <p className="property-price">${property.price}/Month</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;