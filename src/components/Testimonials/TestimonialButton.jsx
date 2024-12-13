import React from 'react';

const TestimonialButton = ({ onClick, showAll }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-8 py-3 rounded-lg 
                hover:shadow-neon transition-all duration-300 transform hover:-translate-y-1"
    >
      {showAll ? 'Visa mindre' : 'Visa fler omdömen'}
    </button>
  );
};

export default TestimonialButton;