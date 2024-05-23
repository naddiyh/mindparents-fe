"use client";
import { SlArrowUp } from "react-icons/sl";
import React from "react";

export const UpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main
      title="Scroll To Top"
      className="fixed bottom-8 right-6 z-10 scale-[0.9] select-none md:scale-100"
    >
      <button
        onClick={scrollToTop}
        className="  flex aspect-square h-14 w-14 items-center justify-center rounded-[100%] bg-primary-purple bg-opacity-70 hover:bg-primary-purple-hover"
      >
        <SlArrowUp className="h-7 w-7 text-white" />
      </button>
    </main>
  );
};
