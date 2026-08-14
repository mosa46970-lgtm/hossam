import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="connect-section" id="contact">
      <div className="connect-box">
        {/* Left Side */}
        <div className="connect-content">
          <h2 className="connect-heading">
            Let&apos;s build <br />
            something <span className="gradient-text">epic.</span>
          </h2>

          <p className="connect-description">
            Currently open for civil engineering consultations, BIM coordination roles,
            and infrastructure design projects. Let&apos;s collaborate and bring precision engineering to your vision.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-circle">
                {/* Email Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="M3 7l9 6 9-6"></path>
                </svg>
              </div>

              <span>hossam.yasser@gmail.com</span>
            </div>

            <div className="contact-item">
              <div className="contact-circle">
                {/* Location Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>

              <span>Cairo, Egypt</span>
            </div>
          </div>

          <div className="social-list">
            <a href="#" className="social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.58.11.79-.25.79-.56v-2.17c-3.25.71-3.93-1.57-3.93-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.62.23 2.82.11 3.12.75.82 1.2 1.87 1.2 3.15 0 4.51-2.75 5.5-5.36 5.79.42.37.79 1.08.79 2.18v3.23c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M4.98 3.5A2.48 2.48 0 112.5 1a2.48 2.48 0 012.48 2.5zM0 8h5v16H0zm7.5 0h4.79v2.19h.07c.67-1.27 2.3-2.61 4.74-2.61 5.07 0 6 3.34 6 7.68V24h-5v-7.46c0-1.78-.03-4.06-2.48-4.06-2.48 0-2.86 1.94-2.86 3.94V24h-5z" />
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M18.9 2H22l-6.8 7.78L23 22h-6.2l-4.86-6.35L6.4 22H3.3l7.28-8.32L1 2h6.36l4.39 5.8L18.9 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="form-wrapper">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#00d4ff' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
              <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '10px' }}>Message Sent!</h3>
              <p style={{ color: '#9fa5b5' }}>Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form-new" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="input-group">
                <input type="email" placeholder="Your Email" required />
              </div>

              <div className="input-group">
                <textarea placeholder="Your Message" rows={6} required></textarea>
              </div>

              <button className="send-btn" type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
