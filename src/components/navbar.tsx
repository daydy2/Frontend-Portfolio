import React, { useState } from "react";
import logo from "../img/logo.svg";
import { name } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [open, isOpen]: any = useState(false);
  const toggle = (e: any) => {
    isOpen(!open);
    console.log(e.target);
  };
  return (
    <header id="head">
      <nav className="flex justify-between items-center py-4 md:py-[1.45rem] px-2 md:px-[5.94rem] sticky top-0">
        <div className="logo flex flex-row gap-[0.25rem] md:gap-[0.75rem] items-center">
          <img className="bounce" src={logo} alt="" />
          <h1 className="text-black text-[0.875rem]  md:text-[1.25rem] font-bold leading-[normal] font-Bellota ">
            {name}{" "}
          </h1>
        </div>
        <div className="navlink">
          {/* 5.94rem  1
          1.5rem 0.5rem */}
          <ul className="sm:flex hidden  gap-[1rem]">
            <li>
              <a
                className="text-black font-Bellota text-[0.875rem]  md:text-base font-bold leading-[normal]"
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-black font-Bellota text-[0.875rem]  md:text-base font-bold leading-[normal]"
                href="#Project"
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="text-black font-Bellota text-[0.875rem]  md:text-base font-bold leading-[normal]"
                href="#Contact"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="  flex w-[75px] justify-end sm:hidden p-[0.5rem]">
            <button onClick={toggle}>
              {open ? (
                <FaTimes className="text-black w-[1.5rem] h-[1.5rem]" />
              ) : (
                <FaBars className="text-black h-[1.5rem] w-[1.5rem]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {open ? (
        <div className="mobilenavlink bg-white  ease-linear duration-[3s] transition-[all]  ">
          <ul className="flex flex-col  sm:hidden  gap-[1rem] justify-center items-center mx-auto">
            <li>
              <a
                className="text-black font-Bellota text-[0.875rem]  md:text-base font-bold leading-[normal]"
                onClick={toggle}
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-black font-Bellota text-[0.875rem]  md:text-base font-bold leading-[normal]"
                onClick={toggle}
                href="#Project"
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="text-black font-Bellota text-[0.875rem]  md:text-base font-bold leading-[normal]"
                onClick={toggle}
                href="#Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Navbar;
