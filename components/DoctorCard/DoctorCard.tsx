"use client";
import React from "react";
import { AiFillLike } from "react-icons/ai";

export default function DoctorCard({
  name,
  speciality,
  age,
  rating,
  imgUrl,
  onClickPromise,
  onClickChat,
}: IDoctorCard) {
  return (
    <div className="rounded border-2 p-4">
      <div className="flex flex-row">
        <div className="w-[104px]">
          <img
            src={imgUrl}
            alt="Doctor"
            className="h-min w-[104px] rounded object-cover"
          />
        </div>
        <div className="w-[calc(100%-104px)] pl-4">
          <p className="text-base font-bold">{name}</p>
          <p className="mt-2 text-sm">{speciality}</p>
          <div className="mt-2 flex flex-row">
            <p className="w-full rounded bg-gray-200 p-1 text-center">
              <div className="flex h-full flex-row items-center justify-center">
                {age} Tahun
              </div>
            </p>
            <div className="ml-4 w-full rounded bg-gray-200 p-1">
              <div className="flex flex-row items-center justify-center p-1">
                <AiFillLike className="text-[#7631CC]" />
                <div className="w-1"></div>
                <p>{rating}%</p>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-row">
            <button
              className="w-full rounded bg-[#7631CC] p-2 text-white"
              onClick={() => {
                onClickPromise();
              }}
            >
              Buat Janji
            </button>
            <button
              className="ml-4 w-full rounded bg-[#7631CC] p-2 text-white"
              onClick={() => {
                onClickChat();
              }}
            >
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}