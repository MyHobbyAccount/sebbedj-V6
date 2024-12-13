import { useEffect } from 'react';
import { setupVideoAutoplay } from '../utils/video/videoSetup';

export const useVideoAutoplay = (videoRef) => {
  useEffect(() => {
    if (videoRef.current) {
      const cleanup = setupVideoAutoplay(videoRef.current);
      return cleanup;
    }
  }, []);
};