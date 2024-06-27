"use client";
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { CardAhli } from "@/features/tanyaAhli";
import { IAhli } from "@/interface";
import { Search } from "@/components/atoms";
import { useLoading } from "@/context/Loading";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { useAuth } from "@/features/auth/useAuth"; // Import useAuth hook

export const TanyaAhli: React.FC = () => {
  const { user } = useAuth(); // Get user object from useAuth hook
  const [psychologists, setPsychologists] = useState<IAhli[]>([]);
  const [filteredPsychologists, setFilteredPsychologists] = useState<
    IAhli[] | null
  >(null);
  const [filterText, setFilterText] = useState<string>("");
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "user"), where("role", "==", "psikologi"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        speciality: doc.data().speciality,
        age: doc.data().age,
        rating: doc.data().rating,
        onClickPromise: () => console.log("Buat Janji clicked"),
        onClickChat: () => console.log("Chat clicked"),
      })) as IAhli[];
      setPsychologists(data);
      setFilteredPsychologists(data);
    } catch (error) {
      console.error("Error fetching psychologists:", error);
    } finally {
      setLoading(false);
    }
  };

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

  // Check if useRouter is available (ensure running on client-side)

  if (isLoading || filteredPsychologists === null) {
    return (
      <main className="flex flex-col gap-8 px-6 py-28 lg:px-28">
        <div>
          <h1 className="text-2xl font-bold">Tanya Ahli</h1>
        </div>
        <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center  bg-black">
          <ThreeDots
            visible={true}
            height="100"
            width="100"
            color="#7631CC"
            radius="10"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </main>
    );
  }

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
          <p className="text-center text-text-s italic">Nama tidak ditemukan</p>
        )}
      </div>
    </main>
  );
};
