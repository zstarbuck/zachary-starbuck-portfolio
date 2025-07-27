import LinkedIn from '../../assets/Linkedin-logo';
import Github from '../../assets/Github-logo';
import './Home.css';


const Home = () => {
  return (
    <div className="home"id="home">
      <nav className="navbar">
        <div className="logo"></div>
        <div className="flex-row">
          <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Transportation Projects</a></li>
          <li><a href="#organizations">Volunteer Collaborations</a></li>
        </ul>
        <a href="mailto:zstarbuckgatech@gmail.com" className="contact-btn">Contact Me</a >
        </div>
      </nav>

      <div className='main-content-wrapper'>
      <section className="hero">
        <div className="hero-text">
          <p className="welcome">Welcome to <span className="my-name">Zachary Starbuck's</span> Portfolio</p>
          <h1>
            Intersecting Transit<br />
            Operations, Data,<br />
            and Advocacy
          </h1>
          <p className="description">
            I am a transportation professional and advocate with experience 
            in public transit planning, data analysis, policy advocacy, and community outreach.
          </p>
        </div>
      </section>
      <div className="hero-image">
          <img src="/homepage-image.png" alt="Transit Vehicle" />
      </div>
      </div>

      <div className="social-icons">
        <div className="icon-outline">
          <a href="https://www.linkedin.com/in/zachary-starbuck-74a112113" target="_blank" rel="noopener noreferrer">
          <LinkedIn/>
          </a>
        </div>
        <div className='icon-outline'>
        <a href="https://github.com/zstarbuck" target="_blank" rel="noopener noreferrer">
        <Github/>
        </a>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
