import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className = "menu-bar">
      {/* Menu items */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  ); 
};

export default MenuBar;