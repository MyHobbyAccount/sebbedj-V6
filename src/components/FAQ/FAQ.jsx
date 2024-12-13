import React from "react";
import FAQVideo from "./FAQVideo";
import FAQContent from "./FAQContent";

const FAQ = () => {
  return (
    <section className="section-height bg-gradient-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text">
          Vanliga Frågor
        </h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <FAQVideo />
          <FAQContent />
        </div>
      </div>
    </section>
  );
};

export default FAQ;

// Denna sida används
