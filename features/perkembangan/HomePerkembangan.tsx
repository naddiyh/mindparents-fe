"use client";
import { useState } from "react";
import Card from "./components/Card";
import { Search, SubArticleButton } from "@/components/atoms";
import { IArtikel } from "@/interface";
import { useQuery } from "@tanstack/react-query"; // Import useQuery
import { getArticlesByCategoryAndSubcategory } from "@/service/artikel";

export const HomePerkembangan = () => {
  const [filterText, setFilterText] = useState("");

  // Use useQuery to fetch articles for each trimester
  const { data: articlesT1, isLoading: loadingT1 } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "0-2tahun"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "0-2tahun"),
  });

  const { data: articlesT2, isLoading: loadingT2 } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "2-6tahun"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "2-6tahun"),
  });

  const { data: articlesT3, isLoading: loadingT3 } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "6-12tahun"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "6-12tahun"),
  });
  const { data: articlesT4, isLoading: loadingT4 } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "12-18tahun"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "12-18tahun"),
  });
  const { data: articlesT5, isLoading: loadingT5 } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "golden-age"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "golden-age"),
  });

  // Handle loading states
  if (loadingT1 || loadingT2 || loadingT3 || loadingT4 || loadingT5) {
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
                  0-2 Tahun
                </p>
                {articlesT1.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <Card
                    category={"perkembangan-anak"}
                    subcategory={"0-2tahun"}
                  />
                )}
              </section>
            )}
            {/* Trimester 2 */}
            {articlesT2 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  2-6 Tahun
                </p>
                {articlesT2.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <Card
                    category={"perkembangan-anak"}
                    subcategory={"2-6tahun"}
                  />
                )}
              </section>
            )}
            {/* Trimester 3 */}
            {articlesT3 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  6-12 Tahun
                </p>
                {articlesT3.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <Card
                    category={"perkembangan-anak"}
                    subcategory={"6-12tahun"}
                  />
                )}
              </section>
            )}
            {articlesT4 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  12-18 Tahun
                </p>
                {articlesT4.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <Card
                    category={"perkembangan-anak"}
                    subcategory={"12-18tahun"}
                  />
                )}
              </section>
            )}
            {articlesT5 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  Golden Age
                </p>
                {articlesT5.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <Card
                    category={"perkembangan-anak"}
                    subcategory={"golden-age"}
                  />
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

// "use client";
// import React, { useState, useEffect } from "react";
// import { ShowMore, SubArticleButton } from "@/components/atoms";
// import { Card } from "@/components/Card"
// import { Search } from "@/components/atoms/SearchButton";
// import { db } from "@/config/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { IArtikel } from "@/interface";

// const HomePerkembangan = () => {
//   const [articles, setArticles] = useState<IArtikel[]>([]);
//   const [filterText, setFilterText] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [defaultArticlesLoaded, setDefaultArticlesLoaded] = useState(false);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const articlesCollection = collection(db, "perkembangan-anak");
//         const articlesSnapshot = await getDocs(articlesCollection);
//         const articlesList = articlesSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         })) as IArtikel[];
//         setArticles(articlesList);
//         setDefaultArticlesLoaded(true);
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   const filteredArticles = articles.filter((article) =>
//     article.title?.toLowerCase().includes(filterText.toLowerCase()),
//   );
//   const [showAll, setShowAll] = useState(false);
//   const handleShowAll = () => {
//     setShowAll(true);
//   };

//   return (
//     <main className="flex flex-col gap-10 px-6 py-28 md:px-28">
//       <section>
//         <Search filterText={filterText} onFilterTextChange={setFilterText} />
//       </section>
//       <section className="flex flex-col gap-10 md:flex-row">
//         <section className="flex flex-col gap-10 md:w-[80%]">
//           {loading && <p>Loading...</p>}
//           {!loading && filteredArticles.length === 0 && filterText !== "" && (
//             <p className="italic">Maaf, artikel tidak ditemukan!</p>
//           )}
//           {(!loading || defaultArticlesLoaded) && (
//             <>
//               <SubArticleButton>Artikel Rekomendasi</SubArticleButton>
//               <section className="flex flex-col gap-8">
//                 {articles.length === 0 && (
//                   <p className="italic">Maaf, artikel belum ada!</p>
//                 )}
//                 <Card
//                   articles={
//                     filteredArticles.length > 0 ? filteredArticles : articles
//                   }
//                   category={"perkembangan-anak"}
//                   subcategory={"subcategory"}
//                 />
//                 {filteredArticles.length > 3 && (
//                   <ShowMore>Lihat lebih banyak</ShowMore>
//                 )}
//               </section>
//               <SubArticleButton>Artikel Terkait</SubArticleButton>
//               <section className="flex flex-col gap-8">
//                 {[
//                   { subcategory: "0-2tahun", label: "0-2 Tahun" },
//                   { subcategory: "2-6tahun", label: "2-6 Tahun" },
//                   { subcategory: "6-12tahun", label: "6-12 Tahun" },
//                   { subcategory: "12-18tahun", label: "12-18 Tahun" },
//                   { subcategory: "golden-age", label: "Golden Age" },
//                 ]
//                   .slice(0, showAll ? 5 : 5)
//                   .map((category) => {
//                     const filteredCategoryArticles = filteredArticles.filter(
//                       (article) => article.subcategory === category.subcategory,
//                     );

//                     return (
//                       <section
//                         key={category.subcategory}
//                         className="flex flex-col gap-8"
//                       >
//                         <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
//                           {category.label}
//                         </p>
//                         {filteredCategoryArticles.length === 0 && (
//                           <p className="italic">Maaf, artikel belum ada!</p>
//                         )}
//                         <Card
//                           articles={filteredCategoryArticles}
//                           category={"perkembangan-anak"}
//                           subcategory={category.subcategory}
//                         />
//                         {filteredCategoryArticles.length > 3 && (
//                           <ShowMore onClick={handleShowAll}>
//                             Lihat lebih banyak
//                           </ShowMore>
//                         )}
//                       </section>
//                     );
//                   })}
//               </section>
//             </>
//           )}
//         </section>
//       </section>
//     </main>
//   );
// };

// export default HomePerkembangan;
