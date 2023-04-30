import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    setShowMenu(false);
  };

  return (
    <>
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/">
          <img src="logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="nav-hamburger" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <div className={`nav-links ${showMenu ? 'show-menu' : ''}`}>
      <div className='cross'><img src="close.png" alt="cross" onClick={handleClick} /></div>
        <ul>
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Abt" onClick={handleClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={handleClick}>
              Contact Me
            </Link>
          </li>
          <li>
            <Link to="/Admin" onClick={handleClick}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};
