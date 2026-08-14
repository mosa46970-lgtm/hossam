import { useState, useEffect } from 'react';

const CATEGORIES = ['All', 'BIM Parts (3D Elements)', 'BIM Infrastructure Sheets', 'Hydraulic & Network Simulations'];

const ALL_SLIDES = [
  // ─── BIM PARTS (1 to 10 + key ones) ───
  {
    id: 'part-1',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 01 - Precast Chamber Assembly',
    image: '/all_bim/BIM PARTS  (1).jpg',
    discipline: 'Autodesk Revit Structure & MEP',
    definition: 'Reinforced concrete precast chamber unit with stepped invert channel and cast-in pipe penetration sleeves.',
    details: [{ label: 'LOD', value: 'LOD 400 Shop Detail' }, { label: 'Element', value: 'Drop Manhole Base' }, { label: 'Material', value: 'Sulfate Resistant C35' }],
  },
  {
    id: 'part-2',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 02 - Valve Chamber & Actuator Fitting',
    image: '/all_bim/BIM PARTS  (2).jpg',
    discipline: 'Revit Mechanical Piping',
    definition: 'Flanged butterfly isolation valve assembly with motorized actuator, dismantle joint, and pressure transmitter tapping.',
    details: [{ label: 'LOD', value: 'LOD 350 Fabrication' }, { label: 'Fitting', value: 'Dismantling Joint PN16' }, { label: 'Valve', value: 'Resilient Seat BFV' }],
  },
  {
    id: 'part-3',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 03 - Stormwater Catch Basin & Grating',
    image: '/all_bim/BIM PARTS  (3).jpg',
    discipline: 'Revit Civil Infrastructure',
    definition: 'Roadside heavy-duty ductile iron gully grating class D400 with silt bucket trap and lateral outlet connection.',
    details: [{ label: 'Load Class', value: 'EN 124 Class D400' }, { label: 'Sump Depth', value: '0.45m Silt Storage' }, { label: 'Pipe Outlet', value: 'UPVC 200mm' }],
  },
  {
    id: 'part-4',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 04 - High-Pressure Fire Hydrant Standpipe',
    image: '/all_bim/BIM PARTS  (4).jpg',
    discipline: 'Fire Protection BIM',
    definition: 'Pillar fire hydrant branch connection featuring auxiliary gate valve, thrust block support, and 2.5" NST hose outlets.',
    details: [{ label: 'Standard', value: 'NFPA 24 / AWWA C502' }, { label: 'Test Pressure', value: '20 Bar Hydrostatic' }, { label: 'Thrust Block', value: 'Concrete K250' }],
  },
  {
    id: 'part-5',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 05 - Underground Electrical Duct Spacer Bank',
    image: '/all_bim/BIM PARTS  (5).jpg',
    discipline: 'Electrical Infrastructure',
    definition: 'Multi-way PVC conduit duct bank arrangement with plastic modular spacers, grounding copper wire, and warning marker tape.',
    details: [{ label: 'Configuration', value: '2x4 8-Way Conduits' }, { label: 'Conduit Dia', value: '160mm Heavy Duty' }, { label: 'Encasement', value: 'Sand Bedding & Lean Conc' }],
  },
  {
    id: 'part-6',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 06 - Irrigation Solenoid Valve Manifold',
    image: '/all_bim/BIM PARTS  (6).jpg',
    discipline: 'Landscape Irrigation BIM',
    definition: 'Valve box manifold comprising 24V AC solenoid valves, pressure regulator, manual isolation cock, and quick coupling connection.',
    details: [{ label: 'Control', value: 'Decoder 2-Wire Cable' }, { label: 'Filter', value: 'Y-Strainer 120 Mesh' }, { label: 'Regulator', value: '2.8 Bar Output' }],
  },
  {
    id: 'part-7',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 07 - Potable Water Air Release Chamber',
    image: '/all_bim/BIM PARTS  (7).jpg',
    discipline: 'Water Distribution BIM',
    definition: 'Combination air valve chamber at topographical high point allowing air release during pipe charging and vacuum breaking on drainage.',
    details: [{ label: 'Valve Type', value: 'Triple Function Air Valve' }, { label: 'Size', value: 'DN80 on DN200 Main' }, { label: 'Vent Pipe', value: 'Gooseneck with Screen' }],
  },
  {
    id: 'part-8',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 08 - Thrust Block & Anchor System',
    image: '/all_bim/BIM PARTS  (8).jpg',
    discipline: 'Structural Civil BIM',
    definition: 'Mass concrete thrust block engineered for 90-degree pipeline bend to counteract unbalanced hydrostatic and water hammer forces.',
    details: [{ label: 'Soil Bearing', value: '150 kN/m² Min' }, { label: 'Safety Factor', value: '1.5 Overturning' }, { label: 'Design Surge', value: '1.5x Working Head' }],
  },
  {
    id: 'part-9',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 09 - Telecom Handhole & Fiber Splice Box',
    image: '/all_bim/BIM PARTS  (9).jpg',
    discipline: 'Telecom / Low Current',
    definition: 'Composite polymer concrete handhole enclosure for underground fiber optic splice enclosures and pulling loops.',
    details: [{ label: 'Cover Rating', value: 'B125 Walkway' }, { label: 'Internal Dim', value: '800 x 600 x 700mm' }, { label: 'Sump Hole', value: 'Perforated Base' }],
  },
  {
    id: 'part-10',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 10 - Utility Crossing Separation Sleeves',
    image: '/all_bim/BIM PARTS  (10).jpg',
    discipline: 'Multi-Discipline Utility BIM',
    definition: 'Split-casing steel sleeves and dielectric insulators maintaining mandatory 300mm vertical separation between water and sewer crossings.',
    details: [{ label: 'Separation', value: '300mm Vertical Clearance' }, { label: 'Casing', value: 'Carbon Steel Heavy Grade' }, { label: 'End Seals', value: 'EPDM Mechanical Link-Seal' }],
  },
  {
    id: 'part-23',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 23 - Pipe Penetration & Waterstop Seal',
    image: '/all_bim/BIM PARTS  (23).jpg',
    discipline: 'Structural Waterproofing',
    definition: 'Puddle flange waterstop and swellable hydrophilic strip seal embedded at chamber wall penetrations against groundwater ingress.',
    details: [{ label: 'Waterstop', value: 'Hydrophilic Rubber Strip' }, { label: 'Pressure Head', value: 'Up to 5.0m Water Column' }, { label: 'Epoxy Grout', value: 'Non-shrink Class 1' }],
  },
  {
    id: 'part-24',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 24 - Pump Discharge Header & Non-Return Valve',
    image: '/all_bim/BIM PARTS  (24).jpg',
    discipline: 'Pumping Station BIM',
    definition: 'Dual-swing check valve, eccentric reducer, and pressure gauge assembly on submersible sewage pump delivery pipework.',
    details: [{ label: 'NRV Type', value: 'Non-Slam Silent Check' }, { label: 'Velocity', value: '2.2 m/s Discharge' }, { label: 'Coupling', value: 'Quick Flexible Victaulic' }],
  },
  {
    id: 'part-28',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 28 - Road Crossing Box Culvert Segment',
    image: '/all_bim/BIM PARTS  (28).jpg',
    discipline: 'Civil Structural BIM',
    definition: 'Precast reinforced concrete box culvert segment with tongue-and-groove jointing and mastic sealant for stormwater road crossings.',
    details: [{ label: 'Size', value: '1500 x 1000mm Box' }, { label: 'Live Load', value: 'HA + 45 units HB Loading' }, { label: 'Concrete', value: 'C40/50 Waterproofed' }],
  },
  {
    id: 'part-31',
    category: 'BIM Parts (3D Elements)',
    title: 'BIM 3D Detail Part 31 - Multi-Tier Cable Tray in Walkable Duct',
    image: '/all_bim/BIM PARTS  (31).jpg',
    discipline: 'Tunnel / Duct Infrastructure',
    definition: 'Hot-dip galvanized perforated cable trays mounted on unistrut cantilever arms within utility service tunnel for MV and low voltage feeds.',
    details: [{ label: 'Finish', value: 'HDG 85 microns' }, { label: 'Arm Spacing', value: '1.20m Centers' }, { label: 'Separation', value: '400mm Between Tiers' }],
  },

  // ─── BIM INFRASTRUCTURE SHEETS (BIMSHD 1 to 10) ───
  {
    id: 'shd-1',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 01 - Master Compound 3D Coordination',
    image: '/all_bim/BIMSHD (1).jpg',
    discipline: 'Autodesk Revit Master Model',
    definition: 'Full 3D federated infrastructure model representing combined wet and dry utilities across the entire compound masterplan.',
    details: [{ label: 'Discipline', value: 'Federated Multi-Service' }, { label: 'LOD', value: 'LOD 350 Coordinated' }, { label: 'Grid', value: 'Egyptian Survey Datum' }],
  },
  {
    id: 'shd-2',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 02 - Road Utility Corridor Cross-Section',
    image: '/all_bim/BIMSHD (2).jpg',
    discipline: 'Civil 3D & Revit Corridor',
    definition: 'Detailed cross-sectional view of urban street right-of-way showing asphalt pavement layers, curb alignment, and utility trench offsets.',
    details: [{ label: 'Street Width', value: '24.0m Primary Avenue' }, { label: 'Trench Depth', value: '1.2m to 3.8m' }, { label: 'Clearance', value: 'Zero Conflict Verified' }],
  },
  {
    id: 'shd-3',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 03 - Clustered Manhole Junction 3D Review',
    image: '/all_bim/BIMSHD (3).jpg',
    discipline: 'Navisworks Clash Management',
    definition: 'Detailed 3D inspection of high-density junction intersection where stormwater, sewer, and MV duct banks converge.',
    details: [{ label: 'Clash Status', value: 'Resolved (Zero Hard Clashes)' }, { label: 'Software', value: 'Navisworks Clash Detective' }, { label: 'Coordination', value: 'MEP + Civil Civil' }],
  },
  {
    id: 'shd-4',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 04 - Site Grading & Surface Drainage Contours',
    image: '/all_bim/BIMSHD (4).jpg',
    discipline: 'Civil 3D Surface Grading',
    definition: 'TIN surface elevation contours with flow direction arrows guiding overland surface runoff into designated detention swales and catch basins.',
    details: [{ label: 'Slope Min', value: '1.0% Toward Catch Basins' }, { label: 'Surface', value: 'Proposed Road & Landscape' }, { label: 'Cut/Fill', value: 'Balanced Earthwork' }],
  },
  {
    id: 'shd-5',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 05 - Underground Valve Chamber Spatial Layout',
    image: '/all_bim/BIMSHD (5).jpg',
    discipline: 'Revit Piping & Structure',
    definition: 'Plan and section view of a cast-in-place water network isolation chamber showing access ladder, sump drain, and ventilation.',
    details: [{ label: 'Inside Dim', value: '2.40 x 2.00 x 2.20m' }, { label: 'Cover Slab', value: 'Removable Precast Slabs' }, { label: 'Access', value: 'SS316 Safety Ladder' }],
  },
  {
    id: 'shd-6',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 06 - Sanitary Sewerage Longitudinal Profile',
    image: '/all_bim/BIMSHD (6).jpg',
    discipline: 'Civil 3D Profile & Band Data',
    definition: 'Longitudinal profile sheet displaying chainage, natural ground levels, finished pavement, invert levels, and pipe slope gradients.',
    details: [{ label: 'Scale', value: '1:500 Horizontal / 1:50 Vertical' }, { label: 'Velocity', value: '0.85 - 2.10 m/s' }, { label: 'Drop Type', value: 'External Backdrop Details' }],
  },
  {
    id: 'shd-7',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 07 - Fire Hydrant & Water Loop Orthographic',
    image: '/all_bim/BIMSHD (7).jpg',
    discipline: 'Water & Fire Infrastructure',
    definition: 'Orthographic isometric view of the potable water ring main interconnected with fire fighting pillar hydrant tees.',
    details: [{ label: 'Working Head', value: '65m Static Pressure' }, { label: 'Looping', value: 'Closed Ring Main' }, { label: 'Test Standard', value: 'Hydrostatic 1.5x PN' }],
  },
  {
    id: 'shd-8',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 08 - Irrigation Pump Station & Storage Tank',
    image: '/all_bim/BIMSHD (8).jpg',
    discipline: 'MEP Infrastructure & Tank Detail',
    definition: 'TSE storage underground concrete reservoir layout, booster suction header, automatic backwash disc filters, and variable speed pump sets.',
    details: [{ label: 'Tank Capacity', value: '450 m³ TSE Daily Storage' }, { label: 'Pump Set', value: 'VFD Multi-Stage Booster' }, { label: 'Filtration', value: 'Automatic Disc 120 Mesh' }],
  },
  {
    id: 'shd-9',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 09 - LV/MV Duct Crossing Concrete Encasement',
    image: '/all_bim/BIMSHD (9).jpg',
    discipline: 'Electrical Infrastructure Detail',
    definition: 'Heavy-duty concrete encasement cross-section under main entrance roundabouts protecting electrical feeders against heavy vehicle loads.',
    details: [{ label: 'Reinforcement', value: 'T12 @ 150mm C/C Mesh' }, { label: 'Bedding', value: 'C25 Mass Concrete Encase' }, { label: 'Cover', value: '1.20m Top of Pavement' }],
  },
  {
    id: 'shd-10',
    category: 'BIM Infrastructure Sheets',
    title: 'BIM Infrastructure Sheet 10 - Composite Clash Matrix & Schedule',
    image: '/all_bim/BIMSHD (10).jpg',
    discipline: 'Navisworks & BIM Management',
    definition: 'Clash resolution summary report categorizing resolved spatial conflicts by utility discipline and contractor trade packages.',
    details: [{ label: 'Total Clashes', value: '148 Issues Resolved' }, { label: 'Coordination', value: 'Weekly BIM Workshop' }, { label: 'Format', value: 'BCF & Navisworks NWD' }],
  },

  // ─── HYDRAULIC & NETWORK SIMULATIONS (FMP & Storm & Models) ───
  {
    id: 'fmp-1',
    category: 'Hydraulic & Network Simulations',
    title: 'WaterCAD Simulation 01 - Peak Hour Node Pressure Distribution',
    image: '/all_design/FMP (1).jpg',
    discipline: 'WaterCAD / Bentley WaterGEMS',
    definition: 'Hydraulic simulation contour plot displaying residual pressures at all junction nodes during peak hour demand (P.H.D = 2.5 x Average).',
    details: [{ label: 'Min Pressure', value: '2.5 Bar at Critical Node' }, { label: 'Max Pressure', value: '5.2 Bar at Low Node' }, { label: 'Headloss Gradient', value: '< 3.0 m/km' }],
  },
  {
    id: 'fmp-2',
    category: 'Hydraulic & Network Simulations',
    title: 'WaterCAD Simulation 02 - Pipe Flow Velocity & Friction Loss Run',
    image: '/all_design/FMP (2).jpg',
    discipline: 'WaterCAD Hydraulic Modeling',
    definition: 'Pipe color-coding indicating internal water velocities to confirm absence of stagnant zones (< 0.3 m/s) and excessive velocities (> 2.0 m/s).',
    details: [{ label: 'Target Velocity', value: '0.8 to 1.8 m/s' }, { label: 'Formula', value: 'Darcy-Weisbach & Hazen-Williams' }, { label: 'Pipe Material', value: 'HDPE PE100 PN16' }],
  },
  {
    id: 'fmp-3',
    category: 'Hydraulic & Network Simulations',
    title: 'WaterCAD Simulation 03 - Fire Coincidence Flow Analysis',
    image: '/all_design/FMP (3).jpg',
    discipline: 'Fire Network Hydraulic Run',
    definition: 'Extended period simulation evaluating residual pressure while delivering 30 L/s fire flow simultaneously with average day domestic demand.',
    details: [{ label: 'Fire Flow', value: '30 L/s (1800 L/min)' }, { label: 'Min Residual', value: '1.4 Bar at Flowing Hydrant' }, { label: 'Duration', value: '2.0 Hours per NFPA' }],
  },
  {
    id: 'fmp-4',
    category: 'Hydraulic & Network Simulations',
    title: 'WaterCAD Simulation 04 - Extended Period Simulation (24-Hour EPS)',
    image: '/all_design/FMP (4).jpg',
    discipline: 'EPS Dynamic Simulation',
    definition: '24-hour diurnal pattern run showing tank water level fluctuation, pump duty cycling, and off-peak energy optimization.',
    details: [{ label: 'Diurnal Pattern', value: 'Residential 24h Curve' }, { label: 'Tank Turnover', value: '100% Volume Refresh / 48h' }, { label: 'Pump Control', value: 'Level & Pressure Switch' }],
  },
  {
    id: 'fmp-5',
    category: 'Hydraulic & Network Simulations',
    title: 'WaterCAD Simulation 05 - Water Age & Quality Modeling',
    image: '/all_design/FMP (5).jpg',
    discipline: 'Water Quality & Chlorine Decay',
    definition: 'Computational water age tracking across the entire distribution network ensuring residual chlorine concentration meets WHO standards.',
    details: [{ label: 'Max Water Age', value: '< 36 Hours at Dead Ends' }, { label: 'Free Chlorine', value: '0.2 - 0.5 mg/L Residual' }, { label: 'Flushing Points', value: 'Automated Washouts' }],
  },
  {
    id: 'storm-1',
    category: 'Hydraulic & Network Simulations',
    title: 'StormCAD Simulation 01 - Rational Method Catchment Area Runoff',
    image: '/all_design/Storm (1).jpg',
    discipline: 'StormCAD / Bentley Storm',
    definition: 'Sub-catchment delineation map calculating peak stormwater discharge Q = C.I.A based on composite weighted runoff coefficients.',
    details: [{ label: 'Return Period', value: '10-Year Return Event' }, { label: 'Rainfall Intensity', value: '45 mm/hr (15-min Tc)' }, { label: 'Peak Flow Total', value: '2.85 m³/s Compound Outlet' }],
  },
  {
    id: 'storm-2',
    category: 'Hydraulic & Network Simulations',
    title: 'StormCAD Simulation 02 - Hydraulic Grade Line (HGL) & Surcharge Check',
    image: '/all_design/Storm (2).jpg',
    discipline: 'StormCAD Hydraulic Modeling',
    definition: 'Energy grade line (EGL) and HGL profile inspection verifying that hydraulic surcharge remains at least 0.50m below manhole cover levels.',
    details: [{ label: 'Freeboard', value: '> 0.50m Below Rim Elevation' }, { label: 'Pipe Sizing', value: '300mm to 1200mm Concrete' }, { label: 'Full Flow Check', value: 'Manning’s n = 0.013' }],
  },
  {
    id: 'storm-3',
    category: 'Hydraulic & Network Simulations',
    title: 'StormCAD Simulation 03 - Retention Basin Inflow & Outflow Hydrograph',
    image: '/all_design/Storm (3).jpg',
    discipline: 'Hydrological Basin Routing',
    definition: 'Modified Puls reservoir routing hydrograph simulating retention pond water level rise, storage detention, and controlled orifice discharge.',
    details: [{ label: 'Basin Volume', value: '3,200 m³ Live Storage' }, { label: 'Orifice Plate', value: '400mm Controlled Restrictor' }, { label: 'Drain Time', value: '24 Hours Post-Storm' }],
  },
  {
    id: 'storm-4',
    category: 'Hydraulic & Network Simulations',
    title: 'StormCAD Simulation 04 - Culvert Road Crossing Capacity Verification',
    image: '/all_design/Storm (4).jpg',
    discipline: 'FHWA Culvert Hydraulics',
    definition: 'Inlet and outlet control rating curves for box culverts under main ring road ensuring upstream backwater does not overtop road crown.',
    details: [{ label: 'Control Regime', value: 'Inlet Control at Peak Head' }, { label: 'Headwater Ratio', value: 'HW/D = 1.12 (< 1.20 Max)' }, { label: 'Scour Protection', value: 'Rip-rap Apron L = 6.0m' }],
  },
  {
    id: 'model-fire',
    category: 'Hydraulic & Network Simulations',
    title: 'Fire Network 3D Model Overview',
    image: '/all_design/Fire network model.png',
    discipline: 'Revit & Civil 3D Model',
    definition: 'Full 3D fire fighting network pipe routing with color-coded high-pressure mains, isolation valves, and hydrant branches.',
    details: [{ label: 'Network Class', value: 'Dedicated Fire Water' }, { label: 'Pipe Spec', value: 'Ductile Iron Class K9' }, { label: 'Color Code', value: 'Safety Red Marking' }],
  },
  {
    id: 'model-sewage',
    category: 'Hydraulic & Network Simulations',
    title: 'Sewage Gravity Network 3D Model',
    image: '/all_design/Sewage network model.png',
    discipline: 'SewerCAD & Revit',
    definition: '3D spatial visualization of gravity collector slopes, drop connections, and manhole chamber depths across masterplan topography.',
    details: [{ label: 'Flow Type', value: 'Gravity Open Channel' }, { label: 'Pipe Spec', value: 'UPVC SN8 / GRP PN6' }, { label: 'Color Code', value: 'Brown Sanitary Marking' }],
  },
  {
    id: 'model-water',
    category: 'Hydraulic & Network Simulations',
    title: 'Potable Water Distribution Network 3D Model',
    image: '/all_design/water network model.png',
    discipline: 'WaterCAD & Revit',
    definition: 'Closed-loop potable water grid layout with air relief chambers, sectional boundary valves, and residential service lines.',
    details: [{ label: 'Pressure Class', value: 'PN16 Constant Pressure' }, { label: 'Pipe Spec', value: 'HDPE PE100 / Ductile Iron' }, { label: 'Color Code', value: 'Blue Potable Marking' }],
  },
];

