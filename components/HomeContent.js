import React from "react";
import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import Image from "next/image";

const HomeContent = () => {
  return (
    <>
      <div id="Home" className="  mt-32 md:mt-42 ">
        <h1 className="uppercase md:h-12  text-center lg:text-left text-5xl md:text-7xl font-extrabold mt-9 mb-10">
          Hello World!
        </h1>
        <h1 className="flex uppercase md:h-50 text-5xl md:text-7xl font-extrabold text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
          I&apos;m Supuni Eleesha Randeniya
        </h1>
        <h1 className="mt-10 text-xl md:text-3xl text-center lg:text-left">
          A Software Engineering Student at SLIIT
        </h1>
        <div className="mt-10 flex items-center justify-center lg:justify-start">
          <a
            href="https://github.com/Radser2001/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={github}
              alt="Github"
              width={30}
              height={30}
              className=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/supuni-eleesha/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Image
              src={linkedin}
              alt="Linkedin"
              width={30}
              height={30}
              className=""
            />
          </a>
        </div>
        <div className="mt-10 text-center lg:text-left ">
          <a
            href="mailto:supuni.randeniya@gmail.com"
            className="text-xl md:text-2xl transition ease-in duration-100 border text-white border-sky-400 hover:bg-sky-500 p-3 rounded"
          >
            Contact Me &#8594;
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
