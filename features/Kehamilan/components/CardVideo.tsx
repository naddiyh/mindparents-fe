// import { IVideo } from "@/interface";
// import Link from "next/link";
// import Image from "next/image";
// import { DurationButton } from "@/components/atoms";
// import { getArticlesByCategoryAndSubcategory } from "@/service/artikel";
// import { useQuery } from "@tanstack/react-query";
// interface VideoProps {
//   category: string;
//   subcategory: string;
// }

// const CardVideo: React.FC<VideoProps> = ({ category, subcategory }) => {
//   const {
//     data: videos,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["artikel", category, subcategory],
//     queryFn: () => getArticlesByCategoryAndSubcategory(category, subcategory),
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (isError) {
//     return <div>Error Fetching Video</div>;
//   }

//   return (
//     <section className=" grid w-full grid-flow-row justify-between gap-2 md:grid-flow-col">
//       {videos.map((video: IVideo) => (
//         <div className=" relative flex justify-center transition-transform duration-300 ease-in-out hover:scale-[1.02]">
//           <Link
//             href={`/kehamilan /${video.id}`}
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

// export default CardVideo;
