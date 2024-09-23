import React, { useState } from "react";
import workIcon from "../../public/common/work.svg";
import Image from "next/image";

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-10 flex flex-col">
      <div className="card rounded-sm transition-transform hover:-translate-y-2 hover:cursor-default duration-300 w-[300px] md:w-[500px] lg:w-[730px] xl:w-[1120px] bg-neutral shadow-xl">
        <div className="card-body">
          <div className="card-title  flex flex-col justify-center lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center">
              <Image src={workIcon} width={50} height={50} alt="work icon" />
              <div className="text-center lg:text-left mt-2 lg:mt-0 ml-4">
                <p className="text-xl md:text-2xl">{experience.position}</p>
                <p className="text-base md:text-lg mt-2">
                  {experience.company}
                </p>
              </div>
            </div>
            <div className="text-center lg:text-right text-sm">
              <p>{experience.period} </p>
              <p className="mt-2">{experience.location}</p>
            </div>
          </div>
          <div
            className={`text-center text-neutral-content mt-5 lg:text-left font-normal ${
              isExpanded ? "" : "md:line-clamp-none line-clamp-3"
            }`}
          >
            <ul className="description-list">
              {experience.description.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
          <div className="flex md:hidden items-center justify-center">
            {isExpanded ? (
              <button
                onClick={toggleReadMore}
                className="text-sm text-sky-500 mt-2 focus:outline-none"
              >
                Show Less
              </button>
            ) : (
              <button
                onClick={toggleReadMore}
                className="text-sm text-sky-500 mt-2 focus:outline-none"
              >
                Read More...
              </button>
            )}
          </div>
          <div>
            <div className="justify-start mt-5 flex-wrap hidden md:flex">
              {experience.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="text-slate-200 p-1 px-1 m-1 text-xs font-bold"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
