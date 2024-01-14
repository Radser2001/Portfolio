import About from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Experience from "../components/experience";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-around ">
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </>
  );
}
