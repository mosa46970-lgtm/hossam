export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>

        <div className="about__text">
          <p className="about__paragraph">
            Passionate Civil Engineer specializing in infrastructure design and BIM modeling.
            I transform engineering requirements into coordinated, high-efficiency wet &amp; dry utility networks.
          </p>

          <p className="about__paragraph1">
            My engineering approach blends obsessive hydraulic precision with robust BIM architectural patterns.
            I design systems that perform reliably under complex peak demands — from municipal water distribution
            and gravity sewage networks to comprehensive stormwater and fire protection models using Revit, WaterCAD, and SewerCAD.
          </p>
        </div>
      </div>

      <div className="about__stats">
        <div className="stat-card">
          <p className="stat-card__number">25+</p>
          <h3 className="stat-card__title">Projects Completed</h3>
        </div>

        <div className="stat-card">
          <p className="stat-card__number">5+</p>
          <h3 className="stat-card__title">Years Experience</h3>
        </div>

        <div className="stat-card">
          <p className="stat-card__number">12+</p>
          <h3 className="stat-card__title">Software Tools</h3>
        </div>

        <div className="stat-card">
          <p className="stat-card__number">10+</p>
          <h3 className="stat-card__title">Certificates</h3>
        </div>
      </div>
    </section>
  );
}
