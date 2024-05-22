"use client";
import Image from "next/image";
import React from "react";
import { IRecomendArticle } from "@/interface/recomendArticle";
import { PrimaryButton } from "../atoms";

const RecomendCard: React.FC<IRecomendArticle> = ({ ItemArticle }) => {
  return (
    <section className="relative flex justify-between gap-2 rounded-xl">
      <div className="relative z-10 flex h-[] md:h-[150px] md:w-[200px]">
        <Image
          src={ItemArticle.img}
          layout="fill"
          alt={""}
          objectFit="cover"
          className="rounded-xl  "
        />
        <PrimaryButton fullwidth={false}>{ItemArticle.title}</PrimaryButton>
      </div>
      <div className=" z-10  ">
        <p className="font-bold">{ItemArticle.title}</p>
        <p> {ItemArticle.desc}</p>
      </div>
    </section>
  );
};

export default RecomendCard;
