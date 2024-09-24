import Link from "next/link";
import logo from "../../public/common/logo.svg";
import Image from "next/image";
const Nav = () => {
  return (
    <div className="sticky top-0 z-50 navbar w-full font-mono bg-slate-800 shadow-xl text-white">
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
            className="menu menu-lg dropdown-content text-xl mt-3 z-[1] p-5 shadow bg-slate-800 rounded-box w-72"
          >
            <li className="p-2 mt-2">
              <Link href="/#Home">Home</Link>
            </li>
            <li className="p-2 mt-2">
              <Link href="/#Home">Experience</Link>
            </li>
            <li className="p-2 mt-2">
              <Link href="/#Projects">Projects</Link>
            </li>
            <li className="p-2 mt-2">
              <Link href="/#Skills">Skills</Link>
            </li>
          </ul>
        </div>
        <Link href="/#Home" className="hidden md:flex ml-5 cursor-pointer">
          <Image src={logo} width={70} height={70} alt="Logo" className="cursor-pointer" />
        </Link>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="flex flex-row items-center justify-between px-1 text-lg lg:text-xl ">
          <li className="mr-5 btn btn-ghost font-normal text-lg lg:text-xl">
            <Link href="/#Home">Home</Link>
          </li>
          <li className="mr-5 btn btn-ghost font-normal text-lg lg:text-xl">
            <Link href="/#Experience">Experience</Link>
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
  );
};

export default Nav;
