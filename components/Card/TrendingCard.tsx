"use client";
import { ITrendingArticle } from "@/interface/trendingArticle";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const TrendingCard: React.FC<ITrendingArticle> = ({ ItemArticle }) => {
  return (
    <section className="relative flex max-h-[180px] w-[400px] gap-4  border-r  border-purple-300 px-4 py-10">
      <Image
        src={ItemArticle.img}
        width={150}
        height={50}
        alt=""
        objectFit="cover"
        objectPosition="top"
      />
      <section className="z-10 flex flex-col gap-4">
        <Link href={"/"} className="text-text-s font-bold  hover:underline">
          {ItemArticle.title}
        </Link>
        <div className="flex justify-between">
          <p className="text-text-s">{ItemArticle.name}</p>
          <p className="text-text-s italic">{ItemArticle.created}</p>
        </div>
      </section>
    </section>
  );
};

export default TrendingCard;
