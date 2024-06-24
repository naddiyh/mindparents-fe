// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { getArticlesByCategoryAndSubcategory } from "@/service/artikel"; // Adjust import path as needed
// import { IArtikel } from "@/interface/IArtikel";
// import { RecomendCard } from "@/components/Card/RecomendCard";
// import { SubArticleButton } from "@/components/atoms";

// export const CarauRecomend = () => {
//   const [articles, setArticles] = useState<IArtikel[]>([]); // State to hold fetched articles
//   const selectedTopic = localStorage.getItem("selectedTopic");

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         if (selectedTopic) {
//           // Fetch articles based on selected topic
//           const fetchedArticles = await getArticlesByCategoryAndSubcategory(
//             "articles", // Adjust category as per your data structure
//             selectedTopic,
//           );
//           setArticles(fetchedArticles); // Update state with fetched articles
//         }
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       }
//     };

//     fetchArticles(); // Fetch articles when component mounts or when selectedTopic changes
//   }, [selectedTopic]); // Dependency array ensures effect runs when selectedTopic changes

//   return (
//     <main className="flex flex-col gap-6 px-6 pb-28 md:px-28">
//       <SubArticleButton>Artikel Rekomendasi</SubArticleButton>
//       <section className="flex w-full flex-1 flex-col gap-10 md:justify-between md:gap-6 lg:flex-row">
//         {/* Main Article Section */}
//         {articles.length > 0 && (
//           <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
//             <div className="relative h-80 lg:h-[425px]">
//               <Image
//                 src={articles[0].imageUrl} // Assuming the first article is the main article
//                 layout="fill"
//                 objectFit="cover"
//                 objectPosition="top"
//                 alt="Main Article Image"
//                 className="rounded-md hover:brightness-50"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <Link
//                 href={`/${articles[0].category}/${articles[0].subcategory}/${articles[0].id}`}
//                 className="text-text-m font-bold hover:underline md:text-lg"
//               >
//                 {articles[0].title} {/* Display title of main article */}
//               </Link>
//               <p className="text-text-s">
//                 {articles[0].desc} {/* Display description of main article */}
//               </p>
//             </div>
//           </section>
//         )}

//         {/* Recommended Articles Section */}
//         <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {articles.slice(1).map((article) => (
//             <RecomendCard key={article.id} article={article} />
//           ))}
//         </section>
//       </section>
//     </main>
//   );
// };

// export default CarauRecomend;
