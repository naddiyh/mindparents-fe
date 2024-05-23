// components/LatestCarousel.tsx
"use client";

import React, { useEffect, useState } from "react";
import LatestCard from "@/components/Card/LatestCard";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { DataArticle } from "@/mock/latestData";
import { SubArticleButton } from "@/components/atoms";

const LatestCarousel: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [latestArticles, setLatestArticles] = useState(DataArticle);
  const [currentIndex, setCurrentIndex] = useState(1);

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
    <main className="flex w-full flex-col gap-8 px-6 pb-28 md:px-28">
      <SubArticleButton>Artikel Terbaru</SubArticleButton>

      <div className="flex items-center justify-center overflow-x-hidden rounded-xl md:rounded-sm">
        <div className="grid grid-flow-col gap-6">
          {latestArticles.map((ItemArticle) => (
            <LatestCard key={ItemArticle.id} ItemArticle={ItemArticle} />
          ))}
        </div>
        <button
          className="absolute left-5 z-10 scale-75 rounded-full  bg-purple-500 bg-opacity-60 p-2 hover:bg-opacity-30 md:left-28 md:scale-100"
          onClick={() => leftClick()}
        >
          <MdOutlineArrowBackIosNew className="z-20 h-10 w-10  text-white" />
        </button>
        <button
          className="absolute right-3 z-10  scale-75 rounded-full bg-purple-500  bg-opacity-60 p-2 hover:bg-opacity-30 md:right-28 md:scale-100"
          onClick={() => rightClick()}
        >
          <MdOutlineArrowForwardIos className="z-20 h-10 w-10 text-white" />
        </button>
      </div>
    </main>
  );
};

export default LatestCarousel;

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
