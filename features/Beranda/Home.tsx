"use client";
import React from "react";
import Hero from "@/components/Hero/Hero";

import { CarauTrending, LatestCarousel } from "@/features/Beranda";

import SubHero from "@/components/AybuHero/SubHero";
import Fitur from "@/components/FiturTerkait/Fitur";
import SubVideo from "@/components/SubVideo";
import { useLoading } from "@/context/Loading";
import { ThreeDots } from "react-loader-spinner";

export const Home = () => {
  const { isLoading } = useLoading();

  if (isLoading) {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black">
        <ThreeDots
          visible={true}
          height={100}
          width={100}
          color="#7631CC"
          radius={10}
          ariaLabel="three-dots-loading"
        />
      </div>
    );
  }

  return (
    <main>
      <Hero />
      <SubHero />
      <SubVideo />
      <Fitur />
      <CarauTrending />
      <LatestCarousel />
    </main>
  );
};
