import React, { useState, useMemo } from 'react';
import imageData from "../../componets/Home/Main/data.json"
import '../../componets/Home/Main/main.css';
import { images } from '../../componets/Home/Main/images/ImageCollect';
import VideoPlayer from '../../componets/Home/Main/VideoPlayer';
import './home.css';

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

function New() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleClose = () => {
    setSelectedImageIndex(null);
  };


  const sortedData = [...imageData].sort((a, b) => b.year - a.year);

  return (
    <div className="main">
      <div className="image-container">
        {sortedData.map((image, index) => {
          const imgSrc = images[image.id - 1];
          return (
            <div key={image.id} className="image-item" onClick={() => setSelectedImageIndex(image)}>
              <img src={imgSrc} alt={image.name} />
              <h3>{image.name}</h3>
              <div className="image-description">{image.description}</div>
            </div>
          );
        })}


        {selectedImageIndex !== null && (
          <div className="overlay" onClick={handleClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <button onClick={handleClose}>X</button>
              {console.log(selectedImageIndex)}
              <h2>{selectedImageIndex.name}</h2>
              <div className="modal-details">
                <span>{selectedImageIndex.year}</span> /
                <span> {selectedImageIndex.genre.join(', ')}</span>
              </div>
              <div className="modal-content">
                <VideoPlayer source={videoSources[selectedImageIndex.id - 1]} />
                <div className="modal-description">{selectedImageIndex.description}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default New;