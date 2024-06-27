// Bot.tsx

"use client";
import { useState } from "react";
import Image from "next/image";
import { AybuBot } from "./aybu"; // Correct import statement for default export

export const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-8 right-6 rounded-full bg-primary-purple p-2 shadow-xl"
      >
        <Image
          src={"/images/ayb.webp"}
          alt={"Aybu Avatar"}
          width={40}
          height={40}
          layout="fixed"
        />
      </button>

      {isOpen && <AybuBot isOpen={isOpen} handleClose={handleClose} />}
    </>
  );
};
