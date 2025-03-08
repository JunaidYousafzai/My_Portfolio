"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {FaInstagram, FaFacebook ,FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="backdrop-blur-md font-[Reospec]  text-white py-8 px-4 mt-20 text-center rounded-t-2xl shadow-lg"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 ] text-teal-400">
          Let's Connect
        </h2>
        <p className="mb-6 ">
          Feel free to reach out on any of these platforms!
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.facebook.com/junaid.yousafzai.140/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-white transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/junaid-yousafzai-980b27262/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/junaid.webdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Junaid. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
