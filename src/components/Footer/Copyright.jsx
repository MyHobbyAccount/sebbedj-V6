import React from "react";
import { motion } from "framer-motion";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      className="mt-12 pt-8 border-t border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <p className="text-gray-500">
          © {currentYear} Passaparola AB. All rights reserved.
        </p>
        <p className="mt-2 text-gray-600">
          Created by{" "}
          <a
            href="https://sebbedj.se"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-pink hover:text-neon-purple transition-colors"
          >
            Sebastian #sebbedj Bocaciu
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Copyright;

// Denna sida används
