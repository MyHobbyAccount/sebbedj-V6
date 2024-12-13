import React from 'react';
import CompanyInfo from './CompanyInfo';
import SocialLinks from './SocialLinks';
import BookingInfo from './BookingInfo';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className="bg-gradient-dark py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="glass p-8 rounded-lg">
              <CompanyInfo />
            </div>
            <div className="glass p-8 rounded-lg">
              <SocialLinks />
            </div>
            <div className="glass p-8 rounded-lg">
              <BookingInfo />
            </div>
          </div>
          <Copyright />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-purple to-party-accent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-party-accent via-neon-purple to-neon-pink opacity-50" />
    </footer>
  );
};

export default Footer;