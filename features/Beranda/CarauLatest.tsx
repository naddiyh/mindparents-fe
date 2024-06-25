"use client";

import React, { useEffect, useState, useRef } from "react";
import { LatestCard } from "@/components/Card/LatestCard";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { SubArticleButton } from "@/components/atoms";
import useDraggableScroll from "use-draggable-scroll";
import { getAllArticle } from "@/service/artikel";
import { IArtikel } from "@/interface";

export const LatestCarousel: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [latestArticles, setLatestArticles] = useState<IArtikel[]>([]);
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getAllArticle();
      setLatestArticles(articles);
    };

    fetchArticles();
  }, []);

  const leftClick = () => {
    setLatestArticles((prevArticles) => {
      const rotatedArticles = [...prevArticles];
      const lastArticle = rotatedArticles.pop();
      if (lastArticle) {
        rotatedArticles.unshift(lastArticle);
      }
      return rotatedArticles;
    });
    setIsClicked(true);
  };

  const rightClick = () => {
    setLatestArticles((prevArticles) => {
      const rotatedArticles = [...prevArticles];
      const firstArticle = rotatedArticles.shift();
      if (firstArticle) {
        rotatedArticles.push(firstArticle);
      }
      return rotatedArticles;
    });
    setIsClicked(true);
  };

  useEffect(() => {
    if (!isClicked) {
      const interval = setInterval(() => {
        leftClick();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isClicked]);

  return (
    <main className="flex w-full flex-col gap-8 px-6 md:px-28">
      <SubArticleButton>Artikel Terbaru</SubArticleButton>

      <div className="relative flex items-center justify-center overflow-x-hidden rounded-xl md:rounded-sm">
        <div
          className="grid h-[500px] grid-flow-col gap-6"
          ref={ref}
          onMouseDown={onMouseDown}
        >
          {latestArticles.map((article) => (
            <LatestCard key={article.id} article={article} />
          ))}
        </div>
        <div className="absolute h-full w-full">
          <button
            className="absolute left-1 top-36 z-10 scale-90 rounded-full bg-purple-500 bg-opacity-60 p-2 hover:bg-opacity-30 md:scale-100"
            onClick={leftClick}
          >
            <MdOutlineArrowBackIosNew className="z-20 h-10 w-10 text-white" />
          </button>
          <button
            className="absolute right-1 top-36 z-10 scale-90 rounded-full bg-purple-500 bg-opacity-60 p-2 hover:bg-opacity-30 md:scale-100"
            onClick={rightClick}
          >
            <MdOutlineArrowForwardIos className="z-20 h-10 w-10 text-white" />
          </button>
        </div>
      </div>
    </main>
  );
};
