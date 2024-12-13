import React from 'react';
import HeroTitle from './HeroTitle';
import HeroButton from './HeroButton';

const Hero = () => {
  return (
    <section className="hero-section animated-bg relative">
      <div className="absolute inset-0 neon-gradient"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <HeroTitle />
        <div className="text-center">
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;