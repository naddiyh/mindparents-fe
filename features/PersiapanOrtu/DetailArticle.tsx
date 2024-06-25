"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getArticleByPersiapan } from "@/service/artikel";
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
import NewVidPage from "./components/NewVid";
import { ThreeDots } from "react-loader-spinner";
import { useLoading } from "@/context/Loading";

const DetailArticle: React.FC = () => {
  const { isLoading: contextLoading } = useLoading();
  const params = useParams();
  const { subcategory, id } = params as { subcategory: string; id: string };

  const formatUploadTime = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleString();
  };

  const {
    data: article,
    isLoading,
    isError: isErrorArticle,
    error,
  } = useQuery<IArtikel, FirebaseError>({
    queryKey: ["articles", subcategory, id],
    queryFn: () => getArticleByPersiapan(subcategory, id),
  });

  if (isLoading || contextLoading) {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black">
        <ThreeDots
          visible={true}
          height="100"
          width="100"
          color="#7631CC"
          radius="10"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (isErrorArticle || !article) {
    console.log(error);
    return (
      <div className="pt-36">Error: {error?.message || "Unknown error"}</div>
    );
  }

  const formattedUploadTime = formatUploadTime(article.createdAt);

  // Convert the Draft.js content to HTML
  let contentHTML = "";
  if (article.content) {
    const contentState = convertFromRaw(article.content);
    contentHTML = stateToHTML(contentState);
  }

  return (
    <main className="flex flex-col gap-8 px-6 py-10 pt-32 md:flex-row lg:px-36">
      <section className="flex flex-col gap-4 lg:w-[70%] ">
        <h1 className="text-heading-m font-bold">{article.title}</h1>
        <div className="flex flex-col gap-4">
          <section className="flex gap-2">
            <Image
              src={article.imageUrl}
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
            src={article.imageUrl}
            width={800}
            height={100}
            alt={article.creatorName}
            objectFit="cover"
            className="rounded-sm"
          />

          <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
        </div>
        <div className="flex justify-between">
          <Link href={""}>Baca Juga : </Link>
          <Link href={""}>Bagikan :</Link>
        </div>
        <div>
          <p className="font-medium">Refrensi :</p>
          <p>{article.references}</p>
        </div>
        <div className="flex flex-col gap-4">
          <PrimaryButton fullwidth={false}>Tinggalkan Komentar</PrimaryButton>
          <p>Komentar Button</p>
        </div>
      </section>
      <section className="flex flex-col gap-10 lg:w-[30%]">
        <section className="flex flex-col gap-6">
          <SubArticleButton>Artikel Terbaru</SubArticleButton>
          <section className="flex flex-col gap-2">
            <NewCardPage />
          </section>
        </section>
        <section className="flex flex-col gap-6">
          <SubArticleButton>Video Terbaru</SubArticleButton>
          <section className="flex flex-col gap-2">
            <NewVidPage />
          </section>
        </section>
      </section>
    </main>
  );
};

export default DetailArticle;
