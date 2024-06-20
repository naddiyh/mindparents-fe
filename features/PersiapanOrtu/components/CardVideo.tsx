import { IVideo } from "@/interface";
import { getVideosByCategoryAndSubcategory } from "@/service/artikel";
import Link from "next/link";
import { DurationButton, ShowMore } from "@/components/atoms";
import { useQuery } from "@tanstack/react-query";

interface Props {
  category: string;
  subcategory: string;
  showCount: number;
}

export const CardVideo: React.FC<Props> = ({
  category,
  subcategory,
  showCount,
}) => {
  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["articles", category, subcategory],
    queryFn: () => getVideosByCategoryAndSubcategory(category, subcategory),
  });

  const truncateTextByWords = (text: string, maxWords: number) => {
    const words = (text ?? "").split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  return (
    <section className=" grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, showCount).map((video: IVideo) => (
        <div className=" relative flex max-w-[450px] justify-center  transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          <Link
            href={`/persiapan-ortu/video/${video.id}`}
            key={video.id}
            className="relative flex flex-col gap-3"
          >
            <div className="relative">
              <iframe
                width="100%"
                height="220"
                src={video.videoUrl}
                title={video.title}
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="rounded-md  "
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-3 right-3">
                <DurationButton>{video.duration}</DurationButton>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-text-m font-semibold hover:text-primary-purple hover:underline">
                {video.title}
              </h2>
              <p className="text-text-s">
                {truncateTextByWords(video.desc, 13)}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CardVideo;
