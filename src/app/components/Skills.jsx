"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiGsap, SiExpress, SiJava, SiCplusplus } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: <FaReact className="w-14 h-14 text-teal-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-14 h-14 text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-14 h-14 text-green-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-14 h-14 text-black dark:text-white" /> },
  { name: "Express.js", icon: <SiExpress className="w-14 h-14 text-gray-600" /> },
  { name: "Java", icon: <SiJava className="w-14 h-14 text-orange-500" /> },
  { name: "C++", icon: <SiCplusplus className="w-14 h-14 text-blue-600" /> },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return; // Prevent errors if ref is not assigned

    gsap.from(sectionRef.current.querySelectorAll(".skill-item"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => ScrollTrigger.refresh();
  }, []);

  return (
    <section ref={sectionRef} className="text-center py-10">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-teal-600 my-4">My Tech Stack</h2>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item opacity-0 flex flex-col items-center">
            {skill.icon}
            <p className="mt-3 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Currently Learning Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold text-teal-600 my-4">Currently Learning</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Microservices", "Python"].map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-900 px-6 py-2 rounded-lg text-lg hover:bg-teal-700 hover:text-white hover:scale-105 transition-transform"
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
