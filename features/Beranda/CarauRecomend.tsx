import React from "react";
import { SubArticleButton } from "@/components/atoms";
import RecomendCard from "@/components/Card/RecomendCard";
import { recomendData } from "@/mock/recomendData";
import Image from "next/image";
import Link from "next/link";

const CarauRecomend = () => {
  return (
    <main className=" flex flex-col gap-6 px-6 md:px-28">
      <SubArticleButton>Artikel Rekomendasi</SubArticleButton>
      <section className="flex w-full flex-1 flex-col gap-10 md:justify-between md:gap-6 lg:flex-row  ">
        <section className="grid w-fit grid-flow-row gap-3">
          <Image
            src={"/images/happyfam.webp"}
            width={620}
            height={425}
            alt=""
            objectFit="cover"
            objectPosition="top"
            className="rounded-md hover:brightness-50"
          />
          <div className="flex flex-col gap-2">
            <Link
              href={"/"}
              className="text-text-m font-bold hover:underline md:text-text-l "
            >
              Apa Saja Makanan Bergizi untuk Ibu Hamil?
            </Link>
            <p className="text-text-s">
              Ibu hamil membutuhkan 1000 miligram kalsium yang bisa dibagi dalam
              dua dosis 500 miligram per hari. Sumber kalsium yang baik bisa
              ditemukan pada susu, yoghurt, keju, ikan dan seafood yang rendah
              merkuri
            </p>
          </div>
        </section>
        <section className="grid grid-flow-row gap-5 ">
          {recomendData.map((ItemArticle) => (
            <RecomendCard key={ItemArticle.id} ItemArticle={ItemArticle} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default CarauRecomend;
