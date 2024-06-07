// app/kehamilan/components/HomePregnant.tsx

"use client";
import { useState } from "react";
import Card from "./components/Card";
import { Search, SubArticleButton } from "@/components/atoms";
import { IArtikel } from "@/interface";
import { useQuery } from "@tanstack/react-query"; // Import useQuery
import { getArticlesByCategoryAndSubcategory } from "@/service/artikel";

export const HomePregnant = () => {
  const [filterText, setFilterText] = useState("");

  // Use useQuery to fetch articles for each trimester
  const { data: articlesT1, isLoading: loadingT1 } = useQuery({
    queryKey: ["articles", "kehamilan", "trisemester-1"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("kehamilan", "trisemester-1"),
  });

  const { data: articlesT2, isLoading: loadingT2 } = useQuery({
    queryKey: ["articles", "kehamilan", "trisemester-2"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("kehamilan", "trisemester-2"),
  });

  const { data: articlesT3, isLoading: loadingT3 } = useQuery({
    queryKey: ["articles", "kehamilan", "trisemester-3"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("kehamilan", "trisemester-3"),
  });

  // Handle loading states
  if (loadingT1 || loadingT2 || loadingT3) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col gap-10 px-6 py-28 md:px-28">
      <section>
        <Search
          filterText={filterText}
          onFilterTextChange={setFilterText}
        ></Search>
      </section>

      <section className="flex flex-col justify-between gap-10 md:flex-row">
        <section className="flex flex-col gap-10 md:w-[80%] ">
          <section className="flex flex-col gap-10">
            <SubArticleButton>Artikel Rekomendasi</SubArticleButton>
          </section>

          {/* Render articles for each trimester */}
          <section className="flex flex-col gap-10">
            <SubArticleButton>Artikel Terkait</SubArticleButton>
            {/* Trimester 1 */}
            {articlesT1 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  Trisemester 1
                </p>
                {articlesT1.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <Card category={"kehamilan"} subcategory={"trisemester-1"} />
                )}
              </section>
            )}
            {/* Trimester 2 */}
            {articlesT2 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  Trisemester 2
                </p>
                {articlesT2.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <Card category={"kehamilan"} subcategory={"trisemester-2"} />
                )}
              </section>
            )}
            {/* Trimester 3 */}
            {articlesT3 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  Trisemester 3
                </p>
                {articlesT3.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <Card category={"kehamilan"} subcategory={"trisemester-3"} />
                )}
              </section>
            )}
          </section>
        </section>
        <section className="flex flex-col gap-10">
          <section className="flex flex-col gap-8">
            <SubArticleButton>Artikel Terbaru</SubArticleButton>
            <section className="flex flex-col gap-2">
              <section>yyyy</section>
            </section>
          </section>
          <section className="flex flex-col gap-8">
            <SubArticleButton>Video Terbaru</SubArticleButton>
            <section>yyyy</section>
          </section>
          <section>
            <SubArticleButton>Topik Lainnya</SubArticleButton>
          </section>
        </section>
      </section>
    </main>
  );
};

{
  /* 
// import { PrimaryButton, ShowMore, SubArticleButton } from "@/components/atoms";
// import Card from "./components/Card";
// import { tesvid } from "@/mock/tesvid";
// import Link from "next/link";
// import CardVideo from "./components/CardVideo";
// import { tes } from "@/mock/tes";
// import { Search } from "@/components/atoms/SearchButton";

// export const HomePregnant = () => {
//   return (
//     <main className="flex flex-col gap-10  px-6 py-28 md:px-28">
//       <section></section>

//       <section className="flex flex-col gap-10 md:flex-row ">
//         <section className="flex flex-col gap-10 md:w-[80%] ">
//           <section className="flex flex-col gap-8">
//             <SubArticleButton>Artikel Rekomendasi</SubArticleButton>
//             <section className="flex flex-col gap-8">
//               <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
//                 Trisemester 1
//               </p>
//               <Card tes={tes} />

//               <ShowMore>Lihat lebih banyak</ShowMore>
//             </section>
//           </section>

//           <section className="flex flex-col gap-8">
//             <SubArticleButton>Video Terkait</SubArticleButton>
//             <section className="flex flex-col gap-8">
//               <p className="w-fit rounded-md bg-primary-purple px-4 py-2 text-text-s text-white">
//                 Perkembangan Janin
//               </p>
//               <CardVideo tesvid={tesvid} />

//               <ShowMore>Lihat lebih banyak</ShowMore>
//             </section>
//           </section>

//           <section className="flex flex-col gap-10 ">
//             <SubArticleButton>Artikel Terkait</SubArticleButton>
//             <section className="flex flex-col gap-8">
//               <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
//                 Trisemester 1
//               </p>
//               <Card tes={tes} />

//               <ShowMore>Lihat lebih banyak</ShowMore>
//             </section>
//             <section className="flex flex-col gap-8">
//               <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
//                 Trisemester 2
//               </p>

//               <Card tes={tes} />

//               <ShowMore>Lihat lebih banyak</ShowMore>
//             </section>
//             <section className="flex flex-col gap-8">
//               <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
//                 Trisemester 3
//               </p>

//               <Card tes={tes} />

//               <ShowMore>Lihat lebih banyak</ShowMore>
//             </section>
//           </section>
//         </section>
//         <section className="flex ">
//           <SubArticleButton>Artikel Terbaru</SubArticleButton>
//         </section>
//       </section>
//     </main>
//   );
// }; */
}
