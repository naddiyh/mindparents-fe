import Image from "next/image";
import React from "react";
import { IArtikel } from "@/interface/IArtikel";
import Link from "next/link";

interface IRecomendCardProps {
  article: IArtikel;
}

export const RecomendCard: React.FC<IRecomendCardProps> = ({ article }) => {
  return (
    <section className="flex flex-col gap-4 rounded-xl lg:flex-row">
      <Image
        src={article.imageUrl}
        width={620}
        height={425}
        alt={article.title}
        objectFit="cover"
        objectPosition="top"
        className="rounded-md hover:brightness-75 lg:h-[150px] lg:w-[230px]"
      />
      <div className="z-10">
        <Link
          href={`/${article.category}/${article.subcategory}/${article.id}`}
        >
          <p className="font-bold hover:underline">{article.title}</p>
          <p className="text-text-s md:text-text-m">{article.desc}</p>
        </Link>
      </div>
    </section>
  );
};
