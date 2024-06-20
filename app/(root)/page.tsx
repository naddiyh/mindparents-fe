import React from "react";
import Hero from "@/components/Hero/Hero";

import {
  CarauTrending,
  CarauRecomend,
  // LatestCarousel,
} from "@/features/Beranda";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import SubHero from "@/components/AybuHero/SubHero";
import Fitur from "@/components/FiturTerkait/Fitur";
import SubVideo from "@/components/SubVideo";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SubHero />
        <SubVideo />
        <Fitur />
        <CarauTrending />
        {/* <LatestCarousel /> */}
        <CarauRecomend />
      </main>
    </>
  );
}
