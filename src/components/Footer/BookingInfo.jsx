import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { motion } from "framer-motion";
import BookingDetailsPopup from "./BookingDetailsPopup";

const BookingInfo = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
      <h3 className="text-xl font-semibold text-white">Bokningsinformation</h3>
      <motion.div variants={itemVariants} className="text-gray-400">
        <div className="space-y-3">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="flex items-center group hover:text-neon-pink transition-colors"
          >
            <FaCalendar className="mr-2 group-hover:text-neon-purple" />
            <span>Se bokningsvillkor</span>
          </button>
        </div>
      </motion.div>
      <BookingDetailsPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </motion.div>
  );
};

export default BookingInfo;

// Denna sida används
