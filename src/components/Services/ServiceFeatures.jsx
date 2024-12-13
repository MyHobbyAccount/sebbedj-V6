import React from 'react';

const ServiceFeatures = ({ features }) => {
  return (
    <ul className="mb-6 space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center text-white opacity-90">
          <span className="mr-2 text-pink-500">•</span>
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default ServiceFeatures;