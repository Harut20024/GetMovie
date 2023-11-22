import React from 'react';
import { NavLink } from 'react-router-dom';
import './ScrollingMenu.css';

function ScrollingMenu() {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/new">TimeLine</NavLink></li>
        <li><NavLink to="/list">For Kids</NavLink></li>
        <li><NavLink to="/categories">Categories</NavLink></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
    </div>
  );
}

export default ScrollingMenu;
