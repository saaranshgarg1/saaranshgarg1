import { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ scrollY, name }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarClass, setNavbarClass] = useState('');
  const [showName, setShowName] = useState(false);
  
  useEffect(() => {
    if (scrollY > 50) {
      setNavbarClass('navbar-scrolled');
    } else {
      setNavbarClass('');
    }
    
    // Show name after scrolling past the hero section (adjust threshold as needed)
    if (scrollY > 50) {
      setShowName(true);
    } else {
      setShowName(false);
    }
  }, [scrollY]);
  
  return (
    <header className={`header ${navbarClass}`}>
      <div className="header-container">
        <a href="#hero" className="logo">
          <span className={`accent-text ${showName ? 'show-name' : ''}`}>
            {showName ? name : ''}
          </span>
        </a>
        
        <div className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            {/* <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li> */}
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
