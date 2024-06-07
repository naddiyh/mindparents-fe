import React from "react";
import Hero from "@/components/Hero/Hero";

import {
  CarauTrending,
  CarauRecomend,
  LatestCarousel,
} from "@/features/Beranda";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

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
