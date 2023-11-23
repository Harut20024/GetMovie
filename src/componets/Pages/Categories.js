import React, { useState } from 'react';
import imageData from '../../componets/Home/Main/data.json';
import { images } from '../../componets/Home/Main/images/ImageCollect';
import "./category.css";
import GenreSection from './GenreSection/GenreSection';
import VideoPlayer from '../../componets/Home/Main/VideoPlayer';

const videoSources = [
  "https://youtu.be/https://youtu.be/YiEFZLRyRQo",
  "https://youtu.be/PE04ESdgnHI",
  "https://youtu.be/hNL5t9mHs5o",
  "https://youtu.be/jEDaVHmw7r4",
  "https://youtu.be/7OVQKoVLLwI",
  "https://youtu.be/SyeyYT3qCT0",
  "https://youtu.be/LvpjJmhniC4",
  "https://youtu.be/INDleu1aHyE",
  "https://youtu.be/yoLFk4JK_RM",
  "https://youtu.be/KK8FHdFluOQ",
  "https://youtu.be/kYUUpS6_Svs",
  "https://youtu.be/Q0mr5HheDyk",
  "https://youtu.be/-FmWuCgJmxo",
  "https://youtu.be/qdFCjwcK8IE",
  "https://youtu.be/WRGCA1H3ltc",
  "https://youtu.be/4I6TC1beVnY",
  "https://youtu.be/VcBllhVj1eA",
  "https://youtu.be/fdF699_b2wI",
  "https://youtu.be/khYegRfpn5A",
  "https://youtu.be/7_YCp0pTadc",
  "https://youtu.be/ijy_S2Ux4Es",
  "https://youtu.be/SbXIj2T-_uk",
  "https://youtu.be/JqnMrgpZoXw",
  "https://youtu.be/cPAbx5kgCJo",
  "https://youtu.be/ILRs2r6lcHY",
  "https://youtu.be/T3nqmGgnJe8",
  "https://youtu.be/NgsQ8mVkN8w",
  "https://youtu.be/vlblxDGoGwo",
  "https://youtu.be/MQLaY2RjqV4",
  "https://youtu.be/Ga6RYejo6Hk",
  "https://youtu.be/0BXCVe8Yww4",
  "https://youtu.be/2QKg5SZ_35I",
  "https://youtu.be/J7nJksXDBWc",
  "https://youtu.be/m73PYIXHKuM",
  "https://youtu.be/iAsK81XwROc"
];

function Categories() {
  const genres = ['Detective', 'Comedy', 'Action', 'Family', 'Kids', "Thriller", "Drama", "Crime", "Adventures"];
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  const genreMovies = (genre) => {
    return imageData.filter(image => image.genre.includes(genre));
  };

  return (
    <div className="categories">
      {genres.map(genre => (
        <GenreSection
          key={genre}
          genre={genre}
          movies={genreMovies(genre)}
          onSelectMovie={handleMovieSelect}
        />
      ))}

      {selectedMovie && (
        <div className="overlay" onClick={handleClose}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button onClick={handleClose}>X</button>
            <h2>{selectedMovie.name}</h2>
            <div className="modal-details">
              <span>{selectedMovie.year}</span> /
              <span> {selectedMovie.genre.join(', ')}</span>
            </div>
            <div className="modal-content">
              <VideoPlayer source={videoSources[selectedMovie.id - 1]} />
              <div className="modal-description">{selectedMovie.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;