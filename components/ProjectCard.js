import Image from "next/image";

const ProjectCard = ({ projectName, image, techStack, projectUrl }) => {
  return (
    <div>
      <div
        id={projectName}
        className="bg-slate-800 p-10 flex flex-col items-center justify-center rounded-xl mb-20 md:ml-0 md:mr-0  sm:max-w-xs m-6 md:max-w-md lg:max-w-none"
      >
        <h1 style={{ fontSize: "25px" }} className="mb-10 text-center">
          {projectName}
        </h1>
        <Image src={image} alt="{projectName}" width={600} height={350} />
        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          {techStack?.map((tech, index) => {
            return (
              <h1
                key={index}
                className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-34 sm:text-sm md:text-sm"
              >
                {tech}
              </h1>
            );
          })}
        </div>
        <div className="mt-10">
          <a target="_blank" rel="noopener noreferrer" href={projectUrl}>
            <p className="text-lg bg-sky-500 p-1 px-2 rounded cursor-pointer">
              Check it out!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
