import React from 'react';

const SubmitButton = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`
        relative overflow-hidden
        px-8 py-3 rounded-lg
        bg-gradient-to-r from-neon-pink to-neon-purple
        text-white font-medium
        transition-all duration-300
        ${isSubmitting 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:shadow-lg hover:shadow-neon-pink/50 transform hover:-translate-y-1'
        }
      `}
    >
      <span className="relative z-10">
        {isSubmitting ? 'Skickar...' : 'Skicka Meddelande'}
      </span>
      
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-purple
          transition-transform duration-1000
          ${isSubmitting ? 'opacity-50' : 'hover:animate-gradient'}
        `}
      />
    </button>
  );
};

export default SubmitButton;