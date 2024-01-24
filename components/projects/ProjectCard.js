import ProjectDescription from "./ProjectDescription";
import { useState } from "react";
import papersIcon from "../../public/common/papers.svg";
import documentIcon from "../../public/common/documentIcon.svg";
import Image from "next/image";

const ProjectCard = ({ name, description, image, techStack, url }) => {
  const [projectDetails, setProjectDetails] = useState({
    name,
    description,
    image,
    techStack,
    url,
  });

  const dialogId = `project_description_${
    name ?? "".replace(/\s+/g, "_").toLowerCase()
  }`;

  const handleMoreInfoClick = () => {
    document.getElementById(dialogId).showModal();
  };

  return (
    <div>
      <div className="card w-72 rounded-sm md:w-[350px] md:h-[320px] bg-neutral  shadow-xl mb-20 transition-transform hover:-translate-y-2 hover:cursor-default duration-300 group">
        <div className="card-body">
          <div className="flex flex-row items-start justify-between">
            <Image
              src={documentIcon}
              width="34"
              height="34"
              alt="project card icon"
            />
            <Image
              src={papersIcon}
              width="32"
              height="32"
              alt="project card icon"
            />
          </div>
          <h2 className="card-title mt-1">{name}</h2>
          <p className="text-neutral-content">{description}</p>

          <div className="card-actions mt-3 justify-end">
            <button
              onClick={() => {
                setProjectDetails({
                  name,
                  description,
                  image,
                  techStack,
                  url,
                });
                handleMoreInfoClick();
              }}
              className="p-2 px-3 rounded-sm bg-sky-500 text-white transition-transform duration-300"
            >
              See More
            </button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 px-3 rounded-sm bg-sky-500 text-white transition-transform duration-300"
            >
              Github
            </a>
          </div>

          <dialog id={dialogId} className="modal">
            <div className="modal-box bg-slate-800 w-11/12 max-w-3xl">
              <ProjectDescription project={projectDetails} />

              <div className="modal-action flex flex-row items-center justify-evenly">
                <form method="dialog">
                  <button className="btn btn-error text-white rounded-sm">
                    Close
                  </button>
                </form>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info text-white rounded-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
