import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from './ServiceCard';
import ContactPopup from '../Contact/ContactPopup';
import { servicesData } from '../../data/servicesData';
import { PAGE_META } from '../../config/seo';

const Services = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setIsContactOpen(true);
  };

  return (
    <section className="section-height animated-bg py-20">
      <Helmet>
        <title>{PAGE_META.services.title}</title>
        <meta name="description" content={PAGE_META.services.description} />
        <meta name="keywords" content={PAGE_META.services.keywords} />
      </Helmet>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 section-header">
          Mina tjänster
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onBookNow={handleBookNow}
            />
          ))}
        </div>
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