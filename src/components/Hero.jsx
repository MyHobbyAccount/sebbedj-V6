import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaMusic } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="section-height bg-gradient-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-pink rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Icon */}
          <motion.div
            className="mb-8 flex justify-center"
            variants={iconVariants}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full blur-lg"
                variants={glowVariants}
                initial="initial"
                animate="animate"
              />
              <div className="relative bg-black p-6 rounded-full">
                <FaPlay className="text-4xl text-white" />
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 text-white font-display"
            variants={itemVariants}
          >
            #sebbedj
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            variants={itemVariants}
          >
            Skapar oförglömliga stunder genom musik sen 1997
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Professionell Bröllops- & Event-DJ i Sverige
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact").scrollIntoView()}
            className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-8 py-4 rounded-lg hover:shadow-neon transition-all duration-300 group flex items-center mx-auto space-x-2"
          >
            <FaMusic className="text-xl group-hover:rotate-12 transition-transform" />
            <span>Boka Nu</span>
          </motion.button>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
