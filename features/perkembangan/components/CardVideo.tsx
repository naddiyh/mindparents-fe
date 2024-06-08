// import { IVideo } from "@/interface";
// import { GetStaticProps } from "next";

// import Link from "next/link";
// import { DurationButton } from "@/components/atoms";
// import { useEffect, useState } from "react";

// interface Props {
//   category: string;
//   subcategory: string;
// }

// const CardVideo: React.FC<Props> = ({ category,subcategory}) => {
//   const [videos, setVideos] = useState<IVideo[]>([]);
//   const [showCount, setShowCount] = useState(3);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       const fetchedArticles = await getArticlesByCategoryAndSubcategory(
//         category,
//         subcategory,
//       );
//       setVideos(fetchedArticles);
//     };

//     fetchArticles();
//   }, [category, subcategory]);

//   const handleShowMore = () => {
//     setShowCount((prevCount) => prevCount + 3);
//   };

//   return (
//     <section className=" grid w-full grid-flow-row justify-between gap-2 md:grid-flow-col">
//       {videos.map((video) => (
//         <div className=" relative flex max-w-[300px] justify-center transition-transform duration-300 ease-in-out hover:scale-[1.02]">
//           <Link
//             href={`/perkembangan-anak/${video.id}`}
//             key={video.id}
//             className="relative flex flex-col  "
//           >
//             <div className="relative">
//               <iframe
//                 width="w-full"
//                 height="220"
//                 src={video.video}
//                 title={video.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 className="rounded-md border "
//               ></iframe>
//               <div className="absolute bottom-3 right-3">
//                 <DurationButton>{video.duration}</DurationButton>
//               </div>
//             </div>
//             <div className="flex flex-col gap-1">
//               <h2 className="text-text-m font-semibold hover:underline">
//                 {video.title}
//               </h2>
//               <p className="text-text-s">{video.desc}</p>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </section>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       tesvid,
//     },
//   };
// };

// export default CardVideo;
