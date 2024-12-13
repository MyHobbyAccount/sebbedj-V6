import React from 'react';
import { Helmet } from 'react-helmet-async';
import TestimonialGrid from './TestimonialGrid';
import { testimonialsData } from '../../data/testimonialsData';
import { PAGE_META } from '../../config/seo';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-height bg-gradient-dark py-20">
      <Helmet>
        <title>{PAGE_META.testimonials.title}</title>
        <meta name="description" content={PAGE_META.testimonials.description} />
        <meta name="keywords" content={PAGE_META.testimonials.keywords} />
      </Helmet>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text">
          Vad mina kunder säger om mig
        </h2>
        <div className="max-w-6xl mx-auto">
          <TestimonialGrid testimonials={testimonialsData} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;