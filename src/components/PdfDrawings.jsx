import { useState, useEffect, useRef, useCallback } from 'react';

const CATEGORIES = ['All', 'Stormwater & Profiles', 'Water Networks', 'Sewage Networks', 'Fire Protection', 'Irrigation'];

const BASE = import.meta.env.BASE_URL;
const withBase = (path) => (path && path.startsWith('/') ? BASE + path.slice(1) : path);

const RAW_PDF_DOCUMENTS = [
  // ─── Stormwater ───
  {
    id: 'AL-C-SW-120', title: 'Storm Water Drainage Master Plan - Area 1',
    category: 'Stormwater & Profiles', code: 'AL-C-SW-120',
    file: '/pdf/AL-C-SW-120.pdf', previewImg: '/pdf_previews/AL-C-SW-120.jpg',
    discipline: 'Civil / Storm Drainage', size: '16.1 MB',
    description: 'Master stormwater gravity layout for Area 1. Features catchment inlet points, roadside curb gully layout, pipeline routing, and trunk mains leading to retention basin.',
    specs: ['Scale: 1:1000', 'Pipe Dia: 300 - 1000mm', 'IDF: 10-Yr Frequency', 'Authority: Drainage Code'],
    badgeColor: 'purple',
  },
  {
    id: 'AL-C-SW-121', title: 'Storm Water Network Layout - Area 2',
    category: 'Stormwater & Profiles', code: 'AL-C-SW-121',
    file: '/pdf/AL-C-SW-121.pdf', previewImg: '/pdf_previews/AL-C-SW-121.jpg',
    discipline: 'Civil / Storm Drainage', size: '4.9 MB',
    description: 'Area 2 stormwater collection grid with catch basin coordinates, road cross-slope interceptors, and high-velocity trunk channels.',
    specs: ['Scale: 1:1000', 'Material: Concrete / HDPE', 'Min Cover: 1.2m', 'Format: Engineering PDF'],
    badgeColor: 'purple',
  },
  {
    id: 'AL-C-SW-122', title: 'Storm Water Network Layout - Area 3 & Outfall',
    category: 'Stormwater & Profiles', code: 'AL-C-SW-122',
    file: '/pdf/AL-C-SW-122.pdf', previewImg: '/pdf_previews/AL-C-SW-122.jpg',
    discipline: 'Civil / Storm Drainage', size: '6.3 MB',
    description: 'Area 3 downstream storm collection leading to the main energy dissipator and outfall headwall structure.',
    specs: ['Scale: 1:1000', 'Outfall: Box Culvert', 'Energy Dissipator: Rip-rap', 'Format: Engineering PDF'],
    badgeColor: 'purple',
  },
  {
    id: 'AL-C-SW-500', title: 'Storm Water Standard Details & Precast Chambers',
    category: 'Stormwater & Profiles', code: 'AL-C-SW-500',
    file: '/pdf/AL-C-SW-500.pdf', previewImg: '/pdf_previews/AL-C-SW-500.jpg',
    discipline: 'Structural Details', size: '543 KB',
    description: 'Standard construction details for storm manholes, catch basin inlets, gully connections, and precast reinforced concrete junction chambers.',
    specs: ['LOD: 400', 'Standard: ASTM C478', 'Chamber Dia: 1200 - 1800mm', 'Format: Engineering PDF'],
    badgeColor: 'pink',
  },
  {
    id: 'AL-C-SW-501', title: 'Storm Water Longitudinal Profile (Sheet 1)',
    category: 'Stormwater & Profiles', code: 'AL-C-SW-501',
    file: '/pdf/AL-C-SW-501.pdf', previewImg: '/pdf_previews/AL-C-SW-501.jpg',
    discipline: 'Hydraulic Modeling', size: '563 KB',
    description: 'Longitudinal profile Sheet 1 showing natural ground, road formation levels, pipe invert levels, HGL, and hydraulic gradients.',
    specs: ['Horizontal: 1:500', 'Vertical: 1:50', 'Velocity: 1.0 - 2.8 m/s', 'Format: Engineering PDF'],
    badgeColor: 'pink',
  },
  {
    id: 'AL-C-SW-502', title: 'Storm Water Longitudinal Profile (Sheet 2)',
    category: 'Stormwater & Profiles', code: 'AL-C-SW-502',
    file: '/pdf/AL-C-SW-502.pdf', previewImg: '/pdf_previews/AL-C-SW-502.jpg',
    discipline: 'Hydraulic Modeling', size: '545 KB',
    description: 'Longitudinal profile Sheet 2 covering trunk storm lines, drop connections, utility crossing clearances, and outfall elevations.',
    specs: ['Horizontal: 1:500', 'Vertical: 1:50', 'Bedding: Class B Granular', 'Format: Engineering PDF'],
    badgeColor: 'pink',
  },
  // ─── Water Supply ───
  {
    id: 'AL-C-WR-120', title: 'Potable Water Distribution Master Plan - Area 1',
    category: 'Water Networks', code: 'AL-C-WR-120',
    file: '/pdf/AL-C-WR-120.pdf', previewImg: '/pdf_previews/AL-C-WR-120.jpg',
    discipline: 'Water Supply / Pressurized', size: '14.8 MB',
    description: 'Master potable water supply looping network for Area 1. Details ring main configuration, isolation gate valves, node pressures, and service taps.',
    specs: ['Pressure: PN16', 'Material: Ductile Iron / HDPE', 'Flow: Peak Demand Simulation', 'Format: Engineering PDF'],
    badgeColor: 'green',
  },
  {
    id: 'AL-C-WR-121', title: 'Potable Water Distribution Network - Area 2',
    category: 'Water Networks', code: 'AL-C-WR-121',
    file: '/pdf/AL-C-WR-121.pdf', previewImg: '/pdf_previews/AL-C-WR-121.jpg',
    discipline: 'Water Supply / Pressurized', size: '4.7 MB',
    description: 'Area 2 distribution branches, air release valve chambers at high points, washout drain valves at depressions, and compound boundary meters.',
    specs: ['Pressure: 3.5 - 5.0 Bar', 'Valves: Resilient Gate PN16', 'Chamber: Reinforced Concrete', 'Format: Engineering PDF'],
    badgeColor: 'green',
  },
  {
    id: 'AL-C-WR-122', title: 'Potable Water Distribution Network - Area 3',
    category: 'Water Networks', code: 'AL-C-WR-122',
    file: '/pdf/AL-C-WR-122.pdf', previewImg: '/pdf_previews/AL-C-WR-122.jpg',
    discipline: 'Water Supply / Pressurized', size: '6.2 MB',
    description: 'Area 3 network looping, pressure reducing valve (PRV) stations, and connection to elevated balance storage reservoirs.',
    specs: ['Scale: 1:1000', 'PRV Station: Twin Stream', 'Looping: 100% Redundancy', 'Format: Engineering PDF'],
    badgeColor: 'green',
  },
  // ─── Sanitary Sewer ───
  {
    id: 'AL-C-SR-120', title: 'Sanitary Sewer Gravity Master Plan - Area 1',
    category: 'Sewage Networks', code: 'AL-C-SR-120',
    file: '/pdf/AL-C-SR-120.pdf', previewImg: '/pdf_previews/AL-C-SR-120.jpg',
    discipline: 'Sanitary Engineering', size: '14.8 MB',
    description: 'Gravity sanitary sewer master layout for Area 1. Manhole numbering, line coordinates, pipe gradients, and peak discharge capacities.',
    specs: ['Material: UPVC Class 4', 'Min Slope: 0.4%', 'Velocity: 0.8 - 2.5 m/s', 'Format: Engineering PDF'],
    badgeColor: 'orange',
  },
  {
    id: 'AL-C-SR-121', title: 'Sanitary Sewer Gravity Network - Area 2',
    category: 'Sewage Networks', code: 'AL-C-SR-121',
    file: '/pdf/AL-C-SR-121.pdf', previewImg: '/pdf_previews/AL-C-SR-121.jpg',
    discipline: 'Sanitary Engineering', size: '4.7 MB',
    description: 'Area 2 gravity collectors with household house connection chambers, back-drop manhole details, and self-cleansing verification.',
    specs: ['Scale: 1:1000', 'Manhole Dia: 1200mm', 'Invert: Precision Geo-coded', 'Format: Engineering PDF'],
    badgeColor: 'orange',
  },
  {
    id: 'AL-C-SR-122', title: 'Sanitary Sewer Gravity Network - Area 3',
    category: 'Sewage Networks', code: 'AL-C-SR-122',
    file: '/pdf/AL-C-SR-122.pdf', previewImg: '/pdf_previews/AL-C-SR-122.jpg',
    discipline: 'Sanitary Engineering', size: '6.0 MB',
    description: 'Area 3 sub-main collectors and deep trunk sewer sections leading into the central sewage pump lifting station intake.',
    specs: ['Deep Cut: 3.5m - 5.2m', 'Shoring: Trench Box Spec', 'Material: GRP PN6', 'Format: Engineering PDF'],
    badgeColor: 'orange',
  },
  {
    id: 'AL-C-SR-123', title: 'Sanitary Sewer Network - Lift Station & Force Main',
    category: 'Sewage Networks', code: 'AL-C-SR-123',
    file: '/pdf/AL-C-SR-123.pdf', previewImg: '/pdf_previews/AL-C-SR-123.jpg',
    discipline: 'Sanitary / Force Main', size: '4.7 MB',
    description: 'Wet well lift station structural footprint, submersible pump schedule, dual force main pumping lines, and air/vacuum release stations.',
    specs: ['Pumps: Duty / Standby 2+1', 'Force Main: HDPE PN10', 'Surge Vessel: Bladder Type', 'Format: Engineering PDF'],
    badgeColor: 'orange',
  },
  // ─── Fire Protection ───
  {
    id: 'MVP-C-FR-120', title: 'Fire Protection Master Ring Network - Area 1',
    category: 'Fire Protection', code: 'MVP-C-FR-120',
    file: '/pdf/MVP-C-FR-120.pdf', previewImg: '/pdf_previews/MVP-C-FR-120.jpg',
    discipline: 'Fire Fighting / NFPA', size: '22.3 MB',
    description: 'NFPA 24-compliant dedicated underground fire ring main layout for Area 1. Pillar fire hydrant spacing, post indicator valves, and test headers.',
    specs: ['Code: NFPA 24 & Civil Defense', 'Pressure: 8.0 - 10.0 Bar', 'Hydrant Spacing: 90m max', 'Format: Engineering PDF'],
    badgeColor: 'pink',
  },
  {
    id: 'MVP-C-FR-121', title: 'Fire Protection Network & Hydrants - Area 2',
    category: 'Fire Protection', code: 'MVP-C-FR-121',
    file: '/pdf/MVP-C-FR-121.pdf', previewImg: '/pdf_previews/MVP-C-FR-121.jpg',
    discipline: 'Fire Fighting / NFPA', size: '9.7 MB',
    description: 'Area 2 fire protection routing, sectional control valve chambers, Siamese FDC connections, and residential building feed risers.',
    specs: ['Material: Ductile Iron Class K9', 'Hydrants: Wet Barrel Twin 2.5"', 'Format: Engineering PDF'],
    badgeColor: 'pink',
  },
  {
    id: 'MVP-C-FR-122', title: 'Fire Protection Network & Pump Station - Area 3',
    category: 'Fire Protection', code: 'MVP-C-FR-122',
    file: '/pdf/MVP-C-FR-122.pdf', previewImg: '/pdf_previews/MVP-C-FR-122.jpg',
    discipline: 'Fire Fighting / NFPA', size: '11.0 MB',
    description: 'Area 3 fire water ring connection to dedicated fire water storage tanks, UL/FM listed fire pump sets (Electric, Diesel, Jockey).',
    specs: ['Pump Rating: 1500 GPM @ 120 PSI', 'Storage: 4 Hours Demand', 'UL/FM Listed', 'Format: Engineering PDF'],
    badgeColor: 'pink',
  },
  // ─── Irrigation ───
  {
    id: 'AL-C-IR-120', title: 'TSE Landscape Irrigation Master Plan - Area 1',
    category: 'Irrigation', code: 'AL-C-IR-120',
    file: '/pdf/AL-C-IR-120.pdf', previewImg: '/pdf_previews/AL-C-IR-120.jpg',
    discipline: 'Landscape Irrigation', size: '14.6 MB',
    description: 'Treated Sewage Effluent (TSE) pressurized irrigation distribution plan. Details mainline routing, quick-coupling valves, and green belt coverage.',
    specs: ['Water Source: TSE Polished Water', 'Pressure: 4.0 - 5.0 Bar', 'Main Pipe: HDPE PE100 PN16', 'Format: Engineering PDF'],
    badgeColor: 'green',
  },
  {
    id: 'AL-C-IR-121', title: 'Landscape Irrigation Network & Solenoid Zones - Area 2',
    category: 'Irrigation', code: 'AL-C-IR-121',
    file: '/pdf/AL-C-IR-121.pdf', previewImg: '/pdf_previews/AL-C-IR-121.jpg',
    discipline: 'Landscape Irrigation', size: '5.1 MB',
    description: 'Area 2 automated solenoid valve chamber clusters, decoder cable routes, drip lateral manifolds, and rotary sprinkler head layouts.',
    specs: ['Automation: Central Decoder 2-Wire', 'Drip: Pressure Compensating', 'Format: Engineering PDF'],
    badgeColor: 'green',
  },
  {
    id: 'AL-C-IR-122', title: 'Landscape Irrigation & Filtration Tank - Area 3',
    category: 'Irrigation', code: 'AL-C-IR-122',
    file: '/pdf/AL-C-IR-122.pdf', previewImg: '/pdf_previews/AL-C-IR-122.jpg',
    discipline: 'Landscape Irrigation', size: '6.7 MB',
    description: 'Area 3 irrigation network terminal feeds, automatic disc/screen filtration unit sizing, fertilizer injector, and irrigation booster pumps.',
    specs: ['Filtration: 120 Mesh Disc Auto-backwash', 'Fertigation: Venturi Injector', 'Format: Engineering PDF'],
    badgeColor: 'green',
  },
];

