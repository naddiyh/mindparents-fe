import Image from "next/image";
import React from "react";
import { IRecomendArticle } from "@/interface/recomendArticle";
import Link from "next/link";

const RecomendCard: React.FC<IRecomendArticle> = ({ ItemArticle }) => {
  return (
    <section className="flex flex-col gap-4 rounded-xl lg:flex-row">
      <Image
        src={ItemArticle.img}
        width={620}
        height={425}
        alt={""}
        objectFit="cover"
        objectPosition="top"
        className="rounded-md hover:brightness-75 lg:h-[150px] lg:w-[230px] "
      />

      <div className="z-10 ">
        <Link href={`/pregnant/${ItemArticle.id}`} className="">
          <p className="font-bold hover:underline">{ItemArticle.title}</p>

          <p className="text-text-s md:text-text-m"> {ItemArticle.desc}</p>
        </Link>
      </div>
    </section>
  );
};

export default RecomendCard;
