import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
    setShowMobileMenu(false);
  };
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a onClick={() => handleScroll("Header")} className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a
            onClick={() => handleScroll("About")}
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </a>
          <a onClick={() => handleScroll("Projects")} className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            onClick={() => handleScroll("Testimonials")}
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          onClick={() => {
            setShowMobileMenu(true);
          }}
          className="md:hidden w-7"
          alt="menu icon"
        />
      </div>
      {/*-----Mobile Menu-----  */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all `}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            onClick={() => {
              setShowMobileMenu(false);
            }}
            className="w-6 alt=cross"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            href="#Header"
            onClick={() => {
              setShowMobileMenu(false);
            }}
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => {
              setShowMobileMenu(false);
            }}
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            href="#Projects"
            onClick={() => {
              setShowMobileMenu(false);
            }}
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => {
              setShowMobileMenu(false);
            }}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block "
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
