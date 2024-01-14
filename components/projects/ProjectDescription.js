import Image from "next/image";

const ProjectDescription = ({ project }) => {
  return (
    <div className="card w-full">
      <h2 className="card-title mb-10 mt-10">{project.name}</h2>
      <figure>
        <Image src={project.image} alt="Shoes" className="w-full h-80" />
      </figure>
      <div className="card-body">
        <p>{project.description}</p>
        <div className="card-actions justify-start mt-5">
          {project.techStack?.map((tech, index) => {
            return (
              <div
                key={index}
                className="rounded-md bg-sky-200 p-1 px-4 text-sky-900"
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
