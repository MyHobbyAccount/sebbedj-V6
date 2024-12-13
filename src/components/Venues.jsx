import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Venues = () => {
  const venues = [
    "Nääs Slott",
    "Grand Hotel",
    "Stenungsbaden Yacht Club",
    "Socitetshuset Marstand",
    "Villa Gransholm",
    "Stena Line",
    "Skeppsbar sthlm",
    "Scandic Swania",
    "Restaurang Sjökanten",
    "SKAI",
    "PM & Vänner",
    "Valand",
    "Havsbadet Lysekil",
    "Brödernas Växjö",
    "Asa Herrgård",
    "Varbergs Fästning",
    "Råda Säteri",
    "O´learys",
    "Många fler..."
  ];

  return (
    <section className="bg-gradient-dark py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <FaMapMarkerAlt className="text-2xl text-neon-pink mr-3" />
            <h2 className="text-3xl font-bold text-white neon-text">
              Ett utdrag av fantastiska ställen där jag spelat
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="venue-tag glass px-3 py-1 rounded-full"
              >
                <p className="text-white text-sm font-medium">{venue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venues;