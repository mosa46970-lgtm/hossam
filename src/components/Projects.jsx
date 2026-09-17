import { useState } from 'react';

const BASE = import.meta.env.BASE_URL;

const PROJECTS_DATA = [
  {
    color: 'purple',
    title: 'Integrated Multi-Discipline BIM Model',
    description:
      'Full composite 3D BIM model integrating water distribution, gravity sewage, storm drainage, fire protection, and electrical duct banks with complete clash detection and resolution.',
    image: `${BASE}composite.png`,
    tags: ['Revit BIM', 'Navisworks', 'LOD 400', 'Infrastructure'],
  },
  {
    color: 'green',
    title: 'Water Distribution & Supply Network',
    description:
      'Hydraulic design and 3D modeling of a pressurized water network for a mega residential compound. Pressure zones, pipe scheduling, and pumping station simulation.',
    image: `${BASE}bim1.png`,
    tags: ['WaterCAD', 'AutoCAD Civil 3D', 'Revit MEP', 'Hydraulics'],
  },
  {
    color: 'green',
    title: 'Gravity Sewage & Drainage System',
    description:
      'Comprehensive gravity sewer network design featuring pipe profile alignments, invert levels, manhole schedules, and full 3D underground utility coordination.',
    image: `${BASE}sewage.png`,
    tags: ['SewerCAD', 'Gravity Networks', 'Civil 3D', 'Manholes'],
  },
  {
    color: 'pink',
    title: 'Fire Fighting & Storm Water Networks',
    description:
      'Underground fire hydrant network designed per NFPA standards, paired with rational method storm drainage and retention basin modeling.',
    image: `${BASE}storm.png`,
    tags: ['NFPA Codes', 'StormCAD', 'Fire Hydrants', 'Revit'],
  },
  {
    color: 'purple',
    title: 'Smart Landscape Irrigation Network',
    description:
      'Pressurized irrigation distribution model with solenoid valve stations, filtration units, and drip/sprinkler flow management for green landscape zones.',
    image: `${BASE}irrigation.png`,
    tags: ['WaterGEMS', 'Irrigation Design', 'Revit MEP'],
  },
  {
    color: 'orange',
    title: 'LV & MV Electrical Duct Infrastructure',
    description:
      'Low & Medium Voltage power cable routing, concrete duct banks, road crossing encasements, and transformer substation feed corridor modeling.',
    image: `${BASE}lv_model.png`,
    tags: ['Electrical MEP', 'Duct Banks', 'Revit', 'Navisworks'],
  },
];

export default function Projects() {
  const [lightboxProject, setLightboxProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>Selected Projects</h2>
      </div>

      <div className="projects-container">
        {PROJECTS_DATA.map((proj) => (
          <div className={`project-card ${proj.color}`} key={proj.title}>
            <div
              className="project-image"
              onClick={() => setLightboxProject(proj)}
              style={{ cursor: 'pointer' }}
              title="Click to view full model"
            >
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
                width="600"
                height="400"
              />
            </div>

            <div className="project-content">
              <h3>{proj.title}</h3>

              <p>{proj.description}</p>

              <div className="project-tags">
                {proj.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-buttons">
                <button
                  type="button"
                  className="demo-btn"
                  onClick={() => setLightboxProject(proj)}
                >
                  View Model
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </button>

                <a href="#contact" className="github-btn" title="Contact about project">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-view Lightbox Modal */}
      {lightboxProject && (
        <div className="lightbox-overlay" onClick={() => setLightboxProject(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxProject(null)}>✕</button>
            <img src={lightboxProject.image} alt={lightboxProject.title} />
            <div className="lightbox-info">
              <h3>{lightboxProject.title}</h3>
              <p>{lightboxProject.description}</p>
              <div className="project-tags">
                {lightboxProject.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
