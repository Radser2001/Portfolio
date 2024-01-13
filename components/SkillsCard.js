import Image from "next/image";

const SkillsCard = ({ skill }) => {
  return (
    <>
      <div
        // className=" w-full rounded-md hover:bg-gradient-to-r hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-600 p-1  hover:-translate-y-2 hover:shadow-lg transform transition duration-500 ease-in-out"
        className=" md:w-52 rounded-md hover:shadow-lg transition-transform hover:-translate-y-2 duration-300"
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
    </>
  );
};
export default SkillsCard;
