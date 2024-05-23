"use client";
import Link from "next/link";
import Caraousel from "./CaraouselHero";
import { PrimaryButton } from "../atoms";
import TypeWriter from "./Typewrites";
import { useState } from "react";

const Hero = () => {
  return (
    <>
      <main className=" flex min-h-screen w-screen items-center px-6 pt-20 lg:px-28 ">
        <section className="flex flex-1 flex-col gap-10 md:flex-row md:gap-8 lg:justify-between ">
          <section className="">
            <Caraousel />
          </section>

          <section className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className=" text-heading-m font-bold md:text-heading-l">
                Membentuk Keluarga Cemara
                <TypeWriter />
              </h2>

              <p className="text-text-m md:text-text-l">
                Bersiaplah Menjadi Orang Tua yang Hebat dan Mengarungi Setiap
                Tahapan dari Masa Kehamilan hingga Masa Pertumbuhan dan
                Perkembangan Anak!
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-10">
              <Link href={"/auth/signup"} className="w-full">
                <PrimaryButton fullwidth>Daftar</PrimaryButton>
              </Link>

              <Link href={"/auth/login"} className="w-full">
                <PrimaryButton fullwidth>Masuk</PrimaryButton>
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Hero;
