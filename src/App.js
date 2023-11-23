import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from "./componets/Starter/Start"
import ScrollingMenu from "./componets/Home/Menu/ScrollingMenu"
import Home from "./componets/Pages/Home"
import New from './componets/Pages/New';
import Categories from './componets/Pages/Categories';
import List from './componets/Pages/List';
import Footer from "./componets/Footer/Footer"
import './App.css';

function App() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Start />
      <div className={isSticky ? 'fixed-menu' : ''}>
        <ScrollingMenu />
      </div>
      <Routes>
        <Route path="/GetMovie/" element={<Home />} />
        <Route path="GetMovie/new" element={<New />} />
        <Route path="GetMovie/list" element={<List />} />
        <Route path="GetMovie/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
