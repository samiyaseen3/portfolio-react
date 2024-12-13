import React, { useState } from 'react';
import '../styles/main.css';
import { NavLink } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <div className="row align-center space-between">
          {/* Logo Section */}
          <div className="logo">
            <h1 className="logo-text">sami<span>Portfolio</span></h1>
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={24} color="#fff" />
            ) : (
              <FaBars size={24} color="#fff" />
            )}
          </div>

          {/* Navigation Section */}
          <div className={`nav-bar ${isMenuOpen ? 'open' : ''}`}>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" activeClassName="active" onClick={toggleMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/skills"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/testimonial"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/highlight"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Highlight
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Dark Mode Toggle */}
          <div className="theme-toggle">
            <button onClick={toggleTheme} className="toggle-btn background-button">
              {theme === 'dark' ? (
                <FaSun size={24} color="#FFC107" title="Switch to Light Mode" />
              ) : (
                <FaMoon size={24} color="#ffffff" title="Switch to Dark Mode" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
