import Link from "next/link";
import logo from "../public/logo.svg";
import Image from "next/image";
const Nav = () => {
  return (
    // <nav className="sticky top-0 z-50 w-full bg-slate-800 font-mono flex justify-center  items-center md:justify-end md:items-center p-6  pr-8 pl-8 ">
    <>
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
          <ul className="menu menu-horizontal px-1 text-lg lg:text-xl ">
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
      </div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
    // </nav>
  );
};

export default Nav;
