export const setupVideoAutoplay = (videoElement) => {
  if (!videoElement) return;

  videoElement.autoplay = true;
  videoElement.loop = true;
  videoElement.muted = true;
  videoElement.playsInline = true;

  // Handle autoplay
  const playVideo = () => {
    videoElement.play().catch(error => {
      console.log("Video autoplay failed:", error);
    });
  };

  // Try to play the video
  playVideo();

  // Handle visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      playVideo();
    }
  });

  return () => {
    document.removeEventListener('visibilitychange', playVideo);
  };
};

export const VIDEO_PATHS = {
  partyFilm: '/media/videos/sebbedj partyfilm.mp4',
  setupVideo: '/media/videos/sebbedj setup.mp4'
};