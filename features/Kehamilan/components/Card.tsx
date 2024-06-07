"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IArtikel } from "@/interface";
import { ShowMore } from "@/components/atoms";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategoryAndSubcategory } from "@/service/artikel";

interface Props {
  category: string;
  subcategory: string;
}

const Card: React.FC<Props> = ({ category, subcategory }) => {
  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["articles", category, subcategory],
    queryFn: () => getArticlesByCategoryAndSubcategory(category, subcategory),
  });

  const [showCount, setShowCount] = useState(3);

  const handleShowMore = () => {
    setShowCount((prevCount) => prevCount + 3);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching articles</div>;
  }

  return (
    <section className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, showCount).map((article: IArtikel) => (
        <div className="flex max-w-[300px] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          <Link
            href={{
              pathname: `/${category}/${subcategory}/${article.id}`,
            }}
            key={article.id}
          >
            <div className="relative flex flex-col gap-3">
              <Image
                src={article.img}
                width={300}
                height={100}
                alt={article.title}
                objectFit="cover"
                className="rounded-md"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-text-m font-semibold hover:underline">
                  {article.title}
                </h2>
                <p className="text-text-s">{article.desc}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className="flex w-full">
        {showCount < articles.length && (
          <ShowMore onClick={handleShowMore}>Lihat lebih banyak</ShowMore>
        )}
      </div>
    </section>
  );
};

export default Card;
