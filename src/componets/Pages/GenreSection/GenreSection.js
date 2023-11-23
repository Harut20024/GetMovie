import React, { useEffect, useRef } from 'react';
import "./gen.css";

function GenreSection({ genre, imageUrls }) {
  const sliderRef = useRef(null);
  const scrollInterval = 2000; // 2 seconds
  const scrollStep = 200; // Adjust scroll step as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        let newScrollPosition = scrollLeft + scrollStep;

        if (newScrollPosition >= scrollWidth - clientWidth) {
          newScrollPosition = 0; // Reset to start
        }

        sliderRef.current.scroll({ left: newScrollPosition, behavior: 'smooth' });
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="genre-section">
      <div className='genreTitlName'>
      <h2 className="genre-title">{genre}</h2>
      </div>
      <div className="images-container" ref={sliderRef}>
        {imageUrls.map((src, index) => (
          <img
            className="image"
            key={index}
            src={src}
            alt={`${genre} Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
  
export default GenreSection;
