import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { IoClose } from 'react-icons/io5';
import { validateMediaFile } from '../utils/mediaHandler';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [error, setError] = useState('');

  const mediaItems = [
    {
      type: 'image',
      src: '/media/images/disco dude.jpeg',
      alt: 'disco dude',
      description: 'person som håller en disco kula framför ansiktet'
    },
    {
      type: 'video',
      src: '/media/videos/club-night.mp4',
      poster: '/media/images/club-thumbnail.jpg',
      description: 'Klubbkväll highlights'
    },
    {
      type: 'image',
      src: '/media/images/wedding2.jpg',
      alt: 'Första dansen',
      description: 'Den perfekta första dansen'
    },
    {
      type: 'image',
      src: '/media/images/party1.jpg',
      alt: 'Företagsevent',
      description: 'Full fart på företagsfesten'
    }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const validation = validateMediaFile(file);
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    // Here you would typically upload the file to your server
    // For now, we'll just create an object URL for preview
    const fileUrl = URL.createObjectURL(file);
    const newMedia = {
      type: file.type.startsWith('image/') ? 'image' : 'video',
      src: fileUrl,
      alt: file.name,
      description: 'Nyligen uppladdad media'
    };

    // Add the new media to the gallery
    mediaItems.push(newMedia);
  };

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section className="section-height bg-custom-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-gray-900">
          Galleri
        </h2>
        
        {error && (
          <div className="text-red-500 text-center mb-4">
            {error}
          </div>
        )}
        
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full rounded-lg shadow-md"
                />
              ) : (
                <video
                  poster={item.poster}
                  className="w-full rounded-lg shadow-md"
                >
                  <source src={item.src} type="video/mp4" />
                  Din webbläsare stödjer inte videouppspelning.
                </video>
              )}
              <p className="mt-2 text-sm text-custom-gray-600">{item.description}</p>
            </div>
          ))}
        </Masonry>

        {/* Lightbox */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setSelectedMedia(null)}
            >
              <IoClose />
            </button>
            <div
              className="max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full rounded-lg"
                />
              ) : (
                <video
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                  Din webbläsare stödjer inte videouppspelning.
                </video>
              )}
              <p className="text-white text-center mt-4">{selectedMedia.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;