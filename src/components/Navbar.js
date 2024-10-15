import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"; // Corrected import path
import Profile from "../profile/Profile";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ showAlert }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [active, setActive] = useState("navbar");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const showBar = (event) => {
    event.preventDefault();
    setActive("navbar activeNavbar");
  };

  const closeBar = (event) => {
    event.preventDefault();
    setActive("navbar");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    showAlert &&
      showAlert(
        `Switched to ${newTheme === "dark" ? "Dark" : "Light"} Mode`,
        "warning"
      );
  };

  return (
    <div className="navbar-section sticky top-0 lg:bg-white/20 z-[1000] lg:backdrop-blur-xl lg:shadow-xl transition-all duration-300 dark:bg-gray-900">
      <div className="header flex items-center justify-between py-2 lg:py-0">
        {/* Logo */}
        <div className="logodiv lg:static lg:mr-4 lg:w-auto w-40">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-24 w-auto object-contain" />
          </Link>
        </div>

        {/* Navbar content */}
        <div
          className={`${active} bg-slate-800 lg:bg-transparent w-full p-4 text-center absolute top-0 left-[-500%] z-[3000] lg:left-0 lg:flex lg:items-center md:justify-between lg:justify-end transition-transform duration-300 lg:static`}
        >
          {/* Nav List */}
          <ul className="navList lg:flex lg:items-center">
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/"
                className={`navLink text-lg lg:text-xl font-medium py-2 px-4 leading-snug transition-all duration-200 text ${
                  activeLink === "Home"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "dark:text-white lg:text-black hover:text-blue-500"
                }`}
                onClick={() => setActiveLink("Home")}
              >
                Home
              </Link>
            </li>
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/service"
                className={`navLink text-lg lg:text-xl font-medium py-2 px-4 leading-snug transition-all duration-200 ${
                  activeLink === "Service"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "dark:text-white lg:text-black hover:text-blue-500"
                }`}
                onClick={() => setActiveLink("Service")}
              >
                Service
              </Link>
            </li>
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/about"
                className={`navLink text-lg lg:text-xl font-medium py-2 px-4 leading-snug transition-all duration-200 ${
                  activeLink === "About"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "dark:text-white  lg:text-black hover:text-blue-500"
                }`}
                onClick={() => setActiveLink("About")}
              >
                About
              </Link>
            </li>
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/contact"
                className={`navLink text-lg lg:text-xl font-medium py-2 px-4 leading-snug transition-all duration-200 ${
                  activeLink === "Contact"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "dark:text-white  lg:text-black hover:text-blue-500"
                }`}
                onClick={() => setActiveLink("Contact")}
              >
                Contact
              </Link>
            </li>
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/api"
                className={`navLink text-lg lg:text-xl font-medium py-2 px-4 leading-snug transition-all duration-200 ${
                  activeLink === "Api"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "dark:text-white  lg:text-black hover:text-blue-500"
                }`}
                onClick={() => setActiveLink("Api")}
              >
                Api
              </Link>
            </li>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`px-3 py-2 rounded lg:mr-1 transition-colors duration-300 
              ${
                theme === "light"
                  ? "bg-[rgb(240,240,240)] text-black hover:bg-[rgb(230,230,230)]" // Light mode background
                  : "bg-[rgb(30,30,30)] text-white hover:bg-[rgb(50,50,50)]" // Dark mode background
              }`}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            {/* Sign Up and Login Buttons */}
            <div className="btn flex flex-col lg:flex-row justify-center items-center mt-4 lg:mt-0">
              {!localStorage.getItem("token") ? (
                <li className="navItem list-none">
                  <Link
                    to="/login"
                    className={`navLink text-lg lg:text-xl font-medium flex items-center justify-center text-white lg:text-black hover:text-white py-1 px-6 ml-1 rounded-full hover:bg-blue-500 whitespace-nowrap transition-all duration-200 ${
                      activeLink === "Login" ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => setActiveLink("Login")}
                  >
                    <GoPerson className="mr-2" />
                    Login
                  </Link>
                </li>
              ) : (
                <Profile /> // Render ProfileSection after login
              )}
            </div>

            {/* Close Button for Mobile */}
            <div
              className="absolute top-3 right-3 text-3xl cursor-pointer lg:hidden transition-transform duration-300 hover:rotate-90"
              onClick={closeBar}
            >
              <IoCloseCircle />
            </div>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger text-3xl lg:hidden">
          <button
            className="bars transition-transform duration-300 hover:rotate-90 text-black"
            onClick={showBar}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
