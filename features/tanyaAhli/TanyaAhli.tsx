// tanyaAhli.tsx
"use client";
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import CardAhli from "./CardAhli";
import { IAhli } from "@/interface";

export const TanyaAhli: React.FC = () => {
  const [psychologists, setPsychologists] = useState<IAhli[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "user"), where("role", "==", "psikologi"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          name: docData.name,
          speciality: docData.speciality,
          age: docData.age,
          rating: docData.rating,
          onClickPromise: () => console.log("Buat Janji clicked"),
          onClickChat: () => console.log("Chat clicked"),
        } as IAhli;
      });
      setPsychologists(data);
    };

    fetchData();
  }, []);

  return (
    <main className="p-28">
      <div className="pt-6">
        <h1 className="text-2xl font-bold">Tanya Ahli</h1>
      </div>
      <div className="pt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari Dokter atau Psikolog"
            className="w-2/5 rounded-full border-2 border-gray-300 py-2 pl-10"
          />
        </div>
      </div>
      <div className="pt-6">
        <h2 className="text-2xl font-bold">Rekomendasi Psikolog</h2>
        <CardAhli data={psychologists} />
      </div>
    </main>
  );
};
