"use client";
import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { ChatAhli } from "./chatAhli"; // Pastikan import dari komponen ChatModal yang sudah diperbaiki
import { IAhli } from "@/interface"; // Pastikan import dari interface yang sesuai
import Image from "next/image";

interface CardAhliProps {
  data: IAhli[]; // Pastikan interface IAhli sudah didefinisikan dengan benar
}

export const CardAhli: React.FC<CardAhliProps> = ({ data }) => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State untuk menampilkan modal chat
  const [selectedPsychologist, setSelectedPsychologist] =
    useState<IAhli | null>(null); // State untuk menyimpan psikolog yang dipilih

  // Fungsi untuk menampilkan modal chat dan menyimpan psikolog yang dipilih
  const openChat = (psychologist: IAhli) => {
    setSelectedPsychologist(psychologist);
    setIsChatOpen(true);
  };

  // Fungsi untuk menutup modal chat
  const closeChat = () => {
    setSelectedPsychologist(null);
    setIsChatOpen(false);
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {data.map((ahli, index) => (
        <div key={index} className="rounded-md border bg-white p-4 shadow-sm">
          <div className="flex flex-row gap-6">
            <Image
              src={ahli.imageUrl}
              width={100}
              height={100}
              alt={ahli.name}
            />
            <div className="flex w-[calc(100%-104px)] flex-col gap-3">
              <div>
                <p className="text-base font-bold">{ahli.name}</p>
                <p className="text-text-s">{ahli.speciality}</p>
              </div>
              <div className="flex items-center gap-2">
                {ahli.isOnline ? (
                  <FaCircle className="text-green-500" title="Online" />
                ) : (
                  <FaCircle className="text-red-500" title="Offline" />
                )}
                <p className="text-sm">
                  {ahli.isOnline ? "Online" : "Offline"}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="flex w-full items-center justify-center rounded bg-gray-100 text-center text-text-s">
                  {ahli.age} Tahun
                </p>
                <div className="w-full rounded bg-gray-100 p-1">
                  <div className="flex flex-row items-center justify-center p-1">
                    <AiFillLike className="text-[#7631CC]" />
                    <div className="w-1"></div>
                    <p>{ahli.rating}%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <button
                  className="w-full rounded bg-[#7631CC] p-2 text-white hover:bg-purple-600"
                  onClick={() => console.log("Buat Janji clicked")} // Ubah sesuai fungsi yang diinginkan
                >
                  Buat Janji
                </button>
                <button
                  className="w-full rounded bg-[#7631CC] p-2 text-white hover:bg-purple-600"
                  onClick={() => openChat(ahli)}
                >
                  Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Modal Chat */}
      {selectedPsychologist && (
        <ChatAhli
          show={isChatOpen}
          onHide={closeChat}
          userId="dummyUserId" // Ganti dengan userId yang sesuai, jika perlu
          psychologistId={selectedPsychologist.id}
          psychologistName={selectedPsychologist.name}
        />
      )}
    </div>
  );
};
