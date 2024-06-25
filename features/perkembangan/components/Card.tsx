"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IArtikel } from "@/interface";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategoryAndSubcategory } from "@/service/artikel";

interface Props {
  category: string;
  subcategory: string;
  showCount: number; // Menambahkan prop showCount ke dalam antarmuka Props
}

const Card: React.FC<Props> = ({ category, subcategory, showCount }) => {
  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["articles", category, subcategory],
    queryFn: () => getArticlesByCategoryAndSubcategory(category, subcategory),
  });

  const truncateTextByWords = (text: string, maxWords: number) => {
    const words = (text ?? "").split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching articles</div>;
  }

  return (
    <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, showCount).map((article: IArtikel) => (
        <div
          key={article.id}
          className="flex  transition-transform duration-300 ease-in-out hover:scale-[1.02]"
        >
          <Link
            href={{
              pathname: `/${category}/${subcategory}/${article.id}`,
            }}
          >
            <div className=" flex flex-col gap-3">
              <Image
                src={article.imageUrl}
                width={450}
                height={100}
                alt={article.title}
                objectFit="cover"
                className="rounded-md"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-text-m font-semibold hover:text-primary-purple hover:underline">
                  {article.title}
                </h2>
                <p className="text-text-s">
                  {truncateTextByWords(article.desc, 20)}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Card;
