import React, { useEffect, useRef } from 'react';
import imageData from '../../componets/Home/Main/data.json';
import { images } from '../../componets/Home/Main/images/ImageCollect';
import "./category.css";
import GenreSection from './GenreSection/GenreSection';


function Categories() {
  const genres = ['Detective', 'Comedy', 'Action', 'Family', 'Kids', "Thriller", "Drama", "Crime", "Adventures"];

  const genreImages = (genre) => {
    return imageData
      .filter(image => image.genre.includes(genre))
      .map(image => images[image.id - 1]);
  };

  return (
    <div className="categories">
      {genres.map(genre => (
        <GenreSection key={genre} genre={genre} imageUrls={genreImages(genre)} />
      ))}
    </div>
  );
}

export default Categories;
