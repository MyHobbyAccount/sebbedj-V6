import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceDetails from "./ServiceDetails";
import ContactPopup from "./ContactPopup";
import { servicesData } from "../data/servicesData";

const Services = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setIsContactOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-height bg-gradient-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text">
          Mina tjänster
        </h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass rounded-lg p-6 shadow-neon hover:shadow-glow transition-all duration-500"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-xl mb-6 text-neon-pink font-display">
                  {service.price}
                </p>
                <p className="flex mb-6 items-center text-gray-300 italic underline">
                  {service.term}
                </p>
                <p className="text-xl mb-1 text-white font-display">
                  {service.content}
                </p>
                <ul className="mb-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="mr-2 text-neon-purple">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 mt-auto">
                <ServiceDetails service={service} />
                <button
                  onClick={() => handleBookNow(service)}
                  className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white px-6 py-3 rounded-lg hover:shadow-neon transition-all duration-300 transform hover:-translate-y-1"
                >
                  Skicka förfrågan
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;
