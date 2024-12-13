import React from "react";
import { FaInstagram, FaFacebook, FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/sebbedj",
      label: "Instagram",
    },
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/sebbedj",
      label: "Facebook",
    },
    {
      icon: <FaSpotify />,
      url: "https://open.spotify.com/user/sebbedj",
      label: "Spotify",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Följ mig</h3>
      <motion.div
        className="flex space-x-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="text-3xl text-gray-400 hover:text-neon-pink transition-all duration-300 transform hover:-translate-y-1 hover:shadow-neon"
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialLinks;
