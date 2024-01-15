import About from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Experience from "../components/experience";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-slate-800 items-center justify-around ">
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </>
  );
}
