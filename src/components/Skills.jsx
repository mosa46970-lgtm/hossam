const SKILLS_DATA = [
  { name: 'Autodesk Revit (BIM)', level: '95%', className: 'revit', width: '95%' },
  { name: 'AutoCAD Civil 3D', level: '90%', className: 'civil3d', width: '90%' },
  { name: 'WaterCAD & WaterGEMS', level: '92%', className: 'watercad', width: '92%' },
  { name: 'SewerCAD & SewerGEMS', level: '88%', className: 'sewercad', width: '88%' },
  { name: 'StormCAD & Hydrology', level: '85%', className: 'stormcad', width: '85%' },
  { name: 'Navisworks & Clash Detection', level: '90%', className: 'navis', width: '90%' },
  { name: 'Hydraulic Analysis', level: '92%', className: 'hydraul', width: '92%' },
  { name: 'Infrastructure Design', level: '95%', className: 'infra', width: '95%' },
  { name: 'BIM Coordination & LOD 350', level: '90%', className: 'bimco', width: '90%' },
  { name: 'AutoCAD (2D & 3D)', level: '95%', className: 'autocad', width: '95%' },
  { name: 'Clash Resolution', level: '88%', className: 'clash', width: '88%' },
  { name: 'MS Office & Technical Reports', level: '95%', className: 'msoffice', width: '95%' },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {SKILLS_DATA.map((skill, index) => (
          <div className={`skill-card ${index === 1 ? 'active' : ''}`} key={skill.name}>
            <div className="skill-head">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>

            <div className="progress">
              <span
                className={`skill-fill ${skill.className}`}
                style={{ width: skill.width }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
