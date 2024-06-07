// components/Card/LatestCard.tsx
import Image from "next/image";
import React from "react";
import { IArtikel } from "@/interface";
import { PrimaryButton } from "../atoms";
import Link from "next/link";

interface Props {
  article: IArtikel;
}

export const LatestCard: React.FC<Props> = ({ article }) => {
  console.log("Rendering article:", article);

  return (
    <Link
      href={`/articles/${article.subcategory}/${article.id}`}
      passHref
      className="container relative flex h-[340px] w-[350px] flex-col rounded-xl p-6 shadow-xl md:flex-row"
    >
      <Image
        src={article.img}
        layout="fill"
        objectFit="cover"
        alt={""}
        className=" rounded-md brightness-75 "
      />
      <div className="relative z-10  flex h-full flex-col justify-between ">
        <PrimaryButton fullwidth={false}>{article.title}</PrimaryButton>
        <div className=" flex ">
          <p className="absolute bottom-0 h-[90px] border-l border-purple-200"></p>
          <div className=" flex flex-col gap-4  pl-5 text-white">
            <div className="text-text-s md:text-text-m">
              <p>{article.title}</p>
              <p> {article.desc}</p>
            </div>
            <div className="flex w-full text-text-s ">
              <p>{article.creatorName}</p>
              <p>lo</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
