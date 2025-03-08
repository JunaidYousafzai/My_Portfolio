"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".skill-tag",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20  text-white flex flex-col items-center justify-center px-6"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-5xl w-full fade-in">
        <h2 className="text-5xl font-bold mb-6 text-center font-[Reospec] text-teal-600 fade-in">About Me</h2>
        <div className="flex flex-col md:flex-row items-center mb-6 fade-in">
          <img src="/images/pfp.jpg" alt="Profile" className="w-44 h-44 rounded-full mb-6 md:mb-0 md:mr-10 object-cover border-4 border-teal-400 shadow-lg" />
          <div>
            <p className="text-lg  mb-4">
              I'm Junaid, a dedicated MERN stack developer with a passion for building efficient and scalable web applications.
              I specialize in React and Node.js, constantly pushing my skills to the next level by exploring new technologies and best practices.
            </p>
            <p className="text-lg  mb-6">
              I also have a strong knowledge of video editing with about 7 years of experience, blending creativity with technical skills to produce captivating videos.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"].map((skill, index) => (
            <span key={index} className="skill-tag bg-teal-700 px-5 py-2 rounded-full transition-transform transform hover:scale-110 shadow-md">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-6 justify-center fade-in">
          <a href="https://linkedin.com" target="_blank" className=" hover:text-teal-400 transition">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com" target="_blank" className=" hover:text-teal-400 transition">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" className=" hover:text-teal-400 transition">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
