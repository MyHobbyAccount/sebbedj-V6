import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const TestimonialGrid = ({ testimonials }) => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, initialCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <AnimatePresence>
        <div className="grid grid-cols-1 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {testimonials.length > initialCount && (
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-8 py-3 rounded-lg 
                     hover:shadow-neon transition-all duration-300 transform hover:-translate-y-1"
          >
            {showAll ? 'Visa mindre' : 'Visa fler omdömen'}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TestimonialGrid;