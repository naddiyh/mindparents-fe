import React from "react";
import Image from "next/image";
import { features, Feature } from "./FiturObject";

const Fitur = () => {
  return (
    <>
      <main className="flex flex-col px-6 py-10 lg:px-28">
        <section className="flex items-center justify-center pt-5 ">
          <p className="text-heading-s font-bold lg:text-heading-m">
            Fitur Terkait
          </p>
        </section>
        <section className="grid grid-cols-2  gap-4 pt-10">
          {features.map((feature: Feature) => (
            <div
              className="flex flex-col gap-4 rounded-md bg-[#F6F0FF] p-3 text-black md:flex-row"
              key={""}
            >
              <Image
                src={feature.src}
                width={100}
                height={100}
                className="rounded-xl "
                objectFit="cover"
                alt={feature.alt}
              />

              <div className="flex flex-col">
                <div className="text-text-s font-bold lg:text-text-m">
                  {feature.title}
                </div>
                <div className="  text-text-s">{feature.description}</div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};
export default Fitur;
