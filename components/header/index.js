import React from "react";
import githubIcon from "../../public/common/githubIcon.svg";
import linkedinIcon from "../../public/common/linkedinIcon.svg";
import facebookIcon from "../../public/common/facebookIcon.svg";
import instaIcon from "../../public/common/instaIcon.svg";

import Image from "next/image";

const About = () => {
  return (
    <div id="Home" className="  mt-32 md:mt-42 ">
      <h1 className="uppercase md:h-12 text-wrap text-center text-6xl md:text-7xl font-extrabold mt-9 mb-10">
        Hello World!
      </h1>
      <h1 className="flex uppercase md:h-50  text-5xl md:text-[4.15rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
        I&apos;m Supuni Eleesha
        Randeniya
      </h1>
      <h1 className="mt-10 text-xl md:text-2xl text-center">
        <div className="flex flex-col lg:flex-row uppercase items-center justify-center">
          <p>
            Full Stack Developer
            <span className="hidden lg:inline mr-2 ml-2">|</span>
          </p>
          <p className="mt-1 lg:mt-0">
            AI / ML Enthusiast <span className="hidden lg:inline mr-2">|</span>
          </p>
          <p className="mt-1 lg:mt-0">Undergraduate at SLIIT</p>
        </div>
      </h1>
      <div className="mt-14 flex items-center justify-center">
        <a
          href="https://github.com/Radser2001/"
          target="_blank"
          className="transition-transform hover:-translate-y-1 duration-300"
          rel="noopener noreferrer"
        >
          <Image src={githubIcon} alt="Github" width={28} height={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/supuni-eleesha/"
          target="_blank"
          className="ml-5 transition-transform hover:-translate-y-1 duration-300"
          rel="noopener noreferrer"
        >
          <Image src={linkedinIcon} alt="Linkedin" width={28} height={28} />
        </a>
        {/* <a
          href="https://facebook.com/radser2001/"
          target="_blank"
          className="ml-4 transition-transform hover:-translate-y-1 duration-300"
          rel="noopener noreferrer"
        >
          <Image src={facebookIcon} alt="Facebook" width={43} height={43} />
        </a> */}
        <a
          href="https://www.instagram.com/radser2001/"
          target="_blank"
          className="ml-4 transition-transform hover:-translate-y-1 duration-300"
          rel="noopener noreferrer"
        >
          <Image
            src={instaIcon}
            alt="Instagram"
            width={32}
            height={32}
            className=""
          />
        </a>
      </div>
      <div className="mt-14 text-center ">
        <a
          href="mailto:supuni.randeniya@gmail.com"
          className="text-xl md:text-2xl transition ease-in duration-100 border text-white border-sky-400 hover:bg-sky-500 p-3 rounded-sm"
        >
          Contact Me &#8594;
        </a>
      </div>
    </div>
  );
};

export default About;
