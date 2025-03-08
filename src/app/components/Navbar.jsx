"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    tl.from(
      linksRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }, []);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      ref={navRef}
      className="p-4 font-[Reospec] bg-coolGray-100 w-full"
    >
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 "
        >
          <h1 className="font-[Reospec] lg:text-4xl font-extrabold text-teal-400">
            Junaid.
          </h1>
        </Link>

        <ul className="items-stretch hidden space-x-3 lg:flex">
          {["about", "projects", "contact"].map((item, index) => (
            <li key={item} className="flex">
              <Link
                ref={(el) => (linksRef.current[index] = el)}
                href={`/${item}`}
                className="flex items-center hover:text-teal-600 px-4 -mb-1 border-b-2 border-transparent"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMobileMenu}
          className="p-4 lg:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden bg-coolGray-100">
          {["about", "projects", "contact"].map((item) => (
            <li key={item} className="border-b border-coolGray-300">
              <Link
                href={`/${item}`}
                className="block py-2 px-4 hover:bg-coolGray-200"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
