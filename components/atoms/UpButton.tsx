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
      className="fixed bottom-[100px] right-[26px] z-10  select-none"
    >
      <button
        onClick={scrollToTop}
        className="  flex aspect-square h-[57px] w-[57px] items-center justify-center rounded-[100%] bg-primary-purple opacity-80 shadow-xl hover:bg-primary-purple-hover"
      >
        <SlArrowUp className="h-7 w-7 text-white" />
      </button>
    </main>
  );
};
