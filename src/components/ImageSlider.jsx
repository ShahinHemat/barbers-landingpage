import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentImage((currentImage + 1) % images.length);
      }
    }, 7000);

    return () => clearInterval(intervalId);
  }, [currentImage, images.length, isPlaying]);

  const handlePrevClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handleHover = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className='img-slider-container'
    >
      {hovering && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            zIndex: 1,
          }}
          onClick={handlePrevClick}
        >
          &lt;
        </div>
      )}
      {hovering && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            zIndex: 1,
          }}
          onClick={handleNextClick}
        >
          &gt;
        </div>
      )}
    
    

      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

    </div>
  );
};

export default ImageSlider;
