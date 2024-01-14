import About from "../components/header";
import Nav from "../components/shared/Nav";
import Projects from "../components/projects";
import Head from "next/head";
import Skills from "../components/skills";
import Footer from "../components/shared/Footer";
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
