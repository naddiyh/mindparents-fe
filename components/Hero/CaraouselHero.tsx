"useClient";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ItemCaraousel } from "./ItemCaraousel";

const Caraousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Caraousel = ItemCaraousel();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ItemCaraousel().length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex w-full flex-col items-center gap-6">
        <div className=" duration-500">
          <Image
            src={ItemCaraousel()[currentIndex].image}
            alt={ItemCaraousel()[currentIndex].image}
            width={500}
            height={500}
            objectFit="cover"
            objectPosition="top"
            className="transform rounded-md transition-transform duration-500 ease-in-out "
          />
        </div>

        <div className="flex gap-3">
          {ItemCaraousel().map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full border border-primary-purple duration-500"
              style={{
                backgroundColor:
                  index === currentIndex ? "purple" : "transparent",
                transform: index === currentIndex ? "scale(1.3)" : "none",
              }}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Caraousel;
