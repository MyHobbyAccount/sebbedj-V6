import React from "react";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section
      id="about"
      className="section-height animated-bg py-20"
      itemScope
      itemType="https://schema.org/ProfessionalService"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default About;
