import { useState, useRef, useEffect } from 'react';

const BASE = import.meta.env.BASE_URL;

// vid1 = WA0000, vid2 = WA0001, vid3 = WA0002
// User wants order: WA0001 first, WA0000 second, WA0002 third
const VIDEOS = [
  {
    id: 'vid-bim',
    title: 'BIM INFRASTRUCTURE',
    description: 'Detailed infrastructure modeling, coordination, and integrated BIM workflows.',
    src: `${BASE}vid2.mp4`,   // WA0001
    tag: 'BIM',
  },
  {
    id: 'vid-dynamo',
    title: 'DYNAMO WORKFLOW',
    description: 'Automating repetitive tasks to improve modeling efficiency and workflow consistency.',
    src: `${BASE}vid1.mp4`,   // WA0000
    tag: 'AUTOMATION',
  },
  {
    id: 'vid-design',
    title: 'INFRASTRUCTURE DESIGN',
    description: 'Engineering design, calculation sheets, and Basis of Design Report (BODR) development.',
    src: `${BASE}vid3.mp4`,   // WA0002
    tag: 'DESIGN',
  },
];

export default function VideoShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const videoRef = useRef(null);

  // Autoplay first video on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleSelect = (idx) => {
    setActiveIdx(idx);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
      }
    }, 60);
  };

  const active = VIDEOS[activeIdx];

  return (
    <section className="vs-section" id="videos">
      <div className="vs-inner">

        {/* Header */}
        <div className="vs-header">
          <span className="vs-eyebrow">ENGINEERING IN MOTION</span>
          <h2 className="vs-title">Project Showcase Videos</h2>
          <p className="vs-subtitle">
            Live recordings demonstrating real engineering workflows — from BIM coordination
            to design automation and infrastructure deliverables.
          </p>
        </div>

        {/* Tab Switchers */}
        <div className="vs-tabs">
          {VIDEOS.map((v, i) => (
            <button
              key={v.id}
              type="button"
              className={`vs-tab ${i === activeIdx ? 'active' : ''}`}
              onClick={() => handleSelect(i)}
            >
              <span className="vs-tab-num">0{i + 1}</span>
              <span className="vs-tab-name">{v.title}</span>
            </button>
          ))}
        </div>

        {/* Main Player + Info side by side */}
        <div className="vs-stage">
          {/* Video */}
          <div className="vs-player-wrap">
            <div className="vs-player-glow" />
            <div className="vs-badge">{active.tag}</div>
            <video
              ref={videoRef}
              key={active.id}
              className="vs-video"
              controls
              playsInline
              preload="auto"
              muted
            >
              <source src={active.src} type="video/mp4" />
            </video>
          </div>

          {/* Info */}
          <div className="vs-info">
            <div className="vs-info-num">0{activeIdx + 1} / 0{VIDEOS.length}</div>
            <h3 className="vs-info-title">{active.title}</h3>
            <p className="vs-info-desc">{active.description}</p>

            {/* Mini playlist */}
            <div className="vs-mini-list">
              {VIDEOS.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  className={`vs-mini-item ${i === activeIdx ? 'active' : ''}`}
                  onClick={() => handleSelect(i)}
                >
                  <span className="vs-mini-dot" />
                  <span className="vs-mini-label">{v.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
