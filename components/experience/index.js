import workExperience from "../../lib/workExperience";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div id="Experience" className="mt-32 md:mt-44">
      <h1 className="uppercase font-semibold text-center lg:text-left text-3xl sm:text-6xl">
        Experience
      </h1>
      <div>
        {workExperience.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};
export default Experience;
