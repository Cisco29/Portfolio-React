import React, { useState } from 'react'; // Importation de useState depuis 'react'
import './NavBar.css';
import MobileNav from './MobileNav/MobileNav';

const NavBar = () => {
    // Initialisation de l'état openMenu avec useState
    const [openMenu, setOpenMenu] = useState(false);
    
    // Définition de la fonction toggleMenu
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    // Remplacement de '}' à la fin du bloc NavBar
    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="/assets/images/logo.jpg" alt="" width="200" height="100" />
    
                    <ul>
                        <li>
                            <a className="menu-item">Accueil</a> {/* Suppression de l'espace en trop */}
                        </li>
                        <li>
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Expérience professionnelle</a>
                        </li>
                        <li>
                            <a className="menu-item">Accueil</a>
                        </li>
    
                        <button className='contact-btn' onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"}
                            style={{ fontSize: "0.6rem" }}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
