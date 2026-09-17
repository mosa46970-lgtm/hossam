import { useState, useEffect, useCallback } from 'react';

const BASE = import.meta.env.BASE_URL;
const img = (path) => BASE + path.replace(/^\//, '');

// ─── TEXT DESCRIPTIONS FROM .txt FILES ───
const BIM_DESC = `A selection of BIM and digital engineering works developed using Civil 3D, Navisworks, Subassembly Composer, Dynamo, Inventor, IPE, Part Builder, and Catalog Part Editor. The work includes 3D modeling, BIM coordination, custom assemblies and components, design automation, shop drawings, model review, and clash detection, with a focus on accuracy, coordination, efficiency, and developing smart engineering workflows.`;

const DESIGN_DESC = `A selection of infrastructure and utility design works covering water supply, sanitary sewerage, stormwater drainage, irrigation, fire fighting, and force main piping systems, developed using SewerCAD, WaterCAD, and InfraWizard. The work includes network layout, hydraulic analysis, pipe sizing, routing, profiles, and system optimization, with a focus on delivering accurate, coordinated, and practical engineering solutions.`;

const SHOP_DESC = `Construction-ready shop drawings developed from BIM models, providing detailed dimensions, materials, installation specifications, and coordination notes for site execution teams. Each drawing follows ISO and Egyptian code standards at LOD 400 fabrication level.`;

// ─── ALL IMAGE GROUPS ───
const GROUPS = [
  {
    id: 'bim-parts',
    label: 'BIM — 3D Elements',
    icon: '🏗️',
    description: BIM_DESC,
    images: [
      img('/all_bim/BIM PARTS  (1).jpg'),
      img('/all_bim/BIM PARTS  (2).jpg'),
      img('/all_bim/BIM PARTS  (3).jpg'),
      img('/all_bim/BIM PARTS  (4).jpg'),
      img('/all_bim/BIM PARTS  (5).jpg'),
      img('/all_bim/BIM PARTS  (6).jpg'),
      img('/all_bim/BIM PARTS  (7).jpg'),
      img('/all_bim/BIM PARTS  (8).jpg'),
      img('/all_bim/BIM PARTS  (9).jpg'),
      img('/all_bim/BIM PARTS  (10).jpg'),
      img('/all_bim/BIM PARTS  (23).jpg'),
      img('/all_bim/BIM PARTS  (24).jpg'),
      img('/all_bim/BIM PARTS  (25).jpg'),
      img('/all_bim/BIM PARTS  (26).jpg'),
      img('/all_bim/BIM PARTS  (27).jpg'),
      img('/all_bim/BIM PARTS  (28).jpg'),
      img('/all_bim/BIM PARTS  (29).jpg'),
      img('/all_bim/BIM PARTS  (30).jpg'),
      img('/all_bim/BIM PARTS  (31).jpg'),
      img('/all_bim/BIM PARTS  (32).jpg'),
      img('/all_bim/BIM PARTS  (33).jpg'),
      img('/all_bim/BIM PARTS  (34).jpg'),
    ],
  },
  {
    id: 'bim-sheets',
    label: 'BIM — Infrastructure Sheets',
    icon: '📐',
    description: BIM_DESC,
    images: [
      img('/all_bim/BIMSHD (1).jpg'),
      img('/all_bim/BIMSHD (2).jpg'),
      img('/all_bim/BIMSHD (3).jpg'),
      img('/all_bim/BIMSHD (4).jpg'),
      img('/all_bim/BIMSHD (5).jpg'),
      img('/all_bim/BIMSHD (6).jpg'),
      img('/all_bim/BIMSHD (7).jpg'),
      img('/all_bim/BIMSHD (8).jpg'),
      img('/all_bim/BIMSHD (9).jpg'),
      img('/all_bim/BIMSHD (10).jpg'),
    ],
  },
  {
    id: 'bim-models',
    label: 'BIM — 3D Network Models',
    icon: '🌐',
    description: BIM_DESC,
    images: [
      img('/all_bim/BIM1.png'),
      img('/all_bim/BIM2.png'),
      img('/all_bim/BIM3.png'),
      img('/all_bim/Composite.png'),
      img('/all_bim/TE&E.Compound.png'),
      img('/all_bim/Irrigation model.png'),
      img('/all_bim/Lv model.png'),
      img('/all_bim/Sewage model.png'),
      img('/all_bim/Sewage model_1.png'),
      img('/all_bim/mv model.png'),
      img('/all_bim/water model.png'),
      img('/all_bim/water model_1.png'),
      img('/all_bim/water model_2.png'),
      img('/all_bim/duct.png'),
    ],
  },
  {
    id: 'hydraulic-sims',
    label: 'Hydraulic & Network Simulations',
    icon: '💧',
    description: DESIGN_DESC,
    images: [
      img('/all_design/FMP (1).jpg'),
      img('/all_design/FMP (2).jpg'),
      img('/all_design/FMP (3).jpg'),
      img('/all_design/FMP (4).jpg'),
      img('/all_design/FMP (5).jpg'),
      img('/all_design/FMP (6).jpg'),
      img('/all_design/FMP (7).jpg'),
      img('/all_design/Storm (1).jpg'),
      img('/all_design/Storm (2).jpg'),
      img('/all_design/Storm (3).jpg'),
      img('/all_design/Storm (4).jpg'),
    ],
  },
  {
    id: 'network-models',
    label: 'Design — Network Models',
    icon: '🔗',
    description: DESIGN_DESC,
    images: [
      img('/all_design/Fire network model.png'),
      img('/all_design/Fire network model_1.png'),
      img('/all_design/Sewage network model.png'),
      img('/all_design/Irrigation network model.png'),
      img('/all_design/Storm water network model.png'),
      img('/all_design/Storm water network model _1.png'),
      img('/all_design/water network model.png'),
    ],
  },
  {
    id: 'shop-drawings',
    label: 'Shop Drawings',
    icon: '📋',
    description: SHOP_DESC,
    images: [
      img('/shop_drawings/1.png'),
      img('/shop_drawings/2.png'),
      img('/shop_drawings/3.png'),
      img('/shop_drawings/4.png'),
      img('/shop_drawings/5.png'),
      img('/shop_drawings/6.png'),
      img('/shop_drawings/7.png'),
      img('/shop_drawings/8.png'),
      img('/shop_drawings/9.png'),
    ],
  },
];

export default function GallerySlider() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(null); // {groupIdx, imgIdx}

  const group = GROUPS[activeGroup];

  // Reset image index when switching group
  const switchGroup = (idx) => {
    setActiveGroup(idx);
    setActiveImg(0);
  };

  const prevImg = useCallback(() => {
    setActiveImg((p) => (p === 0 ? group.images.length - 1 : p - 1));
  }, [group.images.length]);

  const nextImg = useCallback(() => {
    setActiveImg((p) => (p === group.images.length - 1 ? 0 : p + 1));
  }, [group.images.length]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (lightbox !== null) {
        if (e.key === 'Escape') setLightbox(null);
        if (e.key === 'ArrowLeft') setLightbox((lb) => lb && { ...lb, imgIdx: lb.imgIdx === 0 ? GROUPS[lb.groupIdx].images.length - 1 : lb.imgIdx - 1 });
        if (e.key === 'ArrowRight') setLightbox((lb) => lb && { ...lb, imgIdx: (lb.imgIdx + 1) % GROUPS[lb.groupIdx].images.length });
      } else {
        if (e.key === 'ArrowLeft') prevImg();
        if (e.key === 'ArrowRight') nextImg();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, prevImg, nextImg]);

  const lbGroup = lightbox !== null ? GROUPS[lightbox.groupIdx] : null;
  const lbImg = lbGroup ? lbGroup.images[lightbox.imgIdx] : null;

  const totalAll = GROUPS.reduce((sum, g) => sum + g.images.length, 0);

  return (
    <section className="gal-section" id="gallery">

      {/* Header */}
      <div className="section-title">
        <h2>Engineering Gallery <span className="gal-count-badge">{totalAll} images</span></h2>
      </div>
      <p className="gallery-section-desc">
        A comprehensive visual archive of BIM models, infrastructure coordination sheets,
        hydraulic simulations, and construction shop drawings.
      </p>

      {/* Group Tabs */}
      <div className="gal-group-tabs">
        {GROUPS.map((g, i) => (
          <button
            key={g.id}
            type="button"
            className={`gal-group-tab ${i === activeGroup ? 'active' : ''}`}
            onClick={() => switchGroup(i)}
          >
            <span className="gal-tab-icon">{g.icon}</span>
            <span className="gal-tab-label">{g.label}</span>
            <span className="gal-tab-count">{g.images.length}</span>
          </button>
        ))}
      </div>

      {/* Description from txt */}
      <div className="gal-group-desc">
        <p>{group.description}</p>
      </div>

      {/* Main slider */}
      <div className="gal-slider-wrap">

        {/* Featured Image */}
        <div className="gal-main-frame">
          <button type="button" className="gal-nav-btn gal-prev" onClick={prevImg} aria-label="Previous">‹</button>

          <div
            className="gal-main-img-box"
            onClick={() => setLightbox({ groupIdx: activeGroup, imgIdx: activeImg })}
            title="Click to zoom"
          >
            <img
              key={group.images[activeImg]}
              src={group.images[activeImg]}
              alt={`${group.label} ${activeImg + 1}`}
              className="gal-main-img"
            />
            <div className="gal-zoom-hint">🔍 Click to zoom</div>
            <div className="gal-img-counter">{activeImg + 1} / {group.images.length}</div>
          </div>

          <button type="button" className="gal-nav-btn gal-next" onClick={nextImg} aria-label="Next">›</button>
        </div>

        {/* Thumbnail Strip */}
        <div className="gal-thumbs">
          {group.images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`gal-thumb ${i === activeImg ? 'active' : ''}`}
              onClick={() => setActiveImg(i)}
              title={`Image ${i + 1}`}
            >
              <img src={src} alt={`thumb ${i + 1}`} loading="lazy" />
              {i === activeImg && <span className="gal-thumb-active-dot" />}
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && lbGroup && (
        <div className="gal-lightbox" onClick={() => setLightbox(null)}>
          <div className="gal-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gal-lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >✕</button>

            <button
              type="button"
              className="gal-lightbox-prev"
              aria-label="Previous"
              onClick={() => setLightbox((lb) => ({ ...lb, imgIdx: lb.imgIdx === 0 ? lbGroup.images.length - 1 : lb.imgIdx - 1 }))}
            >‹</button>

            <img src={lbImg} alt={`${lbGroup.label} ${lightbox.imgIdx + 1}`} className="gal-lightbox-img" />

            <button
              type="button"
              className="gal-lightbox-next"
              aria-label="Next"
              onClick={() => setLightbox((lb) => ({ ...lb, imgIdx: (lb.imgIdx + 1) % lbGroup.images.length }))}
            >›</button>

            <div className="gal-lightbox-footer">
              <span className="gal-lightbox-group">{lbGroup.icon} {lbGroup.label}</span>
              <span className="gal-lightbox-count">{lightbox.imgIdx + 1} / {lbGroup.images.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
