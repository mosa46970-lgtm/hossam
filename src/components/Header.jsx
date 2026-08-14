import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="logo eng-logo">
        {/* Engineering helmet / structure icon */}
        <span className="eng-logo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
            {/* Compass / drafting triangle — civil engineering symbol */}
            <polygon
              points="12,2 22,20 2,20"
              fill="none"
              stroke="url(#logoGrad)"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Horizontal level line inside triangle */}
            <line x1="6.5" y1="15" x2="17.5" y2="15" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Vertical plumb line */}
            <line x1="12" y1="7" x2="12" y2="15" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Center dot */}
            <circle cx="12" cy="15" r="1.2" fill="#00d4ff"/>
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff"/>
                <stop offset="100%" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="eng-logo-text">
          <span className="eng-logo-name">Hossam</span>
          <span className="eng-logo-title">Civil Engineer</span>
        </span>
      </a>

      <nav>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#home" className="active" onClick={() => setMenuActive(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuActive(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setMenuActive(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setMenuActive(false)}>Projects</a></li>
          <li><a href="#drawings" onClick={() => setMenuActive(false)}>Drawings (PDF)</a></li>
          <li><a href="#gallery" onClick={() => setMenuActive(false)}>Gallery</a></li>
          <li><a href="#services" onClick={() => setMenuActive(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
        </ul>
      </nav>

      <div className="menu-btn" onClick={() => setMenuActive(!menuActive)}>
        {menuActive ? '✕' : '☰'}
      </div>
    </header>
  );
}
