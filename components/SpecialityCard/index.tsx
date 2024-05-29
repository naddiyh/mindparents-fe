"use client";
import React from "react";

export default function SpecialityCard({
  imgUrl,
  speciality,
  onClick,
}: ISpecialityCard) {
  return (
    <div
      className="pt-4"
      onClick={() => {
        onClick();
      }}
    >
      <div className="flex flex-row items-center">
        <img
          src={imgUrl}
          alt="Speciality"
          className="h-[100px] w-[100px] rounded object-cover"
        />
        <div className="w-2"></div>
        <p className="text-xl font-bold">{speciality}</p>
      </div>
    </div>
  );
}
