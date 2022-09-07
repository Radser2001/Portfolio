import Image from "next/image";
import ombs from "../public/ombs.png";
import sms from "../public/sms.png";
import todoApp from "../public/todoApp.png";
import breakingBad from "../public/Breaking-Bad.png";
import weatherapp from "../public/weatherapp.png";
import products from "../public/productCRUD.png";

const Projects = () => {
  return (
    <>
      <div id="Projects" className="font-mono mt-40 lg:mr-40">
        <h1 className="uppercase font-semibold text-center md:text-left text-3xl sm:text-6xl ">
          Projects
        </h1>
        <div className="flex flex-col justify-center items-center md:block">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-32 flex flex-col items-center justify-center mt-20">
            <div
              id="project1"
              className="bg-slate-800 p-10 flex flex-col items-center justify-center rounded-xl mb-20 md:ml-0 md:mr-0  sm:max-w-xs m-6 md:max-w-md lg:max-w-none"
            >
              <h1 className="mb-10 text-3xl text-center">
                Online Movie Booking System
              </h1>
              <Image
                src={ombs}
                alt="Online Movie Booking System"
                width={400}
                height={300}
              />
              <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-20 sm:text-sm md:text-xl">
                  HTML
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-20 sm:text-sm md:text-xl">
                  CSS
                </h1>

                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-20 sm:text-sm md:text-xl ">
                  PHP
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-32  sm:text-sm md:text-xl ">
                  JavaScript
                </h1>
              </div>
              <div className="mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Radser2001/Online-Movie-Booking-System"
                >
                  <p className="text-md bg-sky-500 p-1 px-2 rounded cursor-pointer">
                    Check it out!
                  </p>
                </a>
              </div>
            </div>
            <div
              id="project2"
              className="bg-slate-800 p-10 flex flex-col items-center justify-center rounded-xl md:ml-0 md:mr-0 mb-20 sm:max-w-xs m-6 md:max-w-md lg:max-w-none"
            >
              <h1 className="mb-10 text-3xl text-center">ToDo List</h1>
              <Image src={todoApp} alt="ToDo App" width={400} height={300} />
              <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-2 md:p-3 rounded-md text-center w-22 sm:text-sm md:text-xl">
                  MongoDB
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-2 md:p-3 rounded-md text-center w-22  sm:text-sm md:text-xl">
                  ExpressJS
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-2 md:p-3 rounded-md text-center w-22 sm:text-sm md:text-xl ">
                  ReactJS
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-2 md:p-3 rounded-md text-center w-22 sm:text-sm md:text-xl ">
                  NodeJS
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-2 md:p-3 rounded-md text-center w-22  sm:text-sm md:text-xl ">
                  TailwindCSS
                </h1>
              </div>
              <div className="mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://todo-frontend-radser2001.vercel.app/"
                >
                  <p className="text-md bg-sky-500 p-1 px-2 rounded cursor-pointer">
                    Check it out!
                  </p>
                </a>
              </div>
            </div>
            <div
              id="project3"
              className="bg-slate-800 p-10 flex flex-col items-center justify-center rounded-xl md:ml-0 md:mr-0 mb-20 sm:max-w-xs m-6 md:max-w-md lg:max-w-none"
            >
              <h1 className="mb-10 text-3xl text-center">
                Student Management System
              </h1>
              <Image
                src={sms}
                alt="Student Management System"
                width={400}
                height={300}
              />
              <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-20 sm:text-sm md:text-xl">
                  HTML
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-20 sm:text-sm md:text-xl">
                  CSS
                </h1>

                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-20 sm:text-sm md:text-xl ">
                  PHP
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-32  sm:text-sm md:text-xl ">
                  JavaScript
                </h1>
              </div>
              <div className="mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Radser2001/Student-Management-System"
                >
                  <p className="text-md bg-sky-500 p-1 px-2 rounded cursor-pointer">
                    Check it out!
                  </p>
                </a>
              </div>
            </div>
            <div
              id="project4"
              className="bg-slate-800 p-10 flex flex-col items-center justify-center rounded-xl md:ml-0 md:mr-0 mb-20 sm:max-w-xs m-6 md:max-w-md lg:max-w-none"
            >
              <h1 className="mb-10 text-3xl text-center">
                Breaking Bad Info App
              </h1>
              <Image
                src={breakingBad}
                alt="Breaking Bad Info App"
                width={400}
                height={300}
              />
              <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-22 sm:text-sm md:text-xl">
                  ReactJS
                </h1>
              </div>
              <div className="mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Radser2001/BreakingBadAPI"
                >
                  <p className="text-md bg-sky-500 p-1 px-2 rounded cursor-pointer">
                    Check it out!
                  </p>
                </a>
              </div>
            </div>
            <div
              id="project5"
              className="bg-slate-800 p-10 flex flex-col items-center justify-center rounded-xl md:ml-0 md:mr-0 mb-20 sm:max-w-xs m-6 md:max-w-md lg:max-w-none"
            >
              <h1 className="mb-10 text-3xl text-center">Weather App</h1>
              <Image
                src={weatherapp}
                alt="Weather App"
                width={400}
                height={300}
              />
              <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-22 sm:text-sm md:text-xl">
                  Django
                </h1>
              </div>
              <div className="mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://weatherapp-radser2001.herokuapp.com/"
                >
                  <p className="text-md bg-sky-500 p-1 px-2 rounded cursor-pointer">
                    Check it out!
                  </p>
                </a>
              </div>
            </div>
            <div
              id="project6"
              className="bg-slate-800 p-10 flex flex-col items-center justify-center rounded-xl md:ml-0 md:mr-0 mb-20 sm:max-w-xs m-6 md:max-w-md lg:max-w-none"
            >
              <h1 className="mb-10 text-3xl text-center">
                Online Product Management System
              </h1>
              <Image
                src={products}
                alt="Product CRUD"
                width={400}
                height={300}
              />
              <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-22 sm:text-sm md:text-xl">
                  Laravel
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-22 sm:text-sm md:text-xl">
                  NuxtJS
                </h1>
                <h1 className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-22 sm:text-sm md:text-xl">
                  TailwindCSS
                </h1>
              </div>
              <div className="mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Radser2001/Online-Product-Management-System"
                >
                  <p className="text-md bg-sky-500 p-1 px-2 rounded cursor-pointer">
                    Check it out!
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
