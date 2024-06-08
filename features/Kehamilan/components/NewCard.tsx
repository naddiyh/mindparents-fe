"use client";

import Image from "next/image";
import Link from "next/link";
import { IArtikel } from "@/interface";
import fetchLatestArticles from "@/service/artikel";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export const NewCardPage: React.FC = () => {
  const params = useParams();
  const { subcategory } = params as { subcategory: string };

  const subcategories = ["trisemester-1", "trisemester-2", "trisemester-3"];
  const [articles, setArticles] = useState<IArtikel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const fetchArticles = async () => {
      try {
        const fetchedArticles = await fetchLatestArticles(
          "kehamilan",
          subcategories,
        );
        console.log(fetchedArticles); // Log untuk memeriksa data artikel
        setArticles(fetchedArticles);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [subcategory]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading articles</div>;

  return (
    <div className="flex flex-col gap-6">
      {articles.slice(0, 4).map((article: IArtikel) => (
        <Link
          key={article.id}
          href={`/kehamilan/${article.subcategory}/${article.id}`}
          className="flex gap-4"
        >
          <Image
            src={article.img}
            alt={article.title}
            width={120}
            height={120}
            className="rounded-md"
          />
          <p className="text-text-s font-semibold hover:underline md:text-text-m">
            {article.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NewCardPage;