const ALL_PDF_DOCUMENTS = RAW_PDF_DOCUMENTS.map((doc) => ({
  ...doc,
  file: withBase(doc.file),
  previewImg: withBase(doc.previewImg),
}));

/* ── Lazy-load image with IntersectionObserver ── */
function LazyImage({ src, alt, className, onClick }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="pdf-thumb-container" onClick={onClick}>
      {!loaded && (
        <div className="pdf-thumb-shimmer">
          <div className="pdf-thumb-shimmer-inner" />
        </div>
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? 'loaded' : 'loading'}`}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}

export default function PdfDrawings() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modal, setModal] = useState(null); // { doc, zoomLevel, panX, panY }
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const bodyRef = useRef(null);

  const filteredDocs = activeCategory === 'All'
    ? ALL_PDF_DOCUMENTS
    : ALL_PDF_DOCUMENTS.filter(d => d.category === activeCategory);

  const openModal = (doc) => setModal({ doc, zoomLevel: 1, panX: 0, panY: 0 });
  const closeModal = useCallback(() => setModal(null), []);

  const navigate = useCallback((dir) => {
    if (!modal) return;
    const idx = filteredDocs.findIndex(d => d.id === modal.doc.id);
    const next = (idx + dir + filteredDocs.length) % filteredDocs.length;
    setModal({ doc: filteredDocs[next], zoomLevel: 1, panX: 0, panY: 0 });
  }, [modal, filteredDocs]);

  const zoomIn  = () => setModal(m => ({ ...m, zoomLevel: Math.min(m.zoomLevel + 0.4, 4) }));
  const zoomOut = () => setModal(m => ({ ...m, zoomLevel: Math.max(m.zoomLevel - 0.4, 0.6), panX: 0, panY: 0 }));
  const resetZoom = () => setModal(m => ({ ...m, zoomLevel: 1, panX: 0, panY: 0 }));

  /* keyboard nav */
  useEffect(() => {
    const onKey = (e) => {
      if (!modal) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft')  navigate(-1);
      if (e.key === '+') zoomIn();
      if (e.key === '-') zoomOut();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal, navigate, closeModal]);

  /* pan handlers */
  const onMouseDown = (e) => {
    if (!modal || modal.zoomLevel <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, panX: modal.panX, panY: modal.panY };
    e.preventDefault();
  };
  const onMouseMove = (e) => {
    if (!isDragging || !modal) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setModal(m => ({ ...m, panX: dragStart.current.panX + dx, panY: dragStart.current.panY + dy }));
  };
  const onMouseUp = () => setIsDragging(false);

  const currentIdx = modal ? filteredDocs.findIndex(d => d.id === modal.doc.id) : -1;

  return (
    <section className="pdf-section" id="drawings">
      <div className="section-title">
        <h2>Engineering Drawings &amp; Blueprints ({ALL_PDF_DOCUMENTS.length})</h2>
      </div>

      <p className="pdf-section-desc">
        Complete vector CAD engineering drawings across 5 disciplines. Click any card to instantly preview the drawing in full-screen with interactive zoom &amp; pan — no waiting for PDF to load.
      </p>

      {/* Category Tabs */}
      <div className="project-filters">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat} {cat === 'All' ? `(${ALL_PDF_DOCUMENTS.length})` : `(${ALL_PDF_DOCUMENTS.filter(d => d.category === cat).length})`}
          </button>
        ))}
      </div>

      <div className="pdf-grid">
        {filteredDocs.map((doc) => (
          <div className={`pdf-card ${doc.badgeColor}`} key={doc.id}>

            {/* Thumbnail with lazy load */}
            <div className="pdf-preview-box" title="Click to view full-screen drawing">
              <div className="pdf-preview-header">
                <span className="pdf-code-tag">{doc.code}</span>
                <span className="pdf-size-tag">{doc.size}</span>
              </div>

              <LazyImage
                src={doc.previewImg}
                alt={doc.title}
                className="pdf-real-thumb"
                onClick={() => openModal(doc)}
              />

              <div className="pdf-click-overlay" onClick={() => openModal(doc)}>
                <div className="pdf-overlay-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" />
                  </svg>
                  <span>Open Drawing</span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="pdf-content">
              <div className="pdf-discipline">{doc.discipline}</div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>

              <div className="pdf-specs">
                {doc.specs.map((spec) => (
                  <span className="pdf-spec-chip" key={spec}>{spec}</span>
                ))}
              </div>

              <div className="pdf-actions">
                <button type="button" className="demo-btn" onClick={() => openModal(doc)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                  View Drawing
                </button>
                <a href={doc.file} className="github-btn" target="_blank" rel="noopener noreferrer" title="Open PDF in browser">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a href={doc.file} download={doc.file.split('/').pop()} className="github-btn" title="Download PDF">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── INSTANT IMAGE VIEWER MODAL ── */}
      {modal && (
        <div className="pdf-modal-overlay" onClick={closeModal}>
          <div className="pdf-modal-container" onClick={e => e.stopPropagation()}>

            {/* Header */}
            <div className="pdf-modal-header">
              <div className="pdf-modal-title-group">
                <span className={`pdf-modal-badge ${modal.doc.badgeColor}`}>{modal.doc.code}</span>
                <div>
                  <h3>{modal.doc.title}</h3>
                  <span className="pdf-modal-filesize">{modal.doc.discipline} • Vector CAD</span>
                </div>
              </div>

              <div className="pdf-modal-actions">
                {/* Navigation */}
                <span className="pdf-nav-counter">{currentIdx + 1} / {filteredDocs.length}</span>
                <button type="button" className="pdf-nav-btn" onClick={() => navigate(-1)}>← Prev</button>
                <button type="button" className="pdf-nav-btn" onClick={() => navigate(1)}>Next →</button>

                {/* Zoom Controls */}
                <div className="pdf-zoom-group">
                  <button type="button" className="pdf-zoom-btn" onClick={zoomOut} title="Zoom Out">−</button>
                  <span className="pdf-zoom-val">{Math.round((modal?.zoomLevel || 1) * 100)}%</span>
                  <button type="button" className="pdf-zoom-btn" onClick={zoomIn} title="Zoom In">+</button>
                  <button type="button" className="pdf-zoom-btn reset" onClick={resetZoom}>Fit</button>
                </div>

                {/* Open original PDF */}
                <a href={modal.doc.file} target="_blank" rel="noopener noreferrer" className="pdf-external-btn" title="Open native PDF">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  PDF
                </a>

                {/* Download */}
                <a href={modal.doc.file} download className="pdf-download-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  DL
                </a>

                <button type="button" className="pdf-modal-close" onClick={closeModal}>✕</button>
              </div>
            </div>

            {/* Image Viewer — instant, no iframe */}
            <div
              ref={bodyRef}
              className="pdf-modal-body drawing-viewer-area"
              style={{ cursor: modal.zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <img
                src={modal.doc.previewImg}
                alt={modal.doc.title}
                className="drawing-hd-image"
                draggable={false}
                style={{
                  transform: `scale(${modal.zoomLevel}) translate(${modal.panX / modal.zoomLevel}px, ${modal.panY / modal.zoomLevel}px)`,
                  transition: isDragging ? 'none' : 'transform 0.2s ease',
                }}
              />
              {modal.zoomLevel === 1 && (
                <div className="drawing-zoom-hint">🔍 Scroll or use +/− to zoom • Drag to pan when zoomed</div>
              )}
            </div>

            {/* Footer — specs */}
            <div className="pdf-modal-footer">
              <p>{modal.doc.description}</p>
              <div className="pdf-modal-specs">
                {modal.doc.specs.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
