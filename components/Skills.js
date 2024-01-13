import React from "react";
import skills from "../lib/skills";
import react from "../public/skills/react.svg";
import node from "../public/skills/nodeJS.svg";
import Image from "next/image";
const Skills = () => {
  return (
    <>
      <div id="Skills" className="font-mono mt-32 md:mt-42">
        <h1 className="uppercase font-semibold text-center md:text-left text-3xl sm:text-6xl">
          Skills
        </h1>

        <div className="flex flex-col justify-center items-center md:block">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-20 ">
            {skills.map((skill, index) => (
              <div
                key={index}
                // className=" w-full rounded-md hover:bg-gradient-to-r hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-600 p-1  hover:-translate-y-2 hover:shadow-lg transform transition duration-500 ease-in-out"
                className=" md:w-52 rounded-md hover:-translate-y-2 hover:shadow-lg transform transition duration-500 ease-in-out"
              >
                <div className="bg-base-100 rounded-sm flex flex-col p-3 items-center justify-center font-bold shadow-md text-center ">
                  <h1 className="sm:text-md md:text-lg mb-4 hover:cursor-default">
                    {skill.name}
                  </h1>{" "}
                  <Image
                    src={skill.icon}
                    alt="My SVG"
                    width={100}
                    height={100}
                    className="hover:text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
