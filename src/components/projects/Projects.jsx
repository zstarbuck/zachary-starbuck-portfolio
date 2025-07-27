import './Projects.css';

const projects = [
  {
    title: "Asset Management Overhaul Proposal",
    id: "Asset",
    type: {
      title: "Project type: ",
      text: "planning and engineering"
    },
    skills:{
      title:"Skills involved: ",
      text:"planning, Envision framework, PowerPoint design"
    },
    description:
      "In 2024, I worked with MARTA's engineers professionals to create a revision of their 10-year Asset Management Plan, applying my certification in the Envision sustainability framework to better address our infrastructure.",
    image: "/assetmgmt.png",
  },
  {
    title: "Revamping of Internship Program",
    id: "Intern",
    type: {
      title: "Project type: ",
      text: "Operations and Hiring"
    },
    skills:{
      title:"Skills involved: ",
      text:"stakeholder outreach, cross-departmental collaboration, leadership, PowerPoint design, executive presentations"
    },
    description:
      "I served as project manager for a team who conducted an internal review to revamp MARTA’s Internship program. We were responsible for engaging the perspective of critical stakeholders and aligning with our workforce development goals.",
    image: "/internship.png",
  },
  {
    title: "MARTA Bus Network GIS Maps",
    id: "GIS",
    type: {
      title: "Project type: ",
      text: "GIS and surveys"
    },
    skills:{
      title:"Skills involved: ",
      text:"GIS, planning, cross-departmental collaboration, leadership, PowerPoint design"
    },
    description:
      "While volunteering with MARTA Army, I utilized 2020 Census Data to develop GIS maps of the bus network. This research culminated in maps that served the following purposes: analyzing the impact that COVID had on ridership levels, determining cleanliness levels of bus stops, as well as identifying wayfinding present at stops.",
    image: "/gismaps.png",
  },
  {
    title: "Grad Thesis on TNCs and MARTA",
    id: "Thesis",
    type: {
      title: "Project type: ",
      text: "planning thesis"
    },
    skills:{
      title:"Skills involved: ",
      text:"survey Analyses, literature reviews, map designs, data analysis"
    },
    description:
      "My graduate thesis for the Georgia Tech MCRP program focuses on identifying the impact that ride-share services have on MARTA. This project included the following: literature review/meta-analysis of other studies that discussed impact of ride-shares on public transit; R-Studio regression of MARTA station characteristics on ride-share usage; and Excel tables of data from the Atlanta Regional Commission's 2019 Survey that contained information of the MARTA trips and stations. This project showed how MARTA and other transportation agencies can respond to evolving travel behavior and equity concerns.",
    image: "/gradthesistncs.png",
  },
  {
    title: "Tokyo Subway Design Studios",
    id: "Tokyo",
    type: {
      title: "Project type: ",
      text: "Design Studio"
    },
    skills:{
      title:"Skills involved: ",
      text:"technical writing, literature Review"
    },
    description:
      "I participated in subway design studios that focused on the Shinagawa and Sumida wards in Tokyo, Japan. The project was a major collaborative effort between engineers, architects, and city planners overseen by Georgia Tech faculty. I contributed to station area planning and transit-oriented development strategies, integrating urban design with community needs. Our focus was to enhance accessibility around key transit hubs by exploring station area planning, accessibility, and multimodal design in Tokyo’s dense subway network.",
    image: "/tokyosubway.png",
  },
  {
    title: "CSC Active Transit Trails",
    id: "CSCtrails",
    type: {
      title: "Project Type: ",
      text: "site development",
    },
    skills:{
      title:"Skills involved: ",
      text: "PowerPoint design, cost analysis, research"
    },
    description:
       "For my internship with the Center for Sustainable Communities (CSC), I developed active transit trail proposals for Cavalier Manor to identify a network of walking, cycling, and jogging trails aimed at improving health outcomes, reducing car dependency, and enhancing connectivity in an underserved, majority-Black neighborhood. My work involved mapping trail routes, using Google Earth, assessing local infrastructure needs, identifying funding opportunities, and integrating broader urban design strategies such as community gardens and green infrastructure improvements.",
    image: "/activetransit.png",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title" id="projects">Transportation Projects</h1>
      <div className="card-container">
      {projects.map((proj, index) => (
        <div key={index} className="project-card">
          <img src={proj.image} alt={proj.title} className="project-img" />
          <div className="project-text" id={proj.id}>
            <h2>{proj.title}</h2>
            <p>
            <span className='semi-bold'>{proj.type.title}</span>
            <span className="italic">{proj.type.text}</span>
            </p>
            <p>
            <span className='semi-bold'>{proj.skills.title}</span>
            <span className='italic'>{proj.skills.text}</span>
            </p>
            <p>{proj.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
