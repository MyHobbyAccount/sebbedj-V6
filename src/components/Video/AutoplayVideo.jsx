import React, { useRef } from 'react';
import { useVideoAutoplay } from '../../hooks/useVideoAutoplay';

const AutoplayVideo = ({ src, className }) => {
  const videoRef = useRef(null);
  useVideoAutoplay(videoRef);

  return (
    <video
      ref={videoRef}
      className={className}
      playsInline
      muted
      autoPlay
      loop
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoplayVideo;