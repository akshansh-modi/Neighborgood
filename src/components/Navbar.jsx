import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import "./Navbar.css";

import logo from "/img/logo.png";

import toogle_light from "/img/night.png";
import toogle_dark from "/img/day.png";
const Navbar = ({ theme, setTheme }) => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const toggle_mode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" top-0 sticky w-full z-10 text-black">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-black">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <img src={logo} alt="logo" className=" h-12 lg:h-20" />
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer dark-text"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer dark-text"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer dark-text"
            >
              Services
            </Link>
            <Link
              to="postcard"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer dark-text"
            >
              Postcard
            </Link>
         
        
      
          </nav>

          <div className=" flex flex-row gap-4 items-center ">
            <img
              src={theme == "light" ? toogle_light : toogle_dark}
              alt="toogle"
              className="h-6"
              onClick={() => {
                toggle_mode();
              }}
            />

            {showForm && <Contact closeForm={closeForm} />}

            <div className=" lg:hidden flex items-center">
              {menu ? (
                <AiOutlineClose
                  className="dark:text-white"
                  size={28}
                  onClick={handleChange}
                />
              ) : (
                <AiOutlineMenu
                  className="dark:text-white"
                  size={28}
                  onClick={handleChange}
                />
              )}
              <div
                className={`${
                  menu ? "flex" : "hidden"
                } lg:hidden flex flex-col absolute bg-white text-black right-0 top-16 font-semibold text-md text-center   pb-1 rounded-lg w-[7rem] gap-1  h-fit transition-transform duration-300`}
              >
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" menulink hover:text-hoverColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="menulink  hover:text-hoverColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="menulink  hover:text-hoverColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  to="postcard"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="menulink  hover:text-hoverColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  Postcard
                </Link>
              
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
