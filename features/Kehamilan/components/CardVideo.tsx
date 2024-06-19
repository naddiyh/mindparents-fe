import { IArtikel, IVideo } from "@/interface";
import { getVideosByCategoryAndSubcategory } from "@/service/artikel";
import Link from "next/link";
import { DurationButton, ShowMore } from "@/components/atoms";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Props {
  category: string;
  subcategory: string;
  showCount: number;
}

export const CardVideo: React.FC<Props> = ({ category, subcategory }) => {
  const [showCount, setShowCount] = useState(3);
  const handleShowMore = () => {
    setShowCount((prevCount) => prevCount + 3);
  };

  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["articles", category, subcategory],
    queryFn: () => getVideosByCategoryAndSubcategory(category, subcategory),
  });

  return (
    <section className=" grid w-full grid-flow-row justify-between gap-2 md:grid-flow-col">
      {articles.slice(0, showCount).map((video: IVideo) => (
        <div className=" relative flex max-w-[300px] justify-center transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          <Link
            href={`/kehamilan/video/${video.id}`}
            key={video.id}
            className="relative flex flex-col  "
          >
            <div className="relative">
              <iframe
                width="w-full"
                height="220"
                src={video.video}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="rounded-md border "
              ></iframe>
              <div className="absolute bottom-3 right-3">
                <DurationButton>{video.duration}</DurationButton>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-text-m font-semibold hover:underline">
                {video.title}
              </h2>
              <p className="text-text-s">{video.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CardVideo;
