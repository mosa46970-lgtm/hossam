import { useState, useEffect } from 'react';

const BASE = import.meta.env.BASE_URL;

const WORDS = [
  'Infrastructure Design Engineer',
  'BIM Specialist',
  'Civil 3D Modeler',
  'Utility Network Designer',
  'Hydraulic Infrastructure Expert'
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timer;

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-image">
        <div className="profile-ring">
          <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Hossam Yasser" className="profile-img" />

          <div className="floating-icons">
            <div className="icon-box icon-globe">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a15 15 0 0 1 0 18" />
                <path d="M12 3a15 15 0 0 0 0 18" />
              </svg>
            </div>

            <div className="icon-box icon-window">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                viewBox="0 0 24 24">
                <rect x="4" y="5" width="16" height="14" rx="2" />
                <path d="M4 9h16" />
              </svg>
            </div>

            <div className="icon-box icon-chip">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                viewBox="0 0 24 24">
                <rect x="7" y="7" width="10" height="10" rx="2" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3" />
                <path d="M20 9h3M20 15h3M1 9h3M1 15h3" />
                <rect x="10" y="10" width="4" height="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO THE FUTURE</p>

        <h1 className="hero-title">
          Hi, I&apos;m<br />
          <span>Hossam Yasser</span>
        </h1>

        <h2 className="hero-job">
          <span id="typing">{text}</span>
          <span className="typing-cursor"></span>
        </h2>

        <p className="hero-description">
          Infrastructure Design &amp; BIM Engineer specializing in utility network design,
          Civil 3D modeling, BIM coordination, and construction-ready shop drawings.
          Passionate about AI-assisted engineering workflows.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a
            href={`${BASE}Hossam_Yasser_Civil_Engineer_CV.pdf`}
            download="Hossam_Yasser_Civil_Engineer_CV.pdf"
            className="btn btn-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{marginRight: '7px', verticalAlign: 'middle'}}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
