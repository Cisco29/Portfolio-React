import React from 'react';
import './MobileNav.css';

// eslint-disable-next-line react/prop-types
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
          <img className='logo' src="./assets/images/logo.jpg" alt="" />
          <ul>
            <li>
              <a className="menu-item">Accueil</a> 
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Expérience professionnelle</a>
            </li>
            <li>
              <a className="menu-item">Contactez moi</a> 
            </li>
            <button className='contact-btn' onClick={() => {}}>
              Hire Me
              </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
