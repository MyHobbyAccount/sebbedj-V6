import React from "react";
import { scrollToSection } from "../../utils/scroll";

const HeroButton = () => {
  return (
    <button
      onClick={() => scrollToSection("contact")}
      className="neon-button px-8 py-3 text-lg font-semibold"
    >
      Boka Nu
    </button>
  );
};

export default HeroButton;
