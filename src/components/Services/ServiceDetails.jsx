import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const ServiceDetails = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full neon-button py-2"
      >
        Mer Information
      </button>
      
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="neon-box p-6 max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-4 neon-text">{service.title}</h3>
            <p className="text-white opacity-90 mb-6">{service.details}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="neon-button px-6 py-2"
            >
              Stäng
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default ServiceDetails;