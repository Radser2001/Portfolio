import Image from "next/image";

const SkillsCard = ({ skill }) => {
  return (
    <>
      <div className=" md:w-[175px] rounded-sm hover:shadow-lg transition-transform hover:-translate-y-2 duration-300">
        <div className="bg-neutral rounded-sm flex flex-col p-3 items-center justify-center font-bold shadow-md text-center ">
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
