import { useState } from "react";
import logo from "../assets/webmagnetism.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-20 absolute w-full border-gray-200 px-5 bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        {/* LOGO */}
        <img src={logo} className="h-5" />

        {/* BUTTON TO TOGGLEL NAVBAR */}
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-gray-500 focus:outline-none  dark:text-white"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>

          {/* SVG */}
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* IF BUTTONN IS PRESSED DISPLAY:BLOCK ELSE DISPLAY:HIDDEN */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full`}
          id="navbar-default"
        >
          <ul className="font-medium p-4 mt-5 border border-gray-100 rounded-lg bg-white">
            <li>
              <a
                href="#"
                className="bg-blue-400 text-white block py-2 px-5 rounded"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-5  rounded hover:bg-gray-100"
              >
                About
              </a>
            </li>

            <li>
              <a href="#" className="block py-2 px-5 rounded hover:bg-gray-100">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="block py-2 px-5 rounded hover:bg-gray-100">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
