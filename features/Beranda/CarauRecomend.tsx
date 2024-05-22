import React from "react";
import { SubArticleButton } from "@/components/atoms";
import RecomendCard from "@/components/Card/RecomendCard";
import { recomendData } from "@/mock/recomendData";

const CarauRecomend = () => {
  return (
    <main className=" flex flex-col gap-6 px-8 md:px-28">
      <SubArticleButton>Artikel Rekomendasi</SubArticleButton>
      <section className="flex w-full flex-col justify-between border md:flex-row ">
        <section>
          <RecomendCard
            key={recomendData[0].id}
            ItemArticle={recomendData[0]}
          />
        </section>
        <section className="flex flex-col gap-4 text-text-m">
          {recomendData.map((ItemArticle) => (
            <RecomendCard key={ItemArticle.id} ItemArticle={ItemArticle} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default CarauRecomend;
