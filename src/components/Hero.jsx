import { useState, useEffect } from 'react';

const WORDS = [
  'Civil Engineer',
  'Infrastructure Designer',
  'BIM Specialist',
  'Water Networks Engineer',
  'Hydraulic Modeling Expert'
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
          <img src="/profile.jpg" alt="Hossam Yasser" className="profile-img" />

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
          Civil Engineer specializing in Infrastructure Design &amp; BIM Modeling.
          Designing smart water distribution, sewage, and stormwater networks
          merging computational engineering with high-precision 3D modeling.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Download CV</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
