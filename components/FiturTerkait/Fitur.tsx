import React from "react";
import Image from "next/image";
import { features, Feature } from "./FiturObject";

const Fitur = () => {
  return (
    <>
      <main className="flex flex-col border px-28 py-10">
        <section className="flex justify-center pt-5">
          <p className="text-heading-s font-bold text-black lg:text-heading-m">
            Fitur Terkait
          </p>
        </section>
        <section className="grid grid-cols-2 gap-4 border pt-10">
          {features.map((feature: Feature) => (
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Image
                src={feature.src}
                width={120}
                height={120}
                className="rounded-xl "
                objectFit="cover"
                alt={feature.alt}
              />

              <div className="flex flex-col">
                <div className="text-text-s font-bold lg:text-text-m">
                  {feature.title}
                </div>
                <div className=" w-1/2 text-text-s">{feature.description}</div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};
export default Fitur;
