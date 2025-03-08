"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleVisibility = () => {
      if (cursor) {

        if (window.innerWidth < 768) {
          cursor.style.display = "none";
        } else {
          cursor.style.display = "block";
        }
      }
    };

    const handleTabVisibility = () => {
      if (cursor) {

        cursor.style.opacity = document.hidden ? "0" : "1";
      }
    };


    document.addEventListener("mousemove", moveCursor);
    window.addEventListener("resize", handleVisibility);
    document.addEventListener("visibilitychange", handleTabVisibility);


    handleVisibility();


    return () => {
      document.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", handleVisibility);
      document.removeEventListener("visibilitychange", handleTabVisibility);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="w-5 h-5 rounded-full  bg-purple-200 fixed pointer-events-none transition-transform duration-75 mix-blend-difference z-50"
    ></div>
  );
};

export default CustomCursor;
