import './VolunteerCollabs.css';

const collaborations = [
  {
    title: "Congress for the New Urbanism",
    id: "CNU",
    image: "/public/cnu_logo.png",
    description:
      "I’ve been involved with the Congress for the New Urbanism (CNU) since 2023 and began volunteering in 2024 as a member of the Advance Team. In this role, I help plan and deliver strategic projects, including the launch of CNU’s new urbanist design charrette program. We’re also building partnerships with organizations like Abundant Housing Atlanta to advance shared urbanist goals.",
  },
  {
    title: "Georgia Planning Association Policy Advocacy Network",
    id: "GPA",
    image: "/public/gpa-logo.png",
    description: "I volunteer with the Georgia Planning Association’s Policy Advocacy Network (GPA PAN), where I do the following: Develop data governance proposals for metro Atlanta counties; Lead the transit subcommittee and set meeting agendas; Recruit planning professionals and engage partners like CNU and Abundant Housing Atlanta; Support legislation that advances affordable housing and public transportation; Support other GPA PAN Committees as needed."
    
  },
  {
    title: "Abundant Housing Atlanta",
    id: "AHA",
    image: "/public/aha-logo.png",
    description:
      "At Abundant Housing Atlanta, I support advocacy and education efforts to advance pro-housing policies in the metro region. My work includes policy research, stakeholder engagement, and coalition-building with aligned organizations to promote housing affordability and zoning reform. I regularly attend their events and am coordinating a partnership between this organization and CNU related to a design Charrette program.",
  },
  {
    title: "MARTA Army",
    id: "MARTA",
    image: "/public/marta-army-logo.png",
    description:
      "As a volunteer with MARTA Army, I supported transit advocacy through GIS mapping of MARTA’s bus network and regular collaboration with board members and urbanist initiatives. I attended planning meetings to assess system needs and conducted research for a proposed agency infrastructure partnership between MARTA’s Sustainability Department and MARTA Army.",
  },
  {
    title: "Partnership for Southern Equity",
    id: "PSE",
    image: "/public/pse-logo.png",
    description:
      "I volunteer with the Partnership for Southern Equity as a member of the Connect and Energize Committee, supporting efforts to advance equity-focused community engagement. I regularly participate in Circles Convenings and help build support their technical connections with other aligned organizations and individuals. I also assist with social media outreach to amplify their mission and initiatives.",
  },
];

const VolunteerCollabs = () => {
  return (
    <div className="volunteer-container">
      <h1 className="volunteer-title" id="organizations">Volunteer Collaborations</h1>
      <div className="card-container">
      {collaborations.map((item, index) => (
        <div key={index} className="volunteer-card">
          <img src={item.image} alt={item.title} className="volunteer-logo" />
          <div className="volunteer-content" id={item.id}>
            <h2>{item.title}</h2>
            {Array.isArray(item.description) ? (
              <ul>
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{item.description}</p>
            )}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default VolunteerCollabs;
