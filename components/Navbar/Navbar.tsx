"use client";

import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

import Image from "next/image";
import Navitems from "./Navitems";
import NavModal from "./NavModal";
import { PrimaryButton } from "../atoms";

export const Navbar = ({ showBackground = true }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScroll(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky left-0 right-0 top-0 z-40 flex w-screen items-center px-6 py-2 shadow-md md:py-4 lg:px-28 ${
          (isScroll && showBackground) || showBackground === false
            ? "z-20 bg-primary-purple text-white opacity-95 hover:bg-primary-purple"
            : "shadow-md lg:bg-white"
        }`}
      >
        <section className="flex w-full items-center justify-between">
          <Image
            src={"/icons/mp.svg"}
            width={40}
            height={40}
            alt="logo"
            className="md:h-58 md:w-58"
          />

          <button onClick={toggleMenu}>
            <IoMenu
              className={`ease h-8 w-8 transition duration-500 lg:hidden ${
                isScroll ? "text-white" : "text-primary-purple"
              }`}
            />
          </button>
          <section className="hidden lg:flex">
            <Navitems />
          </section>
        </section>
      </nav>
      <NavModal
        className={isOpen ? "z-50" : "hidden"}
        isOpen={isOpen}
        closeButton={toggleMenu}
      />
    </>
  );
};
