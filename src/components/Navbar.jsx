import React from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header className="p-5 bg-blue-700 text-white  flex gap-6 md:pl-16 lg:p-3  top-0 sticky ">
        <img src={logo} alt="logo" width={70} className="rounded-full bg-p" />
        <h1 className="text-xl font-bold font-serif sm:text-2xl md:mt-6 sm:mt-4 md:text-3xl lg:mt-4">
          BBCD College Of Engineering and Technology
        </h1>
        <div className="navsection hidden md:flex  md:flex-col md:h-10 md:w-30 md:gap-2 p-2 lg:flex-row lg:mt-6 lg:ml-20 xl:ml-48 font-mono text-lg">
          <NavLink
            to="/"
            // className="text-white  rounded hover:bg-blue-700 transition lg:ml-6"

            className={({isActive})=>{
              return isActive?'text-orange-500  rounded hover:bg-blue-600 transition lg:ml-9':'text-white rounded hover:bg-blue-600 transition lg:ml-9';
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/About-Us"
            // className="text-white rounded hover:bg-blue-700 transition lg:ml-9"
            className={({isActive})=>{
               return isActive?'text-orange-500 rounded hover:bg-blue-600 transition lg:ml-9':'text-white rounded hover:bg-blue-600 transition lg:ml-9';
            }}
          >
           About Us
          </NavLink>
           <NavLink
            to="/admissions"
            // className="text-white rounded hover:bg-blue-700 transition lg:ml-6"
            className={({isActive})=>{
             return isActive?'text-orange-500 rounded hover:bg-blue-600 transition lg:ml-9':'text-white rounded hover:bg-blue-600 transition lg:ml-9';
            }}
          >
            Admissions
          </NavLink>
          <NavLink
            to="/register"
            // className="text-white  rounded hover:bg-blue-700 transition lg:ml-6"

            className={({isActive})=>{
              return isActive?'text-orange-500 rounded hover:bg-blue-600 transition lg:ml-9':'text-white rounded hover:bg-blue-600 transition lg:ml-9';
            }}
          >
            Register
          </NavLink>
          <NavLink
            to="/contact"
            // className="text-white  rounded hover:bg-blue-700 transition lg:ml-6"

            className={({isActive})=>{
              return isActive?'text-orange-500 rounded hover:bg-blue-600 transition lg:ml-6':'text-white rounded hover:bg-blue-600 transition lg:ml-9';
            }}
          >
            Contact-Us
          </NavLink>
          
        </div>
      </header>
    </div>
  );
}

export default Navbar;
