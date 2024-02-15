"use client";
import React, { useState } from "react";
// import "../index.css";0
// import "../App.css";

function Header() {
  const [toggle, setToggle] = useState(false);

  const userLinks = [
    { name: "Settings", link: "/settings" },
    { name: "Sign-out", link: "/Signout" },
  ];

  return (
    <nav className="  shadow-md shadow-fuchsia-50 ">
      <div className="flex bg-black items-center justify-between px-[5%] py-1 ">
        {/* Logo */}
        <div
          id="logo"
          className="dancing-script  font-bold text-3xl cursor-pointer text-white"
        >
          CRUd
        </div>

        {/* Links */}
        <div className="Nav-Sec hidden md:flex items-center space-x-4">
          <a href="/" className="hover:text-gray-600 text-2xl">
            Home
          </a>
          <a href="/about" className="hover:text-gray-600 text-2xl">
            About
          </a>
          <a href="/about" className="hover:text-gray-600 text-2xl">
            Services
          </a>
          <a href="/services" className="hover:text-gray-600 text-2xl">
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search restaurants or dishes"
            className="border border-gray-300 rounded-md p-2 pl-10 w-64 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
          />
          <button className="ml-4 bg-[#d44646] hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
