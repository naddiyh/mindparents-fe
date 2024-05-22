import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import UpButton from "@/components/atoms/Buttons/UpButton";
import CarauLatest from "@/features/Beranda/CarauLatest";
import CarauRecomend from "@/features/Beranda/CarauRecomend";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col  ">
        <Navbar />
        <Hero />
        <CarauLatest />
        <CarauRecomend />
        <UpButton />
      </main>
    </>
  );
}
