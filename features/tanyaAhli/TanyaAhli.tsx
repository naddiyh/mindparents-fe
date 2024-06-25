"use client";
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { CardAhli } from "@/features/tanyaAhli";
import { IAhli } from "@/interface";
import { Search } from "@/components/atoms";

export const TanyaAhli: React.FC = () => {
  const [psychologists, setPsychologists] = useState<IAhli[]>([]);
  const [filteredPsychologists, setFilteredPsychologists] = useState<IAhli[]>(
    [],
  );
  const [filterText, setFilterText] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "user"), where("role", "==", "psikologi"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id, // Pastikan ID dokumen ditambahkan
          name: docData.name,
          speciality: docData.speciality,
          age: docData.age,
          rating: docData.rating,
          onClickPromise: () => console.log("Buat Janji clicked"),
          onClickChat: () => console.log("Chat clicked"),
        } as IAhli;
      });
      setPsychologists(data);
      setFilteredPsychologists(data);
    };

    fetchData();
  }, []);

  const handleFilterTextChange = (text: string) => {
    setFilterText(text);
    if (text === "") {
      setFilteredPsychologists(psychologists);
    } else {
      const filtered = psychologists.filter((psychologist) =>
        psychologist.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredPsychologists(filtered);
    }
  };

  return (
    <main className="flex flex-col gap-8 px-6 py-28 lg:px-28">
      <div>
        <h1 className="text-2xl font-bold">Tanya Ahli</h1>
      </div>
      <div>
        <div className="relative">
          <Search
            filterText={filterText}
            onFilterTextChange={handleFilterTextChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">Rekomendasi Psikolog</h2>
        {filteredPsychologists.length > 0 ? (
          <CardAhli data={filteredPsychologists} />
        ) : (
          <p className="text-center text-text-m italic">
            Nama tidak ditemukan!
          </p>
        )}
      </div>
    </main>
  );
};
