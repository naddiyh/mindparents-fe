"use client";

import { useEffect, useRef } from "react";
import TrendingCard from "@/components/Card/TrendingCard";
import { trendingData } from "@/mock/trendingData";
import { SubArticleButton } from "@/components/atoms";

const CarauTrending = () => {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const totalSlides = trendingData.length;
  const slideWidth = 400;
  const speed = 1.5;

  useEffect(() => {
    let animationFrameId: number;
    let position = 0;

    const step = () => {
      if (slideRef.current) {
        position -= speed;
        if (position <= -slideWidth * totalSlides) {
          position = 0;
        }
        slideRef.current.style.transform = `translateX(${position}px)`;
      }
      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step); // Memulai animasi

    return () => window.cancelAnimationFrame(animationFrameId); // Membersihkan animasi saat komponen unmount
  }, [totalSlides, slideWidth, speed]);

  return (
    <main className="flex flex-col gap-8 py-20">
      <div className="px-6 md:px-28">
        <SubArticleButton>Trending</SubArticleButton>
      </div>

      <section className="relative max-h-[180px] items-center justify-center overflow-hidden bg-purple-100">
        <div
          ref={slideRef}
          className="flex"
          style={{
            width: `${slideWidth * totalSlides * 2}px`,
          }}
        >
          {trendingData.concat(trendingData).map((item, index) => (
            <TrendingCard key={index} ItemArticle={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CarauTrending;
