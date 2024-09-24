import ProjectCard from "./ProjectCard";
import Link from "next/link";
import projectsData from "../../lib/projectsList";
const Projects = () => {
  return (
    <div id="Projects" className=" mt-32 md:mt-44">
      <h1 className="uppercase font-semibold text-center text-3xl sm:text-6xl ">
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
        <div className="w-8/12 text-base md:w-4/12 md:text-xl text-center border transition ease-in duration-100  border-sky-400 hover:bg-sky-500 p-3 rounded-sm cursor-pointer ">
          <Link href="/projects">View More Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
