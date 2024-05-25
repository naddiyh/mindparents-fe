import React from "react";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import { UpButton } from "@/components/atoms";
import CarauLatest from "@/features/Beranda/CarauLatest";
import CarauRecomend from "@/features/Beranda/CarauRecomend";
import CarauTrending from "@/features/Beranda/CarauTrending";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col   ">
        <Navbar />
        <Hero />
        <CarauTrending />
        <CarauLatest />
        <CarauRecomend />
        <UpButton />
      </main>
    </>
  );
}
