"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bg = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const blobs = gsap.utils.toArray(".blob");

    blobs.forEach((blob) => {
   
      gsap.to(blob, {
        x: gsap.utils.random(-150, 150),
        y: gsap.utils.random(-150, 150),
        duration: gsap.utils.random(6, 12),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });


      gsap.fromTo(
        blob,
        { opacity: 0, scale: 0.8 },
        {
          opacity: gsap.utils.random(0.4, 0.7),
          scale: 1,
          scrollTrigger: {
            trigger: blob,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    });
  }, []);


  const createBubbles = () => {
    const bubbles = [];
    const bubbleCount = 4; 

    for (let i = 0; i < bubbleCount; i++) {
      const size = gsap.utils.random(300, 600);
      const top = gsap.utils.random(-50, 150) + "vh";
      const left = gsap.utils.random(-20, 120) + "vw";
      const rotation = gsap.utils.random(-45, 45);

      const gradientOptions = [
        "bg-gradient-to-tl from-teal-700 to-black",
        "bg-gradient-to-br from-teal-800 to-black",
        "bg-gradient-to-br from-teal-600 to-black",
        "bg-teal-900",
        "bg-teal-500",
      ];
      const gradient = gsap.utils.random(gradientOptions);

      bubbles.push(
        <div
          key={i}
          className={`absolute blob ${gradient}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: top,
            left: left,
            filter: `blur(${gsap.utils.random(120, 250)}px)`,
            opacity: gsap.utils.random(0.3, 0.6),
            transform: `rotate(${rotation}deg)`,
          }}
        ></div>
      );
    }

    return bubbles;
  };

  return (
    <div ref={bgRef} className="fixed inset-0 bg-black -z-10 overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-lg bg-black/80">
        <div className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-10"></div>
      </div>


      {createBubbles()}
    </div>
  );
};

export default Bg;
