export const VIDEO_CONFIG = {
  videos: {
    partyFilm: {
      src: '/media/video/sebbedj partyfilm.mp4',
      downloadName: 'sebbedj-party-film.mp4'
    },
    setupVideo: {
      src: '/media/video/sebbedj setup.mp4',
      downloadName: 'sebbedj-setup.mp4'
    }
  }
};

export const handleVideoDownload = async (videoKey) => {
  try {
    const video = VIDEO_CONFIG.videos[videoKey];
    if (!video) throw new Error('Video not found');

    const response = await fetch(video.src);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = video.downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading video:', error);
    throw error;
  }
};