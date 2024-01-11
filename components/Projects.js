import ombs from "../public/ombs.png";
import UniEventPro from "../public/UniEventPro.png";
import ovspms from "../public/ovspms.png";
import ooms from "../public/ooms.png";
import mrs from "../public/MovieRecommendationSystem.png";
import dms from "../public/DisneyMovieScraper.png";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
const Projects = () => {
  const projectsData = [
    {
      projectName: "Movie Recommendation System",
      image: mrs,
      techStack: [
        "NextJS",
        "Flask",
        "Python",
        "Pandas",
        "Numpy",
        "MongoDB",
        "TypeScript",
        "Prisma",
        "TailwindCSS",
        "MongoDB",
      ],
      projectUrl:
        "https://github.com/Radser2001/Movie-Recommendation-System-Frontend",
    },
    {
      projectName: "Disney Movies Web Scraper",
      image: dms,
      techStack: ["Python", "Pandas", "Numpy", "Jupyter Notebook"],
      projectUrl: "https://github.com/Radser2001/Disney-Movies-Web-Scraper",
    },
    {
      projectName: "Online Event Management System",
      image: UniEventPro,
      techStack: [
        "MongoDB",
        "ExpressJS",
        "ReactJS",
        "NodeJS",
        "TailwindCSS",
        "MaterialUI",
      ],
      projectUrl:
        "https://github.com/Radser2001/Online-Event-Management-System",
    },

    {
      projectName: "Online Vehicle Spare Parts Management System",
      image: ovspms,
      techStack: [
        "JSP",
        "Servlet",
        "MySQL",
        "HTML",
        "TailwindCSS",
        "JavaScript",
      ],
      projectUrl:
        "https://github.com/Radser2001/Online-Vehicle-Spare-Parts-Management-System",
    },
    {
      projectName: "Online Movie Booking System",
      image: ombs,
      techStack: ["HTML", "CSS", "PHP", "JavaScript"],
      projectUrl: "https://github.com/Radser2001/Online-Movie-Booking-System",
    },
    {
      projectName: "Online Outpatient Management System",
      image: ooms,
      techStack: [
        "MongoDB",
        "ExpressJS",
        "ReactJS",
        "NodeJS",
        "TailwindCSS",
        "MaterialUI",
      ],
      projectUrl: "https://github.com/Radser2001/outpatient_management_system",
    },
  ];
  return (
    <>
      <div id="Projects" className="font-mono mt-32 md:mt-42">
        <h1 className="uppercase font-semibold text-center md:text-left text-3xl sm:text-6xl ">
          Projects
        </h1>
        <div className="flex flex-col justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                projectName={project.projectName}
                image={project.image}
                techStack={project.techStack}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-xl text-center bg-sky-500 p-2 rounded cursor-pointer w-3/12">
            <Link href="/projects">View More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
