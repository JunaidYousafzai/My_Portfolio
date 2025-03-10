"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiGsap, SiExpress, SiJava, SiCplusplus } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: <FaReact className="w-14 h-14" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-14 h-14" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-14 h-14" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-14 h-14" /> },
  { name: "Express.js", icon: <SiExpress className="w-14 h-14" /> },
  { name: "Java", icon: <FaCode className="w-14 h-14" /> },
  { name: "C++", icon: <SiCplusplus className="w-14 h-14" /> },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP animation for skill items
    gsap.from(".skill-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none", // Play animation only once
      },
    });

    // Refresh ScrollTrigger on component mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <section ref={sectionRef} className="text-center">
      <h2 className="text-4xl font-[Reospec] text-teal-600 font-bold my-[2%]">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item opacity-0 flex flex-col items-center" // Set initial opacity to 0
          >
            {skill.icon}
            <p className="mt-3 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>

      <div className="my-12">
        <h3 className="text-3xl font-[Reospec] text-teal-600 font-semibold my-[2%]">
          Currently Learning
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Microservices", "Phyton"].map((tech, index) => (
            <span
              key={index}
              className="hover:bg-teal-700 px-6 py-2 rounded-lg text-lg hover:scale-105 transition-transform"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;