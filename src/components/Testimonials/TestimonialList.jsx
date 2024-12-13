import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialList = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialList;