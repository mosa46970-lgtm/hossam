export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-heading">
        <h2>Services</h2>
      </div>

      <div className="services-container">
        {/* Service 1 */}
        <div className="service-card">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>

          <h3>Infrastructure Design</h3>

          <p>
            Comprehensive design and hydraulic simulation of water distribution networks, gravity sewage collectors, and stormwater drainage systems.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card active">
          <span className="glow"></span>

          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>

          <h3>BIM Modeling (LOD 300-400)</h3>

          <p>
            Authoring coordinated 3D BIM models using Autodesk Revit for all underground utilities, multi-disciplinary clash detection, and shop drawings.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
            </svg>
          </div>

          <h3>Hydraulic &amp; Flow Simulation</h3>

          <p>
            Simulating steady-state and extended period hydraulic networks using WaterCAD, SewerCAD, and StormCAD for peak demand reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
