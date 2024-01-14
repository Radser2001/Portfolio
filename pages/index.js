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
      <main
        data-theme="dark"
        className="w-full h-screen font-mono bg-slate-800 text-white overflow-x-hidden overflow-y-scroll"
      >
        {/* <Nav /> */}
        <div className="flex flex-col items-center justify-around ">
          <About />
          <Experience />
          <Projects />
          <Skills />
        </div>
        {/* <Footer /> */}
      </main>
    </>
  );
}
