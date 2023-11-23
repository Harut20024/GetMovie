import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import imageData from '../Main/data.json';
import './ScrollingMenu.css';
import VideoPlayer from '../Main/VideoPlayer';

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

function ScrollingMenu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filtered = imageData.filter(movie =>
        movie.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  }, [debouncedSearchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setSearchTerm('');
    setFilteredMovies([]);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="menu-container">
        <ul className="menu-list">
          <li><NavLink to="GetMovie/">Home</NavLink></li>
          <li><NavLink to="GetMovie/new">TimeLine</NavLink></li>
          <li><NavLink to="GetMovie/list">For Kids</NavLink></li>
          <li><NavLink to="GetMovie/categories">Categories</NavLink></li>
        </ul>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="search-results">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="search-result-item" onClick={() => handleMovieSelect(movie)}>
            <h4>{movie.name}</h4>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
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
    </>
  );
}

export default ScrollingMenu;
