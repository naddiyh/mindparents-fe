import React from "react";
import Image from "next/image";
import { PrimaryButton } from "../atoms";

const AybuHero = () => {
  return (
    <>
      <main className="pt-10">
        <section className="grid grid-cols-2 gap-52">
          <section className="relative h-[700px] w-[580px]">
            <div className="relative">
              <Image
                src="/images/trapesium.webp"
                width={600}
                height={600}
                className="absolute left-0 top-0 z-10"
                alt="trapesium"
              />
              <div className="absolute left-0 top-0 z-20 p-6">
                <p className="px-16 text-text-s font-semibold">
                  Ingin tanya dengan cepat dan mudah lebih lanjut?
                </p>
                <div className="flex">
                  <p className="pl-24 pt-2 text-heading-s font-bold">
                    Solusinya
                  </p>
                  <p className="flex px-2 pt-2 text-heading-s font-bold text-primary-purple">
                    AybuBot!
                  </p>
                </div>
                <div className="h-[400px] w-[450px] pl-16 pt-2">
                  <p className="text-justify text-text-s">
                    Sahabat pintar untuk orang tua yang dibangun dengan
                    teknologi canggih AI, AyBu Bot hadir untuk memberikan
                    dukungan dan inspirasi dalam pola pengasuhan anak. Dari
                    menjawab pertanyaan seputar perkembangan anak hingga
                    memberikan saran praktis untuk mengatasi tantangan
                    sehari-hari, AyBu Bot adalah mitra yang dapat diandalkan
                    untuk membantu Anda menjadi orang tua yang lebih percaya
                    diri dan cerdas.
                  </p>
                  <div className="pt-5">
                    <PrimaryButton fullwidth={false}>
                      <p className="text-text-l font-semibold">Coba Aybu</p>
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="hidden md:block">
            <div>
              <Image
                src="/svg/Aybubot.svg"
                width={300}
                height={900}
                alt="aybubot"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default AybuHero;
