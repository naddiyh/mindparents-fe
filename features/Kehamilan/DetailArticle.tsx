"use client";

import { useQuery } from "@tanstack/react-query";
import { getArticleByKehamilan } from "@/service/artikel";
import Image from "next/image";
import { IArtikel } from "@/interface";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PrimaryButton, SubArticleButton } from "../../components/atoms";
import { FirebaseError } from "firebase/app";
import { Timestamp } from "firebase/firestore";
import { NewCardPage } from "./components/NewCard";
import { convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const DetailArticle: React.FC = () => {
  const params = useParams();
  const { subcategory, id } = params as { subcategory: string; id: string };

  const formatUploadTime = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleString();
  };

  const {
    data: article,
    isLoading: isLoadingArticle,
    isError: isErrorArticle,
    error,
  } = useQuery<IArtikel, FirebaseError>({
    queryKey: ["articles", subcategory, id],
    queryFn: () => getArticleByKehamilan(subcategory, id),
  });

  if (isLoadingArticle) {
    return <div>Loading...</div>;
  }

  if (isErrorArticle || !article) {
    console.log(error);
    return (
      <div className="pt-36">Error: {error?.message || "Unknown error"}</div>
    );
  }

  const formattedUploadTime = formatUploadTime(article.createdAt);

  // Convert the Draft.js content to HTML
  const contentState = convertFromRaw(article.content);
  const contentHTML = stateToHTML(contentState);

  return (
    <main className="flex justify-between border px-28 pt-32">
      <section className="flex w-3/4 flex-col gap-4">
        <h1 className="text-heading-m font-bold">{article.title}</h1>
        <div className="flex flex-col gap-4">
          <section className="flex gap-2">
            <Image
              src={article.img}
              width={50}
              height={50}
              className="rounded-full"
              alt="author"
            />
            <div className="flex flex-col gap-2 text-text-s">
              <p>{article.creatorName}</p>
              <p>{formattedUploadTime}</p>
            </div>
          </section>
          <Image
            src={article.img}
            width={700}
            height={100}
            alt="cover"
            objectFit="cover"
          />
          {/* Render the HTML content */}
          <div className="" dangerouslySetInnerHTML={{ __html: contentHTML }} />
        </div>
        <div className="flex justify-between">
          <Link href={""}>Baca Juga : </Link>
          <Link href={""}>Bagikan :</Link>
        </div>
        <div className="flex flex-col gap-4">
          <PrimaryButton fullwidth={false}>Tinggalkan Komentar</PrimaryButton>
          <p>Komentar Button</p>
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <section className="flex flex-col gap-6">
          <SubArticleButton>Artikel Terbaru</SubArticleButton>
          <section className="flex flex-col gap-2">
            <NewCardPage />
          </section>
        </section>
        <section className="flex flex-col gap-6">
          <SubArticleButton>Video Terbaru</SubArticleButton>
          <section className="flex flex-col  gap-2"></section>
        </section>
        <section className="flex flex-col gap-6">
          <SubArticleButton>Topik Lainnya</SubArticleButton>
        </section>
      </section>
    </main>
  );
};

export default DetailArticle;