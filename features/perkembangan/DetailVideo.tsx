"use client";
import {
  LikeDislike,
  PrimaryButton,
  SubArticleButton,
} from "@/components/atoms";
import { getVideoByPerkembangan } from "@/service/artikel";
import { useQuery } from "@tanstack/react-query";
import NewVidPage from "./components/NewVid";
import { IVideo } from "@/interface";
import { FirebaseError } from "firebase/app";
import { useParams } from "next/navigation";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import Image from "next/image";

const DetailVideoPage: React.FC = () => {
  const { id } = useParams();

  const {
    data: video,
    isLoading: isLoadingVideo,
    isError: isErrorVideo,
    error,
  } = useQuery<IVideo, FirebaseError>({
    queryKey: ["articles", "video", id],
    queryFn: () => getVideoByPerkembangan(id as string),
  });

  if (isLoadingVideo) return <div>Loading...</div>;
  if (isErrorVideo) return <div>Error loading video</div>;

  return (
    <>
      <main className="flex flex-col gap-10  px-6 py-32  md:flex-row md:px-28">
        <section className="flex flex-col gap-6 md:w-3/4">
          <div className="flex flex-col gap-6">
            <iframe
              src={video?.videoUrl}
              title={video?.title}
              allowFullScreen
              width="100%"
              height={470}
              className="rounded-md"
            />
            <div className="flex flex-col gap-4 text-text-s">
              <h2 className="text-text-l font-bold md:text-heading-s">
                {video?.title}
              </h2>

              <div className="flex  w-full justify-between">
                <div className="flex gap-2">
                  {video?.img && (
                    <Image
                      src={video.img}
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="rounded-full"
                      alt={video?.name || "Video thumbnail"}
                    />
                  )}
                  {video?.name}
                  diupload
                </div>
                <LikeDislike />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-md bg-gray-50 px-6 py-4 text-black">
            <p className="font-semibold">Deskripsi</p>
            <p className="text-text-s">{video?.desc}</p>
          </div>
        </section>
        <section className="flex flex-col gap-10">
          <section className="flex flex-col gap-6">
            <SubArticleButton>Video Terkait</SubArticleButton>
            <section className="flex flex-col gap-2">
              <NewVidPage />
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default DetailVideoPage;
