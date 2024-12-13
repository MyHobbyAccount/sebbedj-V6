import React from 'react';
import { motion } from 'framer-motion';
import AutoplayVideo from '../Video/AutoplayVideo';
import { VIDEO_PATHS } from '../../utils/constants/paths';

const AboutImage = () => {
  return (
    <motion.div 
      className="w-full md:w-1/3"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-lg neon-box group" style={{ paddingBottom: '120%' }}>
        <div className="absolute inset-0 glow-image opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <AutoplayVideo
          src={VIDEO_PATHS.partyFilm}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </motion.div>
  );
};

export default AboutImage;