import React from "react";
import Image from "next/image";
import { PrimaryButton } from "../atoms";

const AybuHero = () => {
  return (
    <>
      <main className="hidden gap-10 pt-10 lg:flex">
        <section className="relative ">
          <Image
            src="/images/trapesium.webp"
            width={870}
            height={520}
            objectFit="cover"
            alt="trapesium"
          />
          <div className="absolute left-0 top-5 z-20 p-6 lg:top-20 lg:w-3/4">
            <p className="px-16 text-text-s font-semibold lg:text-text-m">
              Ingin tanya dengan cepat dan mudah lebih lanjut?
            </p>
            <div className="flex">
              <p className="pl-24 pt-2 text-heading-s font-bold">Solusinya</p>
              <p className="flex px-2 pt-2 text-text-l font-bold text-primary-purple lg:text-heading-s">
                Aybu Bot!
              </p>
            </div>
            <div className="h-[400px]  pl-16 pt-2">
              <p className="text-justify text-text-s md:text-text-m">
                Sahabat pintar untuk orang tua yang dibangun dengan teknologi
                canggih AI, Aybu hadir untuk memberikan dukungan dan inspirasi
                dalam pola pengasuhan anak. Dari menjawab pertanyaan seputar
                perkembangan anak hingga memberikan saran praktis untuk
                mengatasi tantangan sehari-hari, Aybu adalah mitra yang dapat
                diandalkan untuk membantu Anda menjadi orang tua yang lebih
                percaya diri dan cerdas.
              </p>
              <div className="pt-5">
                <PrimaryButton fullwidth={false}>
                  <p className="text-text-l font-semibold">Coba Aybu</p>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden md:flex">
          <div>
            <Image
              src="/svg/Aybubot.svg"
              width={500}
              height={900}
              alt="aybubot"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default AybuHero;
