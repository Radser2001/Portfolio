import Link from "next/link";
import logo from "../public/logo.svg";
import Image from "next/image";
const Nav = () => {
  return (
    // <nav className="sticky top-0 z-50 w-full bg-slate-800 font-mono flex justify-center  items-center md:justify-end md:items-center p-6  pr-8 pl-8 ">
    <div className="sticky top-0 z-50 navbar bg-slate-800 shadow-xl text-white">
      <div className="navbar-start">
        {/* Responsive menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content text-2xl mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-72"
          >
            <li>
              <Link href="/#Home">Home</Link>
            </li>
            <li>
              <Link href="/#Home">Experience</Link>
            </li>
            <li>
              <Link href="/#Projects">Projects</Link>
            </li>
            <li>
              <Link href="/#Skills">Skills</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <Image src={logo} width={50} height={50} alt="Logo" />
        </div>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="flex flex-row items-center justify-between px-1 text-lg lg:text-xl ">
          <li className="mr-5 btn btn-ghost font-normal text-lg lg:text-xl">
            <Link href="/#Home">Home</Link>
          </li>
          <li className="mr-5 btn btn-ghost font-normal text-lg lg:text-xl">
            <Link href="/#Home">Experience</Link>
          </li>
          <li className="mr-5 btn btn-ghost font-normal text-lg lg:text-xl">
            <Link href="/#Projects">Projects</Link>
          </li>
          <li className="mr-5 btn btn-ghost font-normal text-lg lg:text-xl">
            <Link href="/#Skills">Skills</Link>
          </li>
        </ul>
      </div>
    </div>
    // </nav>
  );
};

export default Nav;
