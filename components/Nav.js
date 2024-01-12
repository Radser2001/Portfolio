const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full font-mono flex justify-center  items-center md:justify-end md:items-center p-6 backdrop-blur-md  bg-transparent pr-8 pl-8 ">
      <div className="flex justify-center items-center md:justify-end md:items-center gap-10 md:gap-16">
        <a className="text-xl md:text-2xl hover:text-sky-500" href="#Home">
          Home
        </a>
        <a className="text-xl md:text-2xl hover:text-sky-500" href="#Skills">
          Skills
        </a>
        <a className="text-xl md:text-2xl hover:text-sky-500" href="#Projects">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Nav;
