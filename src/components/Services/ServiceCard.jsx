import React from 'react';
import ServiceFeatures from './ServiceFeatures';
import ServiceActions from './ServiceActions';

const ServiceCard = ({ service, onBookNow }) => {
  return (
    <div className="neon-box p-6 flex flex-col backdrop-blur-md">
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold mb-4 neon-text">{service.title}</h3>
        <p className="text-xl mb-6 neon-text-blue">{service.price}</p>
        <ServiceFeatures features={service.features} />
      </div>
      <ServiceActions service={service} onBookNow={onBookNow} />
    </div>
  );
};

export default ServiceCard;