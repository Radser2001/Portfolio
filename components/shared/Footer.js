import React from "react";
import Image from "next/image";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";
import mail from "../../public/mail.png";
import logo from "../../public/logo.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer pt-20  p-10 shadow-xl bg-slate-800 flex flex-col md:flex-row items-center justify-between  text-white">
        <aside className="flex flex-col md:flex-row text-center items-center justify-center ">
          <Image src={logo} width={36} height={36} alt="logo" />
          <p className="text-lg">
            Copyright © {new Date().getFullYear()} - Supuni Eleesha Randeniya
            (Radser2001)
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://github.com/Radser2001/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="Github" width={24} height={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/supuni-eleesha/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Image src={linkedin} alt="Linkedin" width={24} height={24} />
          </a>
          <a
            href="mailto:supuni.randeniya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Image src={mail} alt="Mail" width={24} height={24} />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
