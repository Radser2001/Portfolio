import workIcon from "../../public/work.svg";
import Image from "next/image";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="mt-10 flex flex-col ">
      <div className="card rounded-sm transition-transform hover:-translate-y-2 hover:cursor-default duration-300 w-[300px] md:w-[500px] lg:w-[730px] xl:w-[1120px] bg-neutral shadow-xl">
        <div className="card-body">
          <div className="card-title  flex flex-col justify-center lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center ">
              <Image src={workIcon} width={50} height={50} alt="work icon" />
              <div className="text-center lg:text-left mt-2 lg:mt-0 ml-4">
                <p className="text-xl md:text-2xl">{experience.position}</p>
                <p className=" text-base md:text-lg mt-2">
                  {experience.company}
                </p>
              </div>
            </div>
            <div className="text-center lg:text-right text-sm">
              <p>{experience.period} </p>
              <p className="mt-2">{experience.location}</p>
            </div>
          </div>
          <div className="text-center text-neutral-content mt-5 lg:text-left font-normal">
            <ul>
              {experience.description.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
