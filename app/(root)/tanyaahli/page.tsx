"use client";
import DoctorCard from "@/components/DoctorCard";
import SpecialityCard from "@/components/SpecialityCard";
import { useRouter } from "next/navigation";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function TanyaAhli() {
  const router = useRouter();
  return (
    <div className="px-28">
      <div className="pt-6">
        <p className="text-2xl font-bold">Tanya Ahli</p>
      </div>
      <div className="pt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari Dokter atau Psikolog"
            className="w-2/5 rounded-full border-2 border-gray-300 py-2 pl-10"
          />
          <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 transform" />
        </div>
      </div>
      <div className="pt-6">
        <p className="text-2xl font-bold">Rekomendasi Dokter</p>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <DoctorCard
              imgUrl="https://th.bing.com/th/id/OIP.Pn2j5t9qBelsWydkczfK0wHaLx?rs=1&pid=ImgDetMain"
              name="dr. Ambatron Sp.A"
              speciality="Spesialis Ambatron"
              age={100}
              rating={100}
              onClickChat={() => {
                router.push("/");
              }}
              onClickPromise={() => {
                router.push("/");
              }}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="pt-6">
        <p className="text-2xl font-bold">Rekomendasi Psikolog</p>
        <div className="grid grid-cols-3 gap-4 pt-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <DoctorCard
              imgUrl="https://th.bing.com/th/id/OIP.Pn2j5t9qBelsWydkczfK0wHaLx?rs=1&pid=ImgDetMain"
              name="dr. Ambatron Sp.A"
              speciality="Spesialis Ambatron"
              age={100}
              rating={100}
              onClickChat={() => {
                console.log("Ambatron Here");
              }}
              onClickPromise={() => {
                console.log("Ambatron Here");
              }}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="pt-6">
        <p className="text-2xl font-bold">Cari Spesialisasi</p>
        <div className="grid grid-cols-3 gap-4 pt-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SpecialityCard
              imgUrl="https://th.bing.com/th/id/OIP.Pn2j5t9qBelsWydkczfK0wHaLx?rs=1&pid=ImgDetMain"
              onClick={() => {
                router.push("/");
              }}
              speciality="Spesialis Ambatron"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
