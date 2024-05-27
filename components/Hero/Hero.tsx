"use client";

import Caraousel from "./CaraouselHero";
import { PrimaryButton } from "../atoms";
import TypeWriter from "./Typewrites";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <main className=" mt-24 flex w-screen items-center justify-center px-6 pb-4 md:mt-52 md:pb-10  lg:px-28 ">
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
              <PrimaryButton
                fullwidth
                onClick={async () => {
                  router.push("/signup");
                }}
              >
                Daftar
              </PrimaryButton>

              <PrimaryButton
                fullwidth
                onClick={async () => {
                  router.push("/login");
                }}
              >
                Masuk
              </PrimaryButton>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Hero;
