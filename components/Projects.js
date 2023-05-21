import Image from "next/image";
import ombs from "../public/ombs.png";
import sms from "../public/sms.png";
import todoApp from "../public/todoApp.png";
import breakingBad from "../public/Breaking-Bad.png";
import weatherapp from "../public/weatherapp.png";
import products from "../public/productCRUD.png";
import UniEventPro from "../public/UniEventPro.png";
import ovspms from "../public/ovspms.png";
import ooms from "../public/ooms.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div id="Projects" className="font-mono mt-40 lg:mr-40">
        <h1 className="uppercase font-semibold text-center md:text-left text-3xl sm:text-6xl ">
          Projects
        </h1>
        <div className="flex flex-col justify-center items-center ">
          {/* <div className="lg:grid lg:grid-cols-2 lg:gap-x-32 flex flex-col items-center justify-center mt-20"> */}
          <div className="grid grid-cols-1 content-center xl:grid-cols-2 lg:gap-8   mt-20">
            <ProjectCard
              projectName="Online Event Management System"
              image={UniEventPro}
              techStack={[
                "MongoDB",
                "ExpressJS",
                "ReactJS",
                "NodeJS",
                "TailwindCSS",
                "MaterialUI",
              ]}
              projectUrl="https://github.com/Radser2001/Online-Event-Management-System"
            />
            <ProjectCard
              projectName="Online Vehicle Spare Parts Management System"
              image={ovspms}
              techStack={[
                "JSP",
                "Servlet",
                "MySQL",
                "HTML",
                "TailwindCSS",
                "JavaScript",
              ]}
              projectUrl="https://github.com/Radser2001/Online-Vehicle-Spare-Parts-Management-System"
            />
            <ProjectCard
              projectName="Online Movie Booking System"
              image={ombs}
              techStack={["HTML", "CSS", "PHP", "JavaScript"]}
              projectUrl="https://github.com/Radser2001/Online-Movie-Booking-System"
            />
            <ProjectCard
              projectName="Online Outpatient Management System"
              image={ooms}
              techStack={[
                "MongoDB",
                "ExpressJS",
                "ReactJS",
                "NodeJS",
                "TailwindCSS",
                "MaterialUI",
              ]}
              projectUrl="https://github.com/Radser2001/outpatient_management_system"
            />
            <ProjectCard
              projectName="Student Management System"
              image={sms}
              techStack={["HTML", "CSS", "PHP", "JavaScript"]}
              projectUrl="https://github.com/Radser2001/Student-Management-System"
            />
            <ProjectCard
              projectName="Breaking Bad Info App"
              image={breakingBad}
              techStack={["ReactJS", "CSS"]}
              projectUrl="https://github.com/Radser2001/BreakingBadAPI"
            />
            <ProjectCard
              projectName="Weather App"
              image={weatherapp}
              techStack={["Django", "CSS"]}
              projectUrl="https://github.com/Radser2001/django-weather-app"
            />
            <ProjectCard
              projectName="Online Product Management System"
              image={products}
              techStack={["Laravel", "NuxtJS", "TailwindCSS"]}
              projectUrl="https://github.com/Radser2001/Online-Product-Management-System"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
