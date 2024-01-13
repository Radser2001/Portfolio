import Image from "next/image";

const SkillsCard = ({ skill }) => {
  return (
    <>
      <div
        // className=" w-full rounded-md hover:bg-gradient-to-r hover:from-sky-500 hover:via-sky-400 hover:to-sky-600 p-1  hover:-translate-y-2 hover:shadow-lg transform transition duration-500 ease-in-out"
        className=" md:w-[175px] rounded-md hover:shadow-lg transition-transform hover:-translate-y-2 duration-300"
      >
        <div className="bg-base-100 rounded-sm flex flex-col p-3 items-center justify-center font-bold shadow-md text-center ">
          <p className="text-base mb-4 hover:cursor-default">{skill.name}</p>
          <Image
            src={skill.icon}
            alt="My SVG"
            width={50}
            height={50}
            className="hover:text-white"
          />
        </div>
      </div>
    </>
  );
};
export default SkillsCard;
