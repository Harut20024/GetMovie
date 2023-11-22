import React, { useEffect, useRef } from 'react';
import imageData from '../../Home/Main/data.json'
import { images } from '../../Home/Main/images/ImageCollect';
import "./all.css";

function AllImagesScroll() {
  const sliderRef = useRef(null);
  const scrollInterval = 2000; // 2 seconds
  const scrollStep = 200; // Adjust scroll step as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        let newScrollPosition = scrollLeft + scrollStep;

        // Check if we reached the end of the scroll
        if (newScrollPosition >= scrollWidth - clientWidth) {
          newScrollPosition = 0; // Reset to start
        }

        sliderRef.current.scroll({ left: newScrollPosition, behavior: 'smooth' });
      }
    }, scrollInterval);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="all-images-section">
      <div className="images-container" ref={sliderRef}>
        {imageData.map((image, index) => (
          <img
            className="image"
            key={index}
            src={images[image.id - 1]}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default AllImagesScroll;
