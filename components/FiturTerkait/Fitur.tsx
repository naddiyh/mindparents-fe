import React from "react";
import Image from "next/image";
import { features, Feature } from "./FiturObject";

const Fitur = () => {
  return(
    <>
      <main className="px-8 md:px-6 lg:px-24">
        <section className="flex justify-center pt-5">
          <p className="text-heading-m text-primary-purple font-bold">Fitur</p>
          <p className="text-heading-m font-bold px-2">Terkait</p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-10">
          {features.map((feature: Feature, index: number) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row gap-3 items-center sm:items-start"
            >
              <div className="w-full h-auto sm:w-[70px] sm:h-[50px] flex-shrink-0">
                <Image 
                  src={feature.src}
                  width={100}
                  height={70}
                  className="rounded-xl w-full h-full object-contain object-center"
                  alt={feature.alt}
                />
              </div>
              <div>
                <div className="lg:text-text-m sm:text-text-s font-bold">{feature.title}</div>
                <div className="text-text-s">{feature.description}</div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};
export default Fitur;
