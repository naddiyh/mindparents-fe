import React from "react";
import Image from "next/image";

const Fitur = () => {
  return (
    <>
      <main className="px-24">
        <section className="flex justify-center pt-5">
          <p className="text-heading-m text-primary-purple-hover font-bold">Fitur</p>
          <p className="text-heading-m text-white font-bold">i</p>
          <p className="text-heading-m font-bold">Terkait</p>
        </section>
        <section className="grid grid-cols-2 gap-4 pt-10">
          <div className="flex gap-3">
            <div className="w-[70px] h-[50px] flex-shrink-0">
              <Image
                src="/images/anakAnak.webp"
                width={70}
                height={50}
                className="rounded-md w-full h-full object-cover object-center"
                alt="perkembanganAnak"
              />
            </div>
            <div>
              <p className="text-text-m font-bold">Perkembangan Anak</p>
              <p className="text-text-s">Segala sesuatu tentang anak mulai dari golden age hingga masalah tentang anak</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[70px] h-[50px] flex-shrink-0">
              <Image
                src="/images/ibuHamil.webp"
                width={70}
                height={50}
                className="rounded-md w-full h-full object-cover object-center"
                alt="ibuHamil"
              />
            </div>
            <div>
              <p className="text-text-m font-bold">Masa Kehamilan</p>
              <p className="text-text-s">Membantu ibu hamil dalam masa kehamilan serta memberikan informasi selama masa kehamilan</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[70px] h-[50px] flex-shrink-0">
              <Image
                src="/images/perOrtu.webp"
                width={70}
                height={50}
                className="rounded-md w-full h-full object-cover object-center"
                alt="Persiapanortu"
              />
            </div>
            <div>
              <p className="text-text-m font-bold">Persiapan Orangtua</p>
              <p className="text-text-s">Membuat orangtua lebih siap dengan adanya anak</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[70px] h-[50px] flex-shrink-0">
              <Image
                src="/images/tanyaAhli.webp"
                width={70}
                height={50}
                className="rounded-md w-full h-full object-cover object-center"
                alt="psikolog"
              />
            </div>
            <div>
              <p className="text-text-m font-bold">Tanya Ahli</p>
              <p className="text-text-s">Bila ingin lebih mendalam, yuk tanya kepada ahlinya</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[70px] h-[50px] flex-shrink-0">
              <Image
                src="/images/Robot 2.webp"
                width={70}
                height={50}
                className="rounded-md w-full h-full object-cover object-center"
                alt="perkembanganAnak"
              />
            </div>
            <div>
              <p className="text-text-m font-bold">Aybu Bot</p>
              <p className="text-text-s">AI yang akan selalu siap membantu bila ada masalah yang lebih spesifik</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[70px] h-[50px] flex-shrink-0">
              <Image
                src="/images/Article.webp"
                width={70}
                height={50}
                className="rounded-md w-full h-full object-cover object-center"
                alt="perkembanganAnak"
              />
            </div>
            <div>
              <p className="text-text-m font-bold">Forum Diskusi</p>
              <p className="text-text-s">Media berbagi pengalaman bersama para pengguna lainnya</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Fitur;
