import Image from "next/image";

const ProjectDescription = ({ project }) => {
  return (
    <div className="card w-full">
      <h2 className="card-title mb-10 mt-10 text-2xl justify-center">
        {project.name}
      </h2>
      <figure>
        <Image src={project.image} alt="Shoes" className="w-full h-80" />
      </figure>
      <div className="card-body">
        <p className="text-lg text-center mt-5 mb-5">{project.description}</p>
        <div className="card-actions justify-center mt-5">
          {project.techStack?.map((tech, index) => {
            return (
              <div
                key={index}
                className="rounded-sm text-sm font-semibold bg-sky-200 p-1 px-4 text-sky-900"
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProjectDescription;
