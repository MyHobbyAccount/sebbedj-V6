import React from 'react';
import ServiceDetails from './ServiceDetails';

const ServiceActions = ({ service, onBookNow }) => {
  return (
    <div className="space-y-4">
      <ServiceDetails service={service} />
      <button
        onClick={() => onBookNow(service)}
        className="w-full neon-button py-2 text-lg"
      >
        Boka Nu
      </button>
    </div>
  );
};

export default ServiceActions;