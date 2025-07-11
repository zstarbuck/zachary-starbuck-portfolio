
import './About.css'; // External CSS file

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-left">
        <div className="about-section">
          <div className="dot" />
          <h2>My Expertise</h2>
          <p>
            As a transportation professional and urbanist advocate, I specialize in managing administrative work,
            data analysis, and stakeholder engagement.
          </p>
        </div>

        <div className="about-section">
          <div className="dot" />
          <h2>My Approach</h2>
          <p>
            I believe in a collaborative, cross-functional approach to transportation efforts that seeks to
            “meet people where they are.”
          </p>
        </div>

        <div className="about-section">
          <div className="dot" />
          <h2>My Impact</h2>
          <p>
            I have assisted MARTA and advocacy orgs such as the Congress for New Urbanism with developing projects
            and programs.
          </p>
        </div>
      </div>

      <div className="about-right">
        {/* <img src="/chromaticpurpletrain.png" alt="Modern Streetcar" className="about-image" /> */}
      </div>
    </div>
  );
};

export default About;
