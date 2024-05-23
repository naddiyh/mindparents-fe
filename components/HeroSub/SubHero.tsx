import React from "react";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";

const SubHero = () => {
  return (
    <>
      <main className="pt-10">
        <section className="grid grid-cols-2 gap-52">
          <section className="relative w-[580px] h-[700px]">
            <div className="relative">
              <Image
                src="/images/trapesium.webp"
                width={600}
                height={600}
                className="absolute z-10 top-0 left-0"
                alt="trapesium"
              />
              <div className="absolute top-0 left-0 z-20 p-6">
                <p className="text-text-s font-semibold px-16">
                  Ingin tanya dengan cepat dan mudah lebih lanjut?
                </p>
                <div className="flex">
                  <p className="text-heading-s font-bold pl-24 pt-2">Solusinya</p>
                  <p className="text-heading-s font-bold text-primary-purple flex px-2 pt-2">AybuBot!</p>
                </div>
                <div className="w-[450px] h-[400px] pl-16 pt-2">
                  <p className="text-text-s text-justify">
                    Sahabat pintar untuk orang tua yang dibangun dengan teknologi canggih AI, 
                    AyBu Bot hadir untuk memberikan dukungan dan inspirasi dalam pola pengasuhan anak.
                    Dari menjawab pertanyaan seputar perkembangan anak hingga memberikan saran praktis 
                    untuk mengatasi tantangan sehari-hari, AyBu Bot adalah mitra yang dapat diandalkan untuk 
                    membantu Anda menjadi orang tua yang lebih percaya diri dan cerdas.
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

export default SubHero;
