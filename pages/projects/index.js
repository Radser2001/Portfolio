import projectsData from "../../lib/projectsList";
import skills from "../../lib/skills";
import ProjectCard from "../../components/ProjectCard";
import { useState } from "react";
import Footer from "../../components/Footer";
import Link from "next/link";
import Head from "next/head";
import Nav from "../../components/Nav";

const Projects = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const filteredProjects = projectsData?.filter(
    (project) =>
      (searchInput === "" ||
        project.name.toLowerCase().includes(searchInput.toLowerCase())) &&
      (!selectedLanguage || project.techStack.includes(selectedLanguage))
  );
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };
  const handleReset = () => {
    setSearchInput("");
    setSelectedLanguage(null);
  };
  return (
    <div
      id="allProjects"
      className="bg-[#131313] overflow-x-hidden overflow-y-hidden"
    >
      <Nav />
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div id="Projects" className="font-mono pt-20 bottom-0 p-10">
        <h1 className="uppercase font-semibold text-center text-3xl sm:text-6xl ">
          <Link href="/">Home</Link> &#707; All Projects
        </h1>

        <div className="text-center mt-4  mb-4 md:mt-10 md:mb-10 flex flex-row items-center justify-center">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchInput}
            onChange={handleSearchInputChange}
            className="input input-bordered bg-[#1D232A] text-white mt-8 input-info w-full max-w-xs"
          />
          <div className="dropdown">
            <div
              tabIndex="0"
              role="button"
              className="mt-8 text-base text-white md:text-xl btn bg-sky-500 hover:bg-sky-600"
            >
              {selectedLanguage || "Technology"}
            </div>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#131313] rounded w-96 h-80">
              {skills.map((language, index) => (
                <li key={index}>
                  <button
                    className=" text-left hover:bg-[#1D232A] p-2 rounded"
                    onClick={() => handleLanguageClick(language)}
                  >
                    {language}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleReset}
            className="text-xl mt-8 md:text-2xl rounded transition ease-in duration-100 bg-red-500 hover:bg-red-600 p-2"
          >
            Reset
          </button>
        </div>
        {selectedLanguage && (
          <p className="text-center mt-20 text-xl">
            {filteredProjects.length} result
            {filteredProjects.length === 1 ? "" : "s"} for projects developed
            using {selectedLanguage}
          </p>
        )}
        <div className="flex justify-center items-center ">
          <div
            className={`grid grid-cols-1 content-center ${
              filteredProjects.length < 3
                ? `xl:grid-cols-${filteredProjects.length}`
                : "xl:grid-cols-3"
            } lg:gap-8 mt-10`}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                image={project.image}
                techStack={project.techStack}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </div>{" "}
      <div className="md:pl-30 lg:pl-40 md:p-10">
        <Footer />
      </div>
    </div>
  );
};
export default Projects;
