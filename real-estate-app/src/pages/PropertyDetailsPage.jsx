import React from 'react';
import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';
import './PropertyDetailsPage.css';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-details-page">
      <div className="property-details-header">
        <img src={property.image} alt={property.name} className="property-details-image" />
        <div className="property-details-title">
          <h2>{property.name}</h2>
          <p>{property.location}</p>
        </div>
      </div>
      <div className="property-details-content">
        <h3>Description</h3>
        <p>{property.description}</p>
        <div className="property-features">
          <div>
            <h4>Bedrooms</h4>
            <p>{property.bedrooms}</p>
          </div>
          <div>
            <h4>Bathrooms</h4>
            <p>{property.bathrooms}</p>
          </div>
        </div>
        <div className="property-details-footer">
          <p className="property-details-price">${property.price}/Month</p>
          <button className="rent-now-button">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;