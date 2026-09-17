export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__header">
        <h2 className="experience__title">Work Experience</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', color: '#94a3b8', marginTop: '10px', fontSize: '16px' }}>
          Professional journey in Infrastructure Design, BIM modeling, and Civil Engineering
        </p>
      </div>

      {/* Timeline */}
      <div className="experience__timeline">
        <span className="experience__line"></span>
        <span className="experience__dot experience__dot--active" title="Present"></span>
        <span className="experience__dot" title="2024 - 2026"></span>
        <span className="experience__dot" title="2022"></span>
        <span className="experience__dot" title="2022"></span>
      </div>

      {/* Cards */}
      <div className="experience__cards">
        {/* Card 1: DMA */}
        <article className="experience__card">
          <div className="experience__card-header">
            <span className="experience__year">01/2026 — Present</span>
          </div>
          <h3 className="experience__job">Infrastructure Design &amp; BIM Engineer</h3>
          <h4 className="experience__company">
            <svg className="company-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="7" width="18" height="14" rx="2" />
              <path d="M9 21V3h6v18" />
              <path d="M9 9h.01" />
              <path d="M9 13h.01" />
              <path d="M9 17h.01" />
              <path d="M15 9h.01" />
              <path d="M15 13h.01" />
              <path d="M15 17h.01" />
            </svg>
            DMA for Design and Engineering Consultancy – Sheraton, Egypt
          </h4>
          <ul className="experience__list">
            <li>Develop infrastructure network designs, including water supply, sewerage, stormwater, and utility systems.</li>
            <li>Prepare Basis of Design Reports (BODR) and deliver Schematic Design (SD) and Tender Design (TD) packages.</li>
            <li>Coordinate multidisciplinary designs with Plumbing, Fire Protection, and Electrical teams to ensure fully coordinated project deliverables.</li>
            <li>Develop BIM models for infrastructure networks using Autodesk Civil 3D.</li>
            <li>Automate engineering workflows using Dynamo to improve productivity and reduce repetitive tasks.</li>
            <li>Create and customize Civil 3D components, including Manholes, Valves, and other utility objects, using Autodesk Inventor, Infrastructure Parts Editor (IPE), Catalog Part Content, and Subassembly Composer.</li>
            <li>Contribute to the development of BIM standards and optimized workflows for infrastructure projects.</li>
          </ul>
        </article>

        {/* Card 2: IMAGINE CONSULTANT */}
        <article className="experience__card">
          <div className="experience__card-header">
            <span className="experience__year">10/2024 — 01/2026</span>
          </div>
          <h3 className="experience__job">Infrastructure Design &amp; BIM Engineer</h3>
          <h4 className="experience__company">
            <svg className="company-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="7" width="18" height="14" rx="2" />
              <path d="M9 21V3h6v18" />
              <path d="M9 9h.01" />
              <path d="M9 13h.01" />
              <path d="M9 17h.01" />
              <path d="M15 9h.01" />
              <path d="M15 13h.01" />
              <path d="M15 17h.01" />
            </svg>
            IMAGINE CONSULTANT ENGINEERING – New Cairo, Egypt
          </h4>
          <ul className="experience__list">
            <li>Modeled complete infrastructure utility networks (sewage, water supply, stormwater, firefighting, grey water, medium voltage, low voltage, and light current) using Autodesk Civil 3D.</li>
            <li>Performed clash detection and coordination across multiple networks with Navisworks, delivering conflict-free and constructible designs.</li>
            <li>Prepared high-quality, fully coordinated shop drawings for utility networks and road works, ensuring efficient and accurate site execution.</li>
            <li>Contributed to road shop drawings for the Jazan City for Primary and Downstream Industries (JCPDI), Saudi Arabia, gaining advanced experience in road detailing and coordination.</li>
            <li>Collaborated with design and site teams to resolve technical issues and improve constructability.</li>
            <li>Assisted in the design of infrastructure networks (sewage, water supply, stormwater, irrigation, and firefighting), strengthening both technical accuracy and practical expertise.</li>
          </ul>
        </article>

        {/* Card 3: United Engineers Contracting Company */}
        <article className="experience__card">
          <div className="experience__card-header">
            <span className="experience__year">07/2022 — 08/2022</span>
          </div>
          <h3 className="experience__job">Site Engineer Trainee</h3>
          <h4 className="experience__company">
            <svg className="company-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="7" width="18" height="14" rx="2" />
              <path d="M9 21V3h6v18" />
              <path d="M9 9h.01" />
              <path d="M9 13h.01" />
              <path d="M9 17h.01" />
              <path d="M15 9h.01" />
              <path d="M15 13h.01" />
              <path d="M15 17h.01" />
            </svg>
            United Engineers Contracting Company – Ninth District, October City
          </h4>
          <ul className="experience__list">
            <li>Gained hands-on site experience in carpentry, reinforcement works, formwork installation, and concrete casting for structural elements, developing a solid understanding of construction processes.</li>
          </ul>
        </article>

        {/* Card 4: CMB Company */}
        <article className="experience__card">
          <div className="experience__card-header">
            <span className="experience__year">02/2022 — 02/2022</span>
          </div>
          <h3 className="experience__job">Civil Engineer Trainee</h3>
          <h4 className="experience__company">
            <svg className="company-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="7" width="18" height="14" rx="2" />
              <path d="M9 21V3h6v18" />
              <path d="M9 9h.01" />
              <path d="M9 13h.01" />
              <path d="M9 17h.01" />
              <path d="M15 9h.01" />
              <path d="M15 13h.01" />
              <path d="M15 17h.01" />
            </svg>
            Trainee for CMB Company – Giza, Egypt
          </h4>
          <ul className="experience__list">
            <li>Acquired hands-on experience with modern construction chemicals, supporting quality control and learning about advanced materials and their applications in construction projects.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
