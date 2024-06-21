"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { IArtikel } from "@/interface";
import { ShowMore } from "@/components/atoms";
import { getArticlesByCategoryAndSubcategory } from "@/service/artikel";

interface Props {
  category: string;
  subcategory: string;
}

export const Card: React.FC<Props> = ({ category, subcategory }) => {
  const [showCount, setShowCount] = useState(3);

  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["articles", category, subcategory],
    queryFn: () => getArticlesByCategoryAndSubcategory(category, subcategory),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error Fetching Article</div>;
  }

  const handleShowMore = () => {
    setShowCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, showCount).map((artikel) => (
        <div
          key={artikel.id}
          className="flex max-w-[300px] transition-transform duration-300 ease-in-out hover:scale-[1.02]"
        >
          <Link
            href={{
              pathname: `articles/${category}/${subcategory}/${artikel.id}`,
            }}
          >
            <div className="relative flex flex-col gap-3">
              <Image
                src={artikel.img}
                width={300}
                height={100}
                alt={artikel.title}
                objectFit="cover"
                className="rounded-md"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-text-m font-semibold hover:underline">
                  {artikel.title}
                </h2>
                <p className="text-text-s">{artikel.desc}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className="flex w-full border">
        {showCount < articles.length && (
          <ShowMore onClick={handleShowMore}>Lihat lebih banyak</ShowMore>
        )}
      </div>
    </section>
  );
};
