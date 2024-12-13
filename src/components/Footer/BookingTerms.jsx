import React from 'react';
import { bookingTermsData } from '../../data/bookingTermsData';

const BookingTerms = () => {
  return (
    <div className="space-y-6">
      {bookingTermsData.map((term, index) => (
        <div key={index} className="border-b border-gray-700 pb-4">
          <h3 className="text-lg font-medium text-neon-pink mb-2">
            {term.title}
          </h3>
          <p className="text-gray-300">
            {term.details}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookingTerms;