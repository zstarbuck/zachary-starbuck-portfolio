import Socials from "../socials/Socials";

export default function Home() {
    return (
        <>
            <button>About Projects Organizations Contact Me</button>
            <div className="image">
                <img src="/PurpleBusTrain.png" alt="Modern Streetcar" className="image" />
            </div>
            <Socials/>
            <h1>Welcome to Zachary Starbuck's Portfolio</h1>
            <h2>Intersecting Transit Operations, Data, and  Advocacy</h2>
            <h3>Zachary Starbuck is a transportation professional and advocate based in Stone Mountain, GA with
                experience in public transit planning, data analysis, policy advocacy, and community outreach.</h3>
        </>
    );
}
