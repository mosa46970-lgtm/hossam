export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__header">
        <h2 className="experience__title">Experience</h2>
      </div>

      {/* Timeline */}
      <div className="experience__timeline">
        <span className="experience__line"></span>
        <span className="experience__dot"></span>
        <span className="experience__dot"></span>
        <span className="experience__dot"></span>
        <span className="experience__dot experience__dot--active"></span>
      </div>

      {/* Cards */}
      <div className="experience__cards">
        {/* Card 1 */}
        <article className="experience__card">
          <span className="experience__year">2024 — Present</span>
          <h3 className="experience__job">Senior BIM &amp; Infra Engineer</h3>
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
            Infrastructure Mega Projects
          </h4>
          <p className="experience__text">
            Leading BIM coordination, clash resolution and infrastructure modeling across multidisciplinary wet &amp; dry utility networks for residential compounds.
          </p>
        </article>

        {/* Card 2 */}
        <article className="experience__card">
          <span className="experience__year">2022 — 2024</span>
          <h3 className="experience__job">Infrastructure Design Engineer</h3>
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
            Engineering Consultancy Firm
          </h4>
          <p className="experience__text">
            Designed municipal water distribution and gravity sewer networks using WaterCAD &amp; SewerCAD with extensive hydraulic gradient &amp; pressure calculations.
          </p>
        </article>

        {/* Card 3 */}
        <article className="experience__card">
          <span className="experience__year">2021 — 2022</span>
          <h3 className="experience__job">Civil Site Engineer</h3>
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
            Construction &amp; Contracting Co.
          </h4>
          <p className="experience__text">
            Supervised field execution of pipeline laying, manhole construction, hydrostatic pressure testing, and coordinated design revisions with consultants.
          </p>
        </article>

        {/* Card 4 */}
        <article className="experience__card">
          <span className="experience__year">2019 — 2021</span>
          <h3 className="experience__job">Junior Civil Engineer</h3>
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
            Civil Design Studio
          </h4>
          <p className="experience__text">
            Prepared shop drawings, profile alignments, and quantity takeoffs for stormwater drainage and irrigation systems using AutoCAD Civil 3D.
          </p>
        </article>
      </div>
    </section>
  );
}
