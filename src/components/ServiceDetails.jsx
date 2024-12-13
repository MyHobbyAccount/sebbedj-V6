import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const ServiceDetails = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-r from-party-accent to-neon-purple text-white px-6 py-3 rounded-lg hover:shadow-neon transition-all duration-300 transform hover:-translate-y-1"
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
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <div 
            ref={modalRef}
            className="glass p-6 rounded-lg max-w-md w-full"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
            <p className="text-gray-200 mb-6">{service.details}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-gradient-to-r from-party-accent to-neon-purple text-white px-6 py-3 rounded-lg hover:shadow-neon transition-all duration-300 transform hover:-translate-y-1"
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