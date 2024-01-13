import Image from "next/image";
import logo from "../public/logo.svg";
const Experience = () => {
  return (
    <div id="Skills" className="  mt-32 md:mt-44">
      <h1 className="uppercase font-semibold text-center lg:text-left text-3xl sm:text-6xl">
        Experience
      </h1>
      <div className="mt-10 flex flex-col ">
        <div className="card rounded transition-transform hover:-translate-y-2 hover:cursor-default duration-300 lg:w-[730px] mb-10 xl:w-[1120px] bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-title  flex flex-col justify-center lg:flex-row lg:justify-between items-center">
              <div className="text-center lg:text-left ">
                <p className="text-2xl">
                  Web Development and Content Creation Intern
                </p>
                <p>Haze Apps</p>
              </div>
              <div className="text-center lg:text-right">
                <p> December 2023 - Present</p> <p>Kandy, SL</p>
              </div>
            </div>
            <p className="text-center lg:text-left">
              Leading the development of React.js-focused web projects for
              dynamic and responsive interfaces. <br /> Staying informed on
              industry trends and actively contributing to captivating and
              user-friendly web experiences. <br /> Collaborating on multimedia
              content, utilizing web-based technologies to enhance overall user
              interface and experience.
            </p>
          </div>
        </div>
        <div className="card rounded transition-transform hover:-translate-y-2 hover:cursor-default duration-300 lg:w-[730px] xl:w-[1120px] bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-title  flex flex-col justify-center lg:flex-row lg:justify-between items-center">
              <div className="text-center lg:text-left">
                <p className="text-2xl">Data Science Intern</p>
                <p>Dialog Axiata PLC</p>
              </div>
              <div className="text-center lg:text-right">
                <p> September 2023 - November 2023</p> <p>Colombo, SL</p>
              </div>
            </div>
            <p className="text-center lg:text-left">
              Led the development of AI-powered marketing applications using
              React, FastAPI, Tailwind CSS, and Pandas. <br /> Implemented
              OpenAI s natural language processing for automated content
              generation, improving workflows. <br /> Contributed to the
              advancement of AI-driven marketing strategies, demonstrating
              adaptability and proactive problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
