import React from "react";
import Image from "next/image";
import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import mail from "../public/mail.png";

const Footer = () => {
  return (
    <>
      <div className="font-mono mt-40 lg:mr-40">
        <div className="flex justify-between items-center p-2">
          <div>
            <p className="text-md md:text-2xl">
              Supuni Randeniya | {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <a
              href="https://github.com/Radser2001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={github} alt="Github" width={25} height={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/supuni-eleesha/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Image src={linkedin} alt="Linkedin" width={25} height={25} />
            </a>
            <a
              href="mailto:supuni.randeniya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Image src={mail} alt="Mail" width={25} height={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
