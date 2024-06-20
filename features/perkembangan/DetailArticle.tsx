"use client";

import { useQuery } from "@tanstack/react-query";
import { getArticleByPerkembangan } from "@/service/artikel";
import { useMemo } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { IArtikel } from "@/interface";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PrimaryButton, SubArticleButton } from "../../components/atoms";
import { FirebaseError } from "firebase/app";
import { formatUploadTime } from "@/utils/time";
import NewCardPage from "./components/NewCard";
import NewVidPage from "./components/NewVid";

const DetailArticle: React.FC = () => {
  const params = useParams();
  const { subcategory, id } = params as { subcategory: string; id: string };

  // const convertTime = (timestamp: Timestamp): string => {
  //   const date = timestamp.toDate();
  //   return date.toLocaleString();
  // };

  //   const formatUploadTime = (timestamp: Timestamp) => {
  //     const date = timestamp.toDate();
  //     return date.toLocaleString();
  //   };

  const {
    data: article,
    isLoading: isLoadingArticle,
    isError: isErrorArticle,
    error,
  } = useQuery<IArtikel, FirebaseError>({
    queryKey: ["articles", subcategory, id],
    queryFn: () => getArticleByPerkembangan(subcategory, id),
  });

  if (isLoadingArticle) {
    return <div>Loading...</div>;
  }

  if (isErrorArticle || !article) {
    console.log(error); // Log actual error message
    return (
      <div className="pt-36">Error: {error?.message || "Unknown error"}</div>
    );
  }
  // const formattedUploadTime = formatUploadTime(article.createdAt);

  return (
    <main className="flex justify-between px-28 pt-32">
      <section className="flex w-3/4 flex-col gap-4">
        <h1 className="text-heading-l font-bold">{article.title}</h1>
        <div className="flex flex-col gap-4">
          <section className="flex gap-2">
            <Image
              src={article.imageUrl}
              width={50}
              height={50}
              className="rounded-full"
              alt={article.creatorName}
            />
            <div className="flex flex-col gap-2 text-text-s">
              <p>{article.creatorName}</p>
              {/* <p>{formattedUploadTime}</p> */}
            </div>
          </section>
          <Image
            src={article.imageUrl}
            width={750}
            height={100}
            alt="cover"
            objectFit="cover"
            objectPosition="top"
          />
          <p className="text-text-s"></p>
        </div>
        <div className="flex justify-between">
          <Link href={`articles/`}>Baca Juga : </Link>
          <Link href={""}>Bagikan :</Link>
        </div>
        <div className="flex flex-col gap-4">
          <PrimaryButton fullwidth={false}>Tinggalkan Komentar</PrimaryButton>
          <p>Komentar Button</p>
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <section className="flex flex-col gap-8">
          <SubArticleButton>Artikel Terbaru</SubArticleButton>
          <section className="flex flex-col gap-2">
            <NewCardPage />
          </section>
        </section>
        <section className="flex flex-col gap-8">
          <SubArticleButton>Video Terbaru</SubArticleButton>
          <section>
            <NewVidPage />
          </section>
        </section>
        <section>
          <SubArticleButton>Topik Lainnya</SubArticleButton>
        </section>
        <Link href={"/"}>Medsos</Link>
      </section>
    </main>
  );
};

export default DetailArticle;
