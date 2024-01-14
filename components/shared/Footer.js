import React from "react";
import Image from "next/image";
import githubIcon from "../../public/common/githubIcon.svg";
import linkedinIcon from "../../public/common/linkedinIcon.svg";
import mailIcon from "../../public/common/mailIcon.svg";
import logo from "../../public/common/logo.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer pt-28  p-10 shadow-xl bg-slate-800 flex flex-col md:flex-row items-center justify-between  text-white">
        <aside className="flex flex-col md:flex-row text-center items-center justify-center ">
          <Image src={logo} width={36} height={36} alt="logo" />
          <p className="text-lg">
            Copyright © {new Date().getFullYear()} - Supuni Eleesha Randeniya
            (Radser2001)
          </p>
        </aside>
        <nav className="flex flex-row items-center justify-end">
          <a
            href="https://github.com/Radser2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:-translate-y-1 duration-300"
          >
            <Image src={githubIcon} alt="Github" width={26} height={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/supuni-eleesha/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 transition-transform hover:-translate-y-1 duration-300"
          >
            <Image src={linkedinIcon} alt="Linkedin" width={26} height={26} />
          </a>
          <a
            href="mailto:supuni.randeniya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 transition-transform hover:-translate-y-1 duration-300"
          >
            <Image src={mailIcon} alt="Mail" width={26} height={26} />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
