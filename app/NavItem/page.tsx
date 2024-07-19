"use client"
import Link from "next/link";
import React, { useState } from 'react';

function Nav() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-xl">
            Company
          </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block" onClick={toggleNav}>
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>

        <div className={`md:flex md:items-center md:w-auto w-full ${nav ? 'block' : 'hidden'}`} id="menu">
          <nav id="menu-hide">
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <Link className="md:p-4 py-3 px-0 block" href="/Home" onClick={closeNav}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="md:p-4 py-3 px-0 block" href="/About" onClick={closeNav}>
                  About
                </Link>
              </li>
              <li>
                <Link className="md:p-4 py-3 px-0 block" href="/Projects" onClick={closeNav}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/Newsletter" onClick={closeNav}>
                  Newsletter
                </Link>
              </li>
              <li>
                <Link className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/Contact" onClick={closeNav}>
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-sky-600">
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;