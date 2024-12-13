import React from "react";
import { motion } from "framer-motion";
import AboutText from "./AboutText";

const AboutContent = () => {
  return (
    <motion.div
      className="w-full md:w-2/3"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 section-header text-center md:text-left">
        Om #sebbedj
      </h2>
      <div className="neon-box p-6 rounded-lg">
        <AboutText />
      </div>
    </motion.div>
  );
};

export default AboutContent;

// Denna sida används
