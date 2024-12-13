import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card glass p-6 rounded-lg">
      <div className="relative">
        <div className="absolute -top-4 -left-4 text-4xl text-neon-pink opacity-50">
          "
        </div>
        <p className="text-lg text-gray-200 italic mb-4">
          {testimonial.text}
        </p>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <p className="text-neon-purple font-semibold">
            {testimonial.event}
          </p>
          <p className="text-gray-400 text-sm">
            {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;