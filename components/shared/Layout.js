import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
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
          name="keywords"
          content="Supuni Eleesha Randeniya, radser2001, supuni, eleesha, randeniya"
        />
        <meta
          name="description"
          content="Hello, World! I'm Supuni Eleesha Randeniya, a passionate Full Stack Developer and an Undergraduate from Sri Lanka. Explore my portfolio for a showcase of dynamic and responsive projects. From innovative interfaces to seamless user experiences, discover how I bring creativity and functionality together. Let's connect and build something!"
        />
        <meta name="author" content="Supuni Eleesha Randeniya" />
        <link rel="author" href="https://radser2001.vercel.app/" />

        <meta property="og:title" content="Supuni Eleesha Randeniya" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Hello, World! I'm Supuni Eleesha Randeniya, a passionate Full Stack Developer and an Undergraduate from Sri Lanka. Explore my portfolio for a showcase of dynamic and responsive projects. From innovative interfaces to seamless user experiences, discover how I bring creativity and functionality together. Let's connect and build something!"
        />
        <meta property="og:url" content="https://radser2001.vercel.app/" />
      </Head>

      <main
        data-theme="dark"
        className="w-full font-mono bg-slate-800 text-white"
      >
        <Nav />
        {children}
        <Footer />
      </main>
    </>
  );
};
export default Layout;
