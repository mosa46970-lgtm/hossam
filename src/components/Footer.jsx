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

        {/* Footer Socials */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/hossam-yasser18"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
            </svg>
          </a>
          <a
            href="https://wa.me/201501777929"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="WhatsApp: +20 150 177 7929"
            aria-label="WhatsApp 1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.3-.778.979-.954 1.18-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.026-.915-1.72-2.045-1.921-2.39-.201-.346-.021-.533.13-.682.135-.135.301-.351.452-.527.15-.175.201-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.244-.589-.493-.509-.678-.518l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.512c0 1.482 1.08 2.912 1.23 3.113.151.2 2.126 3.246 5.15 4.553.72.31 1.282.496 1.72.635.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.27 4.9L2 22l5.24-1.37c1.41.77 3.01 1.21 4.8 1.21 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://wa.me/201142267208"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="WhatsApp: +20 114 226 7208"
            aria-label="WhatsApp 2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.3-.778.979-.954 1.18-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.026-.915-1.72-2.045-1.921-2.39-.201-.346-.021-.533.13-.682.135-.135.301-.351.452-.527.15-.175.201-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.244-.589-.493-.509-.678-.518l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.512c0 1.482 1.08 2.912 1.23 3.113.151.2 2.126 3.246 5.15 4.553.72.31 1.282.496 1.72.635.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.27 4.9L2 22l5.24-1.37c1.41.77 3.01 1.21 4.8 1.21 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
            </svg>
          </a>
          <a
            href="mailto:hossamyasseribrahimesmail@gmail.com"
            className="footer-social-btn"
            title="Email: hossamyasseribrahimesmail@gmail.com"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <path d="M3 7l9 6 9-6"></path>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          © 2026 Hossam Yasser. Infrastructure &amp; BIM Engineer.
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
