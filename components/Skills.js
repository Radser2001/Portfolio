import React from "react";
import skills from "../lib/skills";
import react from "../public/skills/react.svg";
import node from "../public/skills/nodeJS.svg";
import Image from "next/image";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <>
      <div id="Skills" className="  mt-32 md:mt-44">
        <h1 className="uppercase font-semibold text-center lg:text-left text-3xl sm:text-6xl">
          Skills
        </h1>

        <div className="flex flex-col justify-center items-center md:block">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-20 ">
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
