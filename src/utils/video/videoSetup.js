export const setupVideoAutoplay = (videoElement) => {
  if (!videoElement) return;

  videoElement.autoplay = true;
  videoElement.loop = true;
  videoElement.muted = true;
  videoElement.playsInline = true;

  const playVideo = () => {
    videoElement.play().catch(error => {
      console.log("Video autoplay failed:", error);
    });
  };

  playVideo();

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      playVideo();
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
};