import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import { UpButton } from "@/components/atoms";
import CarauLatest from "@/features/Beranda/CarauLatest";
import CarauRecomend from "@/features/Beranda/CarauRecomend";
import CarauTrending from "@/features/Beranda/CarauTrending";
import Fitur from "@/components/FiturTerkait/Fitur";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col  ">
        <Navbar />
        <Hero />
        <Fitur />
        <CarauTrending />
        <CarauLatest />
        <CarauRecomend />
        <UpButton />
      </main>
    </>
  );
}
