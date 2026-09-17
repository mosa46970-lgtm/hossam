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
            Infrastructure Design &amp; BIM Engineer specializing in utility network design,
            Civil 3D modeling, and BIM coordination. Open for infrastructure design projects,
            BIM coordination roles, and hydraulic engineering consultations.
          </p>

          <div className="contact-list">
            {/* Email */}
            <div className="contact-item">
              <a href="mailto:hossamyasseribrahimesmail@gmail.com" className="contact-circle" title="Send Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="M3 7l9 6 9-6"></path>
                </svg>
              </a>
              <div className="contact-detail">
                <span className="contact-label">Email</span>
                <a href="mailto:hossamyasseribrahimesmail@gmail.com" className="contact-val">
                  hossamyasseribrahimesmail@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-circle" title="Location">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Location</span>
                <span className="contact-val">Cairo, Egypt</span>
              </div>
            </div>

            {/* Phone / WhatsApp 1 */}
            <div className="contact-item">
              <a href="tel:+201501777929" className="contact-circle" title="Call Primary Number">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
              <div className="contact-detail">
                <span className="contact-label">Phone &amp; WhatsApp 1</span>
                <div className="contact-val-row">
                  <a href="tel:+201501777929" className="contact-val">+20 150 177 7929</a>
                  <a href="https://wa.me/201501777929" target="_blank" rel="noopener noreferrer" className="wa-chip" title="Chat on WhatsApp">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Phone / WhatsApp 2 */}
            <div className="contact-item">
              <a href="tel:+201142267208" className="contact-circle" title="Call Second Number">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
              <div className="contact-detail">
                <span className="contact-label">Phone &amp; WhatsApp 2</span>
                <div className="contact-val-row">
                  <a href="tel:+201142267208" className="contact-val">+20 114 226 7208</a>
                  <a href="https://wa.me/201142267208" target="_blank" rel="noopener noreferrer" className="wa-chip" title="Chat on WhatsApp">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links with SVG */}
          <div className="social-connect-wrapper">
            <span className="social-connect-title">Connect &amp; Chat:</span>
            <div className="social-list">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hossam-yasser18"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-link--linkedin"
                aria-label="LinkedIn Profile"
                title="Hossam Yasser on LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
                <span className="social-tooltip">LinkedIn</span>
              </a>

              {/* WhatsApp 1 */}
              <a
                href="https://wa.me/201501777929"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-link--whatsapp"
                aria-label="WhatsApp 01501777929"
                title="WhatsApp: +20 150 177 7929"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.3-.778.979-.954 1.18-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.026-.915-1.72-2.045-1.921-2.39-.201-.346-.021-.533.13-.682.135-.135.301-.351.452-.527.15-.175.201-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.244-.589-.493-.509-.678-.518l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.512c0 1.482 1.08 2.912 1.23 3.113.151.2 2.126 3.246 5.15 4.553.72.31 1.282.496 1.72.635.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.27 4.9L2 22l5.24-1.37c1.41.77 3.01 1.21 4.8 1.21 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                </svg>
                <span className="social-tooltip">WhatsApp 1</span>
              </a>

              {/* WhatsApp 2 */}
              <a
                href="https://wa.me/201142267208"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-link--whatsapp"
                aria-label="WhatsApp 01142267208"
                title="WhatsApp: +20 114 226 7208"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.3-.778.979-.954 1.18-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.026-.915-1.72-2.045-1.921-2.39-.201-.346-.021-.533.13-.682.135-.135.301-.351.452-.527.15-.175.201-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.244-.589-.493-.509-.678-.518l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.512c0 1.482 1.08 2.912 1.23 3.113.151.2 2.126 3.246 5.15 4.553.72.31 1.282.496 1.72.635.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.27 4.9L2 22l5.24-1.37c1.41.77 3.01 1.21 4.8 1.21 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                </svg>
                <span className="social-tooltip">WhatsApp 2</span>
              </a>

              {/* Email Button */}
              <a
                href="mailto:hossamyasseribrahimesmail@gmail.com"
                className="social-link social-link--email"
                aria-label="Direct Email"
                title="Send Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="M3 7l9 6 9-6"></path>
                </svg>
                <span className="social-tooltip">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
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
