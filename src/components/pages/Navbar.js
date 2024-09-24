import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const [active, setActive] = useState("navbar");

  const showBar = (event) => {
    event.preventDefault();
    setActive("navbar activeNavbar");
  };
  const closeBar = (event) => {
    event.preventDefault();
    setActive("navbar");
  };

  return (
    <div className="navbar-section relative xl:bg-gray-500">
      <div className="header flex items-center justify-between p-3 lg:relative lg:bottom-1">
        

        <div
          className={`${active} bg-slate-600 w-full p-4 text-center absolute top-0 left-[-500%] z-[3000] lg:left-0 lg:bg-transparent xl:bg-white justify-center lg: flex lg:items-center lg:justify-start`}
        >
          <div className="logodiv">
          <Link to="/">
            <h1 className="w-24 xl:relative xl:z-[100000]">
              panel
            </h1>
          </Link>
        </div>
          <div className="navList lg:flex lg:items-center">
            <li className="navItem list-none lg:mr-4">
              <Link
                to="/"
                className={`navLink text-xl font-medium hover:text-[#4668DF] hover:cursor-pointer ${
                  activeLink === "Home" ? "text-[#775BE5]" : "text-black"
                }`}
                onClick={() => setActiveLink("Home")}
              >
                Home
              </Link>
            </li>
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/about"
                className={`navLink text-xl font-medium hover:text-[#4668DF] hover:cursor-pointer ${
                  activeLink === "About" ? "text-[#775BE5]" : "text-black"
                }`}
                onClick={() => setActiveLink("About")}
              >
                About
              </Link>
            </li>
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/rentals"
                className={`navLink text-xl font-medium hover:text-[#4668DF] hover:cursor-pointer ${
                  activeLink === "Rentals" ? "text-[#775BE5]" : "text-black"
                }`}
                onClick={() => setActiveLink("Rentals")}
              >
                Service
              </Link>
            </li>
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/contact"
                className={`navLink text-xl font-medium hover:text-[#4668DF]  hover:cursor-pointer ${
                  activeLink === "Contact" ? "text-[#775BE5]" : "text-black"
                }`}
                onClick={() => setActiveLink("Contact")}
              >
                Contact
              </Link>
            </li>
            <div className="btn flex justify-center items-center mt-4 lg:mt-0">
              <li className="navItem list-none">
                <Link
                  to="/signup"
                  className={`navLink text-xl font-medium  hover:cursor-pointer flex items-center text-red-600 hover:text-white py-1 px-3 rounded-full hover:bg-red-600 whitespace-nowrap ${
                    activeLink === "Sign in"
                      ? "bg-red-600 text-white"
                      : "text-black"
                  }`}
                  onClick={() => setActiveLink("Sign in")}
                >
                  <GoPerson className="mr-2" />
                  Sign up
                </Link>
              </li>
              <li className="navItem list-none">
                <Link
                  to="/Login"
                  className={`navLink text-xl font-medium  hover:cursor-pointer flex items-center text-red-600 hover:text-white py-1 px-3 ml-1 rounded-full hover:bg-red-600 whitespace-nowrap ${
                    activeLink === "Login"
                      ? "bg-red-600 text-white"
                      : "text-black"
                  }`}
                  onClick={() => setActiveLink("Login")}
                >
                  <GoPerson className="mr-2" />
                  Login
                </Link>
              </li>
            </div>
            <div
              className="absolute top-3 right-3 text-3xl cursor-pointer lg:hidden"
              onClick={closeBar}
            >
              <IoCloseCircle />
            </div>
          </div>
        </div>
        <div className="hamburger text-3xl lg:hidden">
          <button className="bars" onClick={showBar}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;