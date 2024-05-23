import Image from "next/image";
import React from "react";
import { ILatestArticle } from "@/interface/latestArticle";
import { PrimaryButton } from "../atoms";

const LatestCard: React.FC<ILatestArticle> = ({ ItemArticle }) => {
  return (
    <section className="container relative flex h-[340px] w-[350px] flex-col rounded-xl px-6 py-6 shadow-xl md:flex-row">
      <Image
        src={ItemArticle.img}
        layout="fill"
        objectFit="cover"
        alt={""}
        className=" rounded-md brightness-75 "
      />
      <div className="relative z-10  flex h-full flex-col justify-between ">
        <PrimaryButton fullwidth={false}>{ItemArticle.title}</PrimaryButton>
        <div className=" flex ">
          <p className="absolute h-[90px] border-l border-primary-purple"></p>
          <div className=" flex flex-col gap-4  pl-5 text-white">
            <div className="text-text-s md:text-text-m">
              <p>{ItemArticle.title}</p>
              <p> {ItemArticle.desc}</p>
            </div>
            <div className="flex w-full text-text-s ">
              <p>{ItemArticle.name}</p>
              <p>lo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCard;
