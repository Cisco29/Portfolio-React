import React from 'react'
import './NavBar.css'


export const NavBar = () => {
    return (
      <nav className="nav-wrapper">
          <div className="nav-content">
              <img className="logo" src="/assets/images/logo.jpg" alt="" width="200" height="100" />
  
              <ul>
                  <li>
                      <a  className="menu-item"> Accueil</a>
                  </li>
                  <li>
                      <a className="menu-item"> Skills</a>
                  </li>
                  <li>
                      <a className="menu-item"> Expérience professionnelle</a>
                  </li>
                  <li>
                      <a className="menu-item"> Accueil</a>
                  </li>
  
                  <button className='contact-btn' onClick={() => {}}>
                      Hire Me
                  </button>
              </ul>
              <button className="menu-btn" onClick={() => {}}>
                <span
                className={"material-symbols-outlined"}
                style={{ fontSize: "0.6rem"}}
                >
                menu
                </span>
              </button>
          </div>
      </nav>
    )
  }
  
export default NavBar