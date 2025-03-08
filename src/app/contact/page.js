"use client";

import React, { useRef, useEffect } from "react";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const form = useRef();
  const sectionRef = useRef();

  useEffect(() => {

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );


    gsap.fromTo(
      ".contact-form > form > div",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3q88myi",    
        "template_rh7uu5g",   
        form.current,
        "QMHsHJK7QE71YAdBY"     
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent successfully!");
        e.target.reset(); 
      })
      .catch((error) => {
        console.error("Email sending error:", error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section ref={sectionRef} className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-teal-500 mb-12 text-center contact-title font-[Reospec]">
          Get in Touch
        </h2>
        <div className="bg-transparent p-8 rounded-lg shadow-lg contact-form ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500 text-black"
                placeholder="Your Name"
                required
              />

            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500 text-black"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500 text-black"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600  py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
            >
              Send Message <FiSend />
            </button>
          </form>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4 font-[Reospec]">
            Or Reach Me At
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:mjunaidyousafzai948@gmail.com"
              className="flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors duration-300"
            >
              <FiMail className="text-2xl" /> mjunaidyousafzai948@gmail.com
            </a>
            <a
              href="tel:+923170100929"
              className="flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors duration-300"
            >
              <FiPhone className="text-2xl" /> +923170100929
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
