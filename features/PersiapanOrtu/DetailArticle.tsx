"use client";

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
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FiLink } from "react-icons/fi";

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
    queryFn: () => getArticleByPersiapan(subcategory, id),
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

  // const formattedUploadTime = formatUploadTime(article.createdAt);

  // Convert the Draft.js content to HTML
  // const contentState = convertFromRaw(article.content);
  // const contentHTML = stateToHTML(contentState);

  return (
    <main className="flex flex-col justify-center gap-16 border px-6 pt-32 md:flex-row md:px-28">
      <section className="flex flex-col gap-6 border lg:w-[60%] ">
        <h1 className="text-heading-l font-bold">{article.title}</h1>
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
              {/* <p>{formattedUploadTime}</p> */}
            </div>
          </section>
          <Image
            src={article.img}
            width={750}
            height={100}
            alt="cover"
            objectFit="cover"
            objectPosition="top"
          />

          {/* Render the HTML content */}
          <div
            className="text-text-m"
            // dangerouslySetInnerHTML={{ __html: contentHTML }}
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <Link href={""}>Baca Juga :</Link>
          <div className=" flex items-center  gap-2 ">
            Bagikan :
            <div className="flex gap-1">
              <Link href={""}>
                <Image
                  src={"/svg/wa.svg"}
                  height={20}
                  width={20}
                  alt="wa"
                  className="rounded-full"
                />
              </Link>
              <Link href={""}>
                <Image
                  src={"/svg/ig.svg"}
                  height={20}
                  width={20}
                  alt="wa"
                  className=""
                />
              </Link>
              <Link href={""}>
                <RiTwitterXFill className="h-5 w-5" />
              </Link>
              <Link href={""}>
                <FiLink className=" h-5 w-5" />
              </Link>
            </div>
          </div>
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
