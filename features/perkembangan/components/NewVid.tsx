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
        const fetchedVideos = await fetchLatestVideos("perkembangan-anak");
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
    <div className="flex flex-col gap-6">
      {videos.slice(0, 4).map((video: IVideo) => (
        <Link
          key={video.id}
          href={`/perkembangan-anak/video/${video.id}`}
          className="flex gap-4"
        >
          <iframe
            src={video.video}
            width={160}
            height={120}
            className="rounded-md"
          />
          <p className="text-text-s font-semibold hover:underline md:text-text-m">
            {video.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NewVidPage;