import ProjectCard from "./ProjectCard";
import Link from "next/link";
import projectsData from "../lib/projectsList";
const Projects = () => {
  return (
    <>
      <div id="Projects" className="font-mono mt-32 md:mt-42">
        <h1 className="uppercase font-semibold text-center lg:text-left text-3xl sm:text-6xl ">
          Projects
        </h1>
        <div className="flex flex-col justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {projectsData.slice(0, 6).map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                image={project.image}
                description={project.description}
                techStack={project.techStack}
                url={project.url}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-xl text-center bg-sky-500 p-2 rounded cursor-pointer w-3/12">
            <Link href="/projects">View More Projects</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
