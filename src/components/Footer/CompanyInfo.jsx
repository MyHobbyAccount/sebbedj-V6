import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const CompanyInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-white">Företagsinformation</h3>
      <motion.div variants={itemVariants} className="text-gray-400">
        <p className="mb-2">
          <span>Passaparola AB</span>
          <span className="text-gray-500 text-sm ml-1">
            - Innehar F-skattsedel
          </span>
        </p>
        <div className="space-y-3">
          <a
            href="tel:0721571439"
            className="flex items-center group hover:text-neon-pink transition-colors"
          >
            <FaPhone className="mr-2 group-hover:text-neon-purple" />
            072-157 14 39
          </a>
          <a
            href="mailto:boka@sebbedj.se"
            className="flex items-center group hover:text-neon-pink transition-colors"
          >
            <FaEnvelope className="mr-2 group-hover:text-neon-purple" />
            boka@sebbedj.se
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompanyInfo;

// Denna sida används
