"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
  <div className="container  mx-auto ">
  <Hero />
  <Skills />
  <Testimonial />
  </div>
  );
}
