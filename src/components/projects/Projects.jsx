import './Projects.css';

const projects = [
  {
    title: "Asset Management Overhaul",
    id: "Asset",
    description:
      "In 2022, I worked with city engineers and MARTA staff to overhaul In 2024, I worked with engineers and professionals to help revise and communicate MARTA’s 10-year Asset Management Plan, applying my expertise in the Envision Sustainability Framework. asset management system, improving reporting and tracking of infrastructure needs.",
    image: "/public/assetmgmt.png",
  },
  {
    title: "Revamping of Internship Program",
    id: "Intern",
    description:
      "I led an internal review to modernize MARTA’In 2023, I worked with Authority personnel and HR to develop a plan to restart MARTA’s Internship program.  I served as project manager for this team and was responsible for engaging the perspective of critical stakeholders.s internship program and better align it with workforce development goals.",
    image: "/public/internship.png",
  },
  {
    title: "GIS MARTA Bus Network Maps",
    id: "GIS",
    description:
      "During my time volunteering with MARTA Army, I utilized the 2020 Bus Census Data to develop GIS maps of the bus network that provided a lot of context regarding the bus system. This presentation included a variety of GIS maps that served the following purposes: analyzing the impact that COVID had on ridership levels, determining cleanliness levels of bus stops, as well as identifying wayfinding present at stops.",
    image: "/public/gismaps.png",
  },
  {
    title: "Grad Thesis on TNCs and MARTA",
    id: "Thesis",
    description:
      "*My graduate thesis explored how TNCs impact MARTA ridership and My graduate thesis for the Georgia Tech MCRP program focuses on identifying the impact that ride-share services have on MARTA. This project included the following: literature review/met-analysis of other studies that discussed impact of ride-shares on public transit; R-Studio regression of MARTA station characteristics on ride-share usage; Excel tables of data from the Atlanta Regional Commission that contain information of the MARTA trips and stations captured for the organization’s  2019 survey; agencies can respond to evolving travel behavior and equity concerns.",
    image: "/public/gradthesistncs.png",
  },
  {
    title: "Tokyo Subway Design Studios",
    id: "Tokyo",
    description:
      "I participated in international design studios I participated in subway design studios focused on the Shinagawa and Sumida wards in Tokyo, where I contributed to station area planning and transit-oriented development strategies. My work emphasized integrating urban design with community needs and enhancing accessibility around key transit hubs.xploring station area planning, accessibility, and multimodal design in Tokyo’s dense subway network.",
    image: "/public/tokyosubway.png",
  },
  {
    title: "CSC Active Transit Trails",
    id: "CSCtrails",
    description:
      "I contributed to the Active Transit Trails I developed the Active Transit Trails for Cavalier Manor presentation to propose a network of walking, cycling, and jogging trails aimed at improving health outcomes, reducing car dependency, and enhancing connectivity in an underserved, majority-Black neighborhood. My work involved mapping trail routes using GIS tools, assessing local infrastructure needs, identifying funding mechanisms such as CDAs and TIFs, and integrating broader urban design strategies like community gardens and green infrastructure improvements. , a project linking trail planning with equity and first/last-mile access to bus stops.",
    image: "/public/activetransit.png",
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
            <p>{proj.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
