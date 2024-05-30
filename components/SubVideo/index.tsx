import React from "react";
import { FaVideo } from "react-icons/fa6";
import KeluargaCemara from "@/public/images/keluargaCemara.jpg";
export default function SubVideo() {
  return (
    <div className="pl-28">
      <div className="flex flex-row bg-[#F6F0FF]">
        <div className="relative w-1/2">
          <div className="w-full rounded-xl bg-[#0000005E] pb-[56.25%]"></div>
          <img
            className="absolute left-0 top-0 h-full w-full rounded-xl object-cover blur-[1px]"
            src={KeluargaCemara.src}
            alt="Keluarga Cemara"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-50">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-24 w-24 rounded-full bg-white bg-opacity-40"></div>
              <svg
                className="relative h-16 w-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="my-8 ml-20 flex flex-col justify-center">
          <p className="text-xl font-bold">
            Beragam Video Parenting yang bisa kamu dapatkan!
          </p>
          <p className="mt-8">
            Menjadi platform terbaik untuk orang tua belajar dan berdampak
            positif terhadap keluarga
          </p>
          <div className="mt-4 flex w-fit flex-row items-center rounded-lg bg-white py-2 pl-2 pr-4 shadow-xl">
            <FaVideo className="mx-4 text-3xl text-[#7631CC]" />
            <div>
              <p className="text-2xl font-bold">
                Akses <span className="text-[#7631CC]">100+</span> Video
              </p>
              <p className="font-semibold">Terkait Parenting</p>
            </div>
          </div>
          <div className="mt-8">
            <a
              className="font-[600] text-[#7631CC]"
              href="https://www.youtube.com/watch?v=CjJf8FI3oxk&pp=ygUOcGFyZW50aW5nIGFuYWs%3D"
              target="_blank"
              rel="noopener"
            >
              Lihat Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
