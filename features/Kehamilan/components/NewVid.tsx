"use client";

import Link from "next/link";
import { IVideo } from "@/interface";
import { fetchLatestVideos } from "@/service/artikel"; // Pastikan jalur impor benar
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export const NewVidPage: React.FC = () => {
  const params = useParams();
  const { subcategory } = params as { subcategory: string };

  const [videos, setVideos] = useState<IVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const fetchVideos = async () => {
      try {
        const fetchedVideos = await fetchLatestVideos("kehamilan");
        setVideos(fetchedVideos);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [subcategory]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading videos</div>;

  return (
    <div className="flex flex-col gap-6 ">
      {videos.slice(0, 3).map((video: IVideo) => (
        <Link
          key={video.id}
          href={`/kehamilan/video/${video.id}`}
          className="flex gap-4"
        >
          <iframe
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-md "
            allowFullScreen
            src={video.videoUrl}
            width={140}
            height={100}
          />
          <div className="flex flex-col justify-between">
            <p className="text-text-s font-semibold hover:text-primary-purple hover:underline ">
              {video.title}
            </p>
            <span className="pb-3 text-[12px]"> 20 Juni</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewVidPage;
