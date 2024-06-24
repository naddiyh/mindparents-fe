// components/Card/LatestCard.tsx

import Image from "next/image";
import React from "react";
import { IArtikel } from "@/interface";
import Link from "next/link";

interface Props {
  article: IArtikel;
}

export const LatestCard: React.FC<Props> = ({ article }) => {
  return (
    <Link
      href={`/${article.category}/${article.subcategory}/${article.id}`}
      passHref
    >
      <div className="container relative flex h-[340px] w-[350px] flex-col rounded-xl p-6 shadow-xl md:flex-row">
        <Image
          src={article.imageUrl}
          layout="fill"
          objectFit="cover"
          alt=""
          className="rounded-md brightness-75"
        />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <p className="w-fit rounded-md bg-primary-purple px-4 py-2 text-text-m text-white">
            {article.categor}
          </p>
          <div className="flex">
            <div className="flex flex-col gap-4 pl-5 text-white">
              <div className="text-text-s md:text-text-m">
                <p className="text-text-s font-semibold hover:underline">
                  {article.title}
                </p>
                <p className="text-text-s"> {article.desc}</p>
              </div>
              <div className="flex w-full text-text-s">
                <p>{article.creatorName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
