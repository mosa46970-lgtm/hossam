export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo eng-logo">
          <span className="eng-logo-icon" style={{ width: '32px', height: '32px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polygon points="12,2 22,20 2,20" fill="none" stroke="url(#footerLogoGrad)" strokeWidth="1.8" strokeLinejoin="round"/>
              <line x1="6.5" y1="15" x2="17.5" y2="15" stroke="url(#footerLogoGrad)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="12" y1="7" x2="12" y2="15" stroke="url(#footerLogoGrad)" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="12" cy="15" r="1.2" fill="#00d4ff"/>
              <defs>
                <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff"/>
                  <stop offset="100%" stopColor="#7c3aed"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-text">hossam</span>
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          © 2026 Hossam Yasser. Designed for the future.
        </div>

        {/* Scroll Top */}
        <a href="#home" className="scroll-top" aria-label="Scroll to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 11L12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
