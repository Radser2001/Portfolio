import React from "react";
import skills from "../lib/skills";
import Image from "next/image";
const Skills = () => {
  return (
    <>
      <div id="Skills" className="font-mono mt-32 md:mt-42">
        <h1 className="uppercase font-semibold text-center md:text-left text-3xl sm:text-6xl">
          Skills
        </h1>
        <div className="flex flex-col justify-center items-center md:block">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mt-20 ">
            {skills.map((skill, index) => (
              <h1
                key={index}
                className="bg-slate-600 font-bold text-sky-400 p-2 md:p-5 rounded-md text-center sm:text-base md:text-2xl"
              >
                {skill}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
