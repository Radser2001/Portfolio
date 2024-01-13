import ProjectDescription from "./ProjectDescription";
import { useState } from "react";

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
      <div className="card w-72 rounded-md md:w-[350px] md:h-[320px] bg-neutral  shadow-xl mb-20 transition-transform hover:-translate-y-2 hover:cursor-default duration-300 group">
        <div className="card-body">
          <div className="flex flex-row justify-between">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-4xl mb-4 text-sky-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              className="text-2xl hover:text-sky-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="card-title">{name}</h2>
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
              Learn More
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
            <div className="modal-box w-11/12 max-w-3xl">
              <ProjectDescription project={projectDetails} />

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn border border-red-500 hover:bg-red-500 text-white">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
