import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Transportation Projects</a></li>
            <li><a href="#organizations">Volunteer Collaborations</a></li>
            <li><a href="mailto:zstarbuckgatech@gmail.com">Contact Me</a></li>
          </ul>
        </div>

        {/* Connect with Me */}
        <div className="footer-section">
  <h4>Contact Me</h4>
  <ul>
    <li>
      {/*rel="noopener noreferrer" serve as security  feature, while _blank opens a separe tab for the linkedin page*/}
      <a 
        href="https://www.linkedin.com/in/zachary-starbuck-74a112113" 
        target="_blank" 
        rel="noopener noreferrer"
        
      >
        LinkedIn
      </a>
    </li>
    <li>
      <a 
        href="https://github.com/zstarbuck"
        target="_blank" 
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </li>
    <li>
      <a href="mailto:zstarbuckgatech@gmail.com">
        Email
      </a>
    </li>
  </ul>
</div>

        {/* Transportation Projects */}
        <div className="footer-section">
          <a href="#projects"><h4>Transportation Projects</h4></a>
          <ul>
            <li><a href="#Asset">Asset Management Overhaul</a></li>
            <li><a href="#Intern">Revamping of Internship Program</a></li>
            <li><a href="#GIS">GIS MARTA Bus Network Maps</a></li>
            <li><a href="#Thesis">Grad Thesis on TNCs and MARTA</a></li>
            <li><a href="#Tokyo">Tokyo Subway Design Studios</a></li>
            <li><a href="#CSCtrails">CSC Active Transit Trails</a></li>
          </ul>
        </div>

        {/* Volunteer Collaborations */}
        <div className="footer-section">
          <a href="#organizations"><h4>Volunteer Collaborations</h4></a>
          <ul>
            <li><a href="#CNU">Congress for the New Urbanism Atlanta</a></li>
            <li><a href="#GPA">Georgia Planning Association</a></li>
            <li><a href="#AHA">Abundant Housing Atlanta</a></li>
            <li><a href="#MARTA">MARTA Army</a></li>
            <li><a href="#PSE">Partnership for Southern Equity</a></li>
          </ul>
        </div>
      </div>
      <div className="logo-copyright" >
          <div>
           <a href="#home"><img src="/nav-logo.png" alt="Nav-Logo"/></a>
          </div>
          <p>©Copyright 2025</p>
        </div>
    </footer>
  );
};

export default Footer;
