"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This guy is absolutely amazing! Delivered the project ahead of schedule and exceeded expectations.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback:
      "A pleasure to work with! The code quality was top-notch and the communication was excellent.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    feedback:
      "Professional and efficient. Really impressed with the attention to detail.",
    rating: 5,
  },
];

const Testimonial = () => {
  const sectionRef = useRef(null);
  const mainCardRef = useRef(null);
  const middleCardRef = useRef(null);
  const bottomCardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change testimonials every 5 seconds for a relaxed feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // GSAP animations for smoother and slower transitions
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mainCardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "sine.inOut" }
      );

      gsap.fromTo(
        middleCardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 0.7, y: 0, duration: 1.5, ease: "sine.inOut", delay: 0.3 }
      );

      gsap.fromTo(
        bottomCardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 0.5,
          y: 0,
          duration: 1.5,
          ease: "sine.inOut",
          delay: 0.6,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const getNextIndex = (offset) => {
    return (currentIndex + offset) % testimonials.length;
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 mt-20 text-white flex flex-col items-center justify-center"
    >
      <h2 className="lg:text-4xl text-3xl font-bold mb-10 font-[Reospec] text-teal-600 ">Testimonials</h2>
      <div className="relative w-full max-w-3xl space-y-6">
        <div ref={mainCardRef}>
          <div
            className="bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-2xl p-8 
            transform transition-transform duration-700 ease-in-out hover:scale-105"
          >
            <p className="text-lg text-gray-300 mb-4">
              "{testimonials[currentIndex].feedback}"
            </p>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-teal-500">
                {testimonials[currentIndex].name}
              </h3>
              <div className="flex text-teal-500">
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <FaStar key={i} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>


        <div ref={middleCardRef}>
          <div
            className="bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-2xl p-8 
            transform transition-transform duration-700 ease-in-out opacity-70 scale-95"
          >
            <p className="text-lg text-gray-300 mb-4">
              "{testimonials[getNextIndex(1)].feedback}"
            </p>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-teal-500">
                {testimonials[getNextIndex(1)].name}
              </h3>
              <div className="flex text-teal-500">
                {Array.from({
                  length: testimonials[getNextIndex(1)].rating,
                }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Testimonial */}
        <div ref={bottomCardRef}>
          <div
            className="bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-2xl p-8 
            transform transition-transform duration-700 ease-in-out opacity-50 scale-90"
          >
            <p className="text-lg text-gray-300 mb-4">
              "{testimonials[getNextIndex(2)].feedback}"
            </p>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-green-400">
                {testimonials[getNextIndex(2)].name}
              </h3>
              <div className="flex text-green-400">
                {Array.from({
                  length: testimonials[getNextIndex(2)].rating,
                }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
