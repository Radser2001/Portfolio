import React from "react";
import skills from "../lib/skills";
import react from "../public/skills/react.svg";
import node from "../public/skills/nodeJS.svg";
import Image from "next/image";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <>
      <div id="Skills" className="  mt-32 md:mt-42">
        <h1 className="uppercase font-semibold text-center lg:text-left text-3xl sm:text-6xl">
          Skills
        </h1>

        <div className="flex flex-col justify-center items-center md:block">
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-20 ">
            {skills.map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
