"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const spanRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      spanRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { width: "0%", opacity: 0 },
          {
            width: "100%",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative lg:max-h-screen mb-[20%] lg:mt-[7%]  text-center px-4 sm:px-8 overflow-hidden pt-12"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="max-w-3xl font-Manrope">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold">
            Hey, I'm Junaid!
            <br />
            A <span className="text-teal-700">MERN</span> Stack Developer
          </h1>
          <div className="my-4 font-medium space-y-4 text-center max-w-3xl mx-auto">
            <p className="leading-relaxed text-sm sm:text-base md:text-lg">
              I'm a Computer Science Student passionate about{" "}
              <span className="relative px-2 py-1 rounded-lg whitespace-nowrap inline-block">
                <span
                  ref={(el) => spanRefs.current.push(el)}
                  className="absolute inset-0 bg-teal-700 rounded-xl"
                  style={{
                    width: "0%",
                    height: "100%",
                    position: "absolute",
                    zIndex: "-1",
                  }}
                ></span>
                MERN Stack Development
              </span>
              . I love building modern, high-performance web applications.
              Currently, I'm diving deep into{" "}
              <span className="relative px-2 py-1 rounded-lg whitespace-nowrap inline-block">
                <span
                  ref={(el) => spanRefs.current.push(el)}
                  className="absolute inset-0 bg-teal-700 rounded-xl"
                  style={{
                    width: "0%",
                    height: "100%",
                    position: "absolute",
                    zIndex: "-1",
                  }}
                ></span>
                microservices, DSA, and Python
              </span>{" "}
              to enhance my skill set.
            </p>
          </div>

          <div className="flex gap-4 justify-center mt-6">
            <Link
              href="https://github.com/JunaidYousafzai"
              target="_blank"
              className="animated-button flex items-center gap-2 capitalize rounded-xl hover:bg-teal-700 text-white px-6 py-3 shadow-md transition"
            >
              <FaGithub className="w-6 h-6 text-black" />
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/junaid-yousafzai-980b27262/"
              target="_blank"
              className="animated-button flex text-center gap-2 capitalize font-bold hover:bg-teal-700 rounded-xl px-6 py-3 shadow-md transition"
            >
              <FaLinkedinIn className="w-6 h-6 text-black" />
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
