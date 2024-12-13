import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Venues = () => {
  const venues = [
    "Nääs Slott", "Grand Hotel", "Stenungsbaden Yacht Club",
    "Socitetshuset Marstand", "Villa Gransholm", "Stena Line",
    "Skeppsbar sthlm", "Scandic Swania", "Restaurang Sjökanten",
    "SKAI", "PM & Vänner", "Valand", "Havsbadet Lysekil",
    "Brödernas Växjö", "Asa Herrgård", "Varbergs Fästning",
    "Råda Säteri", "O´learys"
  ];

  return (
    <section className="py-20 animated-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <FaMapMarkerAlt className="text-2xl text-pink-500 mr-3" />
            <h2 className="text-3xl font-bold neon-text">
              Ett utdrag av fantastiska ställen där jag spelat
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {venues.map((venue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="neon-box px-4 py-2 hover:scale-105 transition-transform"
              >
                <p className="text-white opacity-90 text-sm font-medium">{venue}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venues;