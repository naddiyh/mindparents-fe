import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import ChatModal from "./chatAhli"; // Pastikan import dari komponen ChatModal yang sudah diperbaiki
import { IAhli } from "@/interface"; // Pastikan import dari interface yang sesuai

interface CardAhliProps {
  data: IAhli[]; // Pastikan interface IAhli sudah didefinisikan dengan benar
}

const CardAhli: React.FC<CardAhliProps> = ({ data }) => {
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
    <div className="grid grid-cols-3 gap-4 ">
      {data.map((ahli, index) => (
        <div key={index} className="rounded border-2 p-4">
          <div className="flex flex-row">
            <div className="w-[calc(100%-104px)] pl-4">
              <p className="text-base font-bold">{ahli.name}</p>
              <p className="mt-2 text-sm">{ahli.speciality}</p>
              <div className="mt-2 flex flex-row">
                <p className="w-full rounded bg-gray-200 p-1 text-center">
                  {ahli.age} Tahun
                </p>
                <div className="ml-4 w-full rounded bg-gray-200 p-1">
                  <div className="flex flex-row items-center justify-center p-1">
                    <AiFillLike className="text-[#7631CC]" />
                    <div className="w-1"></div>
                    <p>{ahli.rating}%</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-row">
                <button
                  className="w-full rounded bg-[#7631CC] p-2 text-white"
                  onClick={() => console.log("Buat Janji clicked")} // Ubah sesuai fungsi yang diinginkan
                >
                  Buat Janji
                </button>
                <button
                  className="ml-4 w-full rounded bg-[#7631CC] p-2 text-white"
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
        <ChatModal
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

export default CardAhli;
