import React from "react";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";

import {
  CarauTrending,
  CarauRecomend,
  LatestCarousel,
} from "@/features/Beranda";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CarauTrending />
        <LatestCarousel />
        <CarauRecomend />
      </main>
    </>
  );
}
