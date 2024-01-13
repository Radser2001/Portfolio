import HomeContent from "../components/HomeContent";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Head from "next/head";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Supuni Eleesha Randeniya</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="1rxdX59vrlFHl57frl5ikNBk0WrXtmp7vxu-rH5xwBE"
        />
        <meta
          name="description"
          content="Supuni Eleesha Randeniya is a Software Engineering Student at SLIIT"
        />
      </Head>

      <main
        data-theme="dark"
        className="w-full h-screen bg-slate-800 text-white overflow-x-hidden overflow-y-scroll"
      >
        <Nav />
        <div className="flex flex-col items-center justify-evenly ">
          <HomeContent />
          <Projects />
          <Skills />
        </div>
        <Footer />
      </main>
    </>
  );
}