export default function GallerySlider() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const filteredSlides = activeCategory === 'All'
    ? ALL_SLIDES
    : ALL_SLIDES.filter(s => s.category === activeCategory);

  const current = filteredSlides[currentIndex] || filteredSlides[0] || ALL_SLIDES[0];

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === filteredSlides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') setFullscreenImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredSlides.length]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-title">
        <h2>BIM Models &amp; Hydraulic Simulations Gallery ({ALL_SLIDES.length})</h2>
      </div>

      <p className="gallery-section-desc">
        Comprehensive visual archive of {ALL_SLIDES.length} high-resolution engineering assets: 3D BIM parts, infrastructure sheets, and WaterCAD/StormCAD hydraulic simulations.
      </p>

      {/* Category Filter Tabs */}
      <div className="project-filters">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat} {cat === 'All' ? `(${ALL_SLIDES.length})` : `(${ALL_SLIDES.filter(s => s.category === cat).length})`}
          </button>
        ))}
      </div>

      <div className="slider-wrapper">
        {/* Slider Main Stage */}
        <div className="slider-stage">
          {/* Visual Container */}
          <div
            className="slider-image-box"
            onClick={() => setFullscreenImage(current)}
            title="Click for full-screen zoom"
          >
            <img
              src={current.image}
              alt={current.title}
              key={current.id}
              className="slider-img"
            />

            <div className="slider-zoom-tag">
              🔍 Click to Zoom Image
            </div>

            <div className="slider-badge-tag">
              {current.category}
            </div>
          </div>

          {/* Technical Specs & Definition Panel */}
          <div className="slider-info-panel">
            <div>
              <div className="slider-discipline-tag">{current.discipline}</div>
              <h3 className="slider-title">{current.title}</h3>

              <div className="slider-definition-box">
                <h4>Engineering Definition &amp; Scope:</h4>
                <p>{current.definition}</p>
              </div>

              <div className="slider-details-grid">
                {current.details.map((d) => (
                  <div className="slider-detail-item" key={d.label}>
                    <span className="slider-detail-label">{d.label}</span>
                    <span className="slider-detail-value">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Action Buttons */}
            <div className="slider-controls-bar">
              <button
                type="button"
                className="slider-nav-btn prev"
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                ← Previous
              </button>

              <span className="slider-counter">
                {currentIndex + 1} / {filteredSlides.length}
              </span>

              <button
                type="button"
                className="slider-nav-btn next"
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation Strip */}
        <div className="slider-thumbnails">
          {filteredSlides.map((slide, idx) => (
            <button
              type="button"
              className={`slider-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              title={slide.title}
            >
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <span className="thumb-index">{idx + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      {fullscreenImage && (
        <div className="lightbox-overlay" onClick={() => setFullscreenImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setFullscreenImage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img src={fullscreenImage.image} alt={fullscreenImage.title} />
            <div className="lightbox-info">
              <div className="slider-discipline-tag">{fullscreenImage.discipline}</div>
              <h3>{fullscreenImage.title}</h3>
              <p>{fullscreenImage.definition}</p>
              <div className="project-tags" style={{ marginTop: '14px' }}>
                {fullscreenImage.details.map(d => (
                  <span key={d.label}>{d.label}: {d.value}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
