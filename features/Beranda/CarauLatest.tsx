// components/LatestCarousel.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { LatestCard } from "@/components/Card";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { DataArticle } from "@/mock/latestData";
import { SubArticleButton } from "@/components/atoms";
import useDraggableScroll from "use-draggable-scroll";

export const LatestCarousel: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [latestArticles, setLatestArticles] = useState(DataArticle);
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  // Fungsi untuk slider ke kiri
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

  // Fungsi untuk slider ke kanan
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
    <main className="flex w-full flex-col gap-8 px-6 pb-20 md:px-28">
      <SubArticleButton>Artikel Terbaru</SubArticleButton>

      <div className="relative flex items-center justify-center overflow-x-hidden rounded-xl md:rounded-sm">
        {/* Draggable Scroll */}
        <div
          className="grid grid-flow-col gap-6"
          ref={ref}
          onMouseDown={onMouseDown}
        >
          {latestArticles.map((ItemArticle) => (
            <LatestCard key={ItemArticle.id} ItemArticle={ItemArticle} />
          ))}
        </div>
        <div className="absolute h-full w-full">
          <button
            className="absolute left-1 top-36 z-10 scale-90 rounded-full  bg-purple-500 bg-opacity-60 p-2 hover:bg-opacity-30 md:scale-100"
            onClick={() => leftClick()}
          >
            <MdOutlineArrowBackIosNew className="z-20 h-10 w-10  text-white" />
          </button>
          <button
            className="absolute right-1 top-36 z-10  scale-90 rounded-full bg-purple-500  bg-opacity-60 p-2 hover:bg-opacity-30  md:scale-100"
            onClick={() => rightClick()}
          >
            <MdOutlineArrowForwardIos className="z-20 h-10 w-10 text-white" />
          </button>
        </div>
      </div>
    </main>
  );
};

// "use client";

// import LatestCard from "@/components/Card/LatestCard";
// import { useState, useEffect } from "react";
// import { fetchLatestArticle } from "@/service/fetchLatest";

// const LatestCaraousel: React.FC = () => {
//   const [cards,setCards] = useState()
//     const [latestArticle, setLatestArticle] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       const latestArticle = await fetchLatestArticle();
//       setLatestArticle(latestArticle);
//     };
//     fetchArticle();
//   }, []);

//   return (
//     <main className="flex flex-col gap-10 px-8">
//       <h2 className=" text-text-l underline">Artikel Terbaru</h2>

//       <section className="flex gap-4">
//         {latestArticle.map((ItemArticle) => (
//           <LatestCard key={ItemArticle.id} ItemArticle={ItemArticle} />
//         ))}
//       </section>
//     </main>
//   );
// };

// export default LatestCaraousel;
