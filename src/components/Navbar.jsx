import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <header className="p-5 bg-blue-700 text-white flex justify-between items-center md:pl-16 lg:p-3">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" width={70} className="rounded-full" />
          <h1 className="text-xl font-bold font-serif sm:text-2xl md:mt-2 md:text-3xl lg:mt-0">
            BBCD College Of Engineering and Technology
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="navsection hidden lg:flex  lg:h-10 lg:w-30 lg:gap-2 p-1 lg:flex-row  lg:ml-0 xl:ml-10 font-mono text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded hover:bg-blue-600 transition lg:ml-9"
                : "text-white rounded hover:bg-blue-600 transition lg:ml-9 "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/About-Us"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded hover:bg-blue-600 transition lg:ml-9"
                : "text-white rounded hover:bg-blue-600 transition lg:ml-9"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/admissions"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded hover:bg-blue-600 transition lg:ml-9"
                : "text-white rounded hover:bg-blue-600 transition lg:ml-9"
            }
          >
            Admissions
          </NavLink>
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded hover:bg-blue-600 transition lg:ml-9"
                : "text-white rounded hover:bg-blue-600 transition lg:ml-9"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded hover:bg-blue-600 transition lg:ml-6"
                : "text-white rounded hover:bg-blue-600 transition lg:ml-9"
            }
          >
            Contact-Us
          </NavLink>
          <button
        onClick={toggleTheme}
        className="ml-4 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-blue-700 text-white flex flex-col gap-4 p-4 lg:hidden font-mono text-lg">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/About-Us"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/admissions"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white"
            }
          >
            Admissions
          </NavLink>
          <NavLink
            to="/Login"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white"
            }
          >
            Contact-Us
          </NavLink>
          <button
        onClick={toggleTheme}
        className="ml-4 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
