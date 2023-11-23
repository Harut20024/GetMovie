import React from 'react';
import './gen.css'; // Add your CSS file for styling
import { images } from '../../Home/Main/images/ImageCollect';

function GenreSection({ genre, movies, onSelectMovie }) {
  return (
    <div className="genre-section">
      <div className='genre-title-container'>
        <h2 className="genre-title">{genre}</h2>
      </div>
      <div className="images-container">
        {movies.map((movie) => (
          <img
            className="image"
            key={movie.id}
            src={images[movie.id - 1]}
            alt={`${movie.name}`}
            onClick={() => onSelectMovie(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default GenreSection;