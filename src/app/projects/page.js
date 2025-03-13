"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Job Posting App",
    description:
      "A full-stack application for managing Job using React, Node.js, and MongoDB.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/JunaidYousafzai/Shrood-Job-Posting-app",
    live: "#",
  },
  {
    title: "Ecommerce WebApp",
    description:
      "An Ecommmerce  app with Products categories built using MERN stack.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/JunaidYousafzai/Ecomm-WebApp",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/JunaidYousafzai/portfolio",
    live: "#",
  },
];

const ProjectsPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 text-white px-6 min-h-screen flex flex-col items-center bg-transparent"
    >
      <h2 className="text-5xl font-bold mb-10 font-[Reospec] text-teal-600">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-2 text-teal-400">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex gap-2 mb-4 justify-center">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-teal-700 px-2 py-1 rounded-full "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                className="hover:text-teal-400 transition"
              >
                <FaGithub className="w-6 h-6" />
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
