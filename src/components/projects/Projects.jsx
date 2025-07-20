import './Projects.css';

const projects = [
  {
    title: "Asset Management Overhaul",
    id: "Asset",
    type: {
      title: "Project Type: ",
      text: "Planning and Engineering"
    },
    skills:{
      title:"Skills involved:",
      text:"Planning, Envision Framework, Powerpoint Design"
    },
    description:
      "In 2022, I worked with city engineers and MARTA staff to overhaul In 2024, I worked with engineers and professionals to help revise and communicate MARTA’s 10-year Asset Management Plan, applying my expertise in the Envision Sustainability Framework. asset management system, improving reporting and tracking of infrastructure needs.",
    image: "/assetmgmt.png",
  },
  {
    title: "Revamping of Internship Program",
    id: "Intern",
    type: {
      title: "Project Type: ",
      text: "Operations and Hiring"
    },
    skills:{
      title:"Skills involved: ",
      text:"Stakeholder Outreach, Cross-Departmental Collaboration, Leadership, Powerpoint Design, Executive Presentations"
    },
    description:
      "I led an internal review to modernize MARTA’In 2023, I worked with Authority personnel and HR to develop a plan to restart MARTA’s Internship program.  I served as project manager for this team and was responsible for engaging the perspective of critical stakeholders.s internship program and better align it with workforce development goals.",
    image: "/internship.png",
  },
  {
    title: "GIS MARTA Bus Network Maps",
    id: "GIS",
    type: {
      title: "Project Type: ",
      text: "GIS and surveys"
    },
    skills:{
      title:"Skills involved: ",
      text:"GIS, Planning, Envision Stakeholder Outreach, Cross-Departmental Collaboration, Leadership, Powerpoint Design, Executive Presentations"
    },
    description:
      "During my time volunteering with MARTA Army, I utilized the 2020 Bus Census Data to develop GIS maps of the bus network that provided a lot of context regarding the bus system. This presentation included a variety of GIS maps that served the following purposes: analyzing the impact that COVID had on ridership levels, determining cleanliness levels of bus stops, as well as identifying wayfinding present at stops.",
    image: "/gismaps.png",
  },
  {
    title: "Grad Thesis on TNCs and MARTA",
    id: "Thesis",
    type: {
      title: "Project Type: ",
      text: "Planning Thesis"
    },
    skills:{
      title:"Skills involved: ",
      text:"Survey Analysis, Literature Review, Map Design, Data Analysis"
    },
    description:
      "*My graduate thesis explored how TNCs impact MARTA ridership and My graduate thesis for the Georgia Tech MCRP program focuses on identifying the impact that ride-share services have on MARTA. This project included the following: literature review/met-analysis of other studies that discussed impact of ride-shares on public transit; R-Studio regression of MARTA station characteristics on ride-share usage; Excel tables of data from the Atlanta Regional Commission that contain information of the MARTA trips and stations captured for the organization’s  2019 survey; agencies can respond to evolving travel behavior and equity concerns.",
    image: "/gradthesistncs.png",
  },
  {
    title: "Tokyo Subway Design Studios",
    id: "Tokyo",
    type: {
      title: "Project Type: ",
      text: "Design Studio"
    },
    skills:{
      title:"Skills involved: ",
      text:"Technical Writing, Literature Review"
    },
    description:
      "I participated in international design studios I participated in subway design studios focused on the Shinagawa and Sumida wards in Tokyo, where I contributed to station area planning and transit-oriented development strategies. My work emphasized integrating urban design with community needs and enhancing accessibility around key transit hubs.xploring station area planning, accessibility, and multimodal design in Tokyo’s dense subway network.",
    image: "/tokyosubway.png",
  },
  {
    title: "CSC Active Transit Trails",
    id: "CSCtrails",
    type: {
      title: "Project Type: ",
      text: "Site Development",
    },
    skills:{
      title:"Skills involved: ",
      text: "Powerpoint Design, Cost Analysis, Research"
    },
    description:
      "I contributed to the Active Transit Trails I developed the Active Transit Trails for Cavalier Manor presentation to propose a network of walking, cycling, and jogging trails aimed at improving health outcomes, reducing car dependency, and enhancing connectivity in an underserved, majority-Black neighborhood. My work involved mapping trail routes using GIS tools, assessing local infrastructure needs, identifying funding mechanisms such as CDAs and TIFs, and integrating broader urban design strategies like community gardens and green infrastructure improvements.",
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
