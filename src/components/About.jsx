export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>

        <div className="about__text">
          <p className="about__paragraph">
            Infrastructure Design &amp; BIM Engineer specializing in utility network design,
            Civil 3D modeling, BIM coordination, and construction-ready shop drawings.
          </p>

          <p className="about__paragraph1">
            Experienced in multidisciplinary coordination, clash detection, hydraulic infrastructure
            design, and developing detailed utility networks. Passionate about engineering automation
            and AI-assisted workflows that improve design efficiency, accuracy, and coordination.
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
