import Link from "next/link";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full font-mono flex justify-center  items-center md:justify-end md:items-center p-6 backdrop-blur-md  bg-transparent pr-8 pl-8 ">
      <div className="flex justify-center items-center md:justify-end md:items-center gap-10 md:gap-16">
        <Link href="#Home">
          <a className="text-xl md:text-2xl hover:text-sky-500">Home</a>
        </Link>
        <Link href="#Skills">
          <a className="text-xl md:text-2xl hover:text-sky-500">Skills</a>
        </Link>
        <Link href="#Projects">
          <a className="text-xl md:text-2xl hover:text-sky-500">Projects</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
