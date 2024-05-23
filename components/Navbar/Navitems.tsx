import { navlink } from "@/constant/navLink";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const Navitems = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScroll(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useState(() => {});

  return (
    <>
      <section className="flex flex-col gap-8 lg:flex-row">
        {navlink.map((item, index) => (
          <Link key={item.href} href={item.href}>
            <div
              onMouseEnter={() => {
                if ([0, 4, 5].includes(index)) {
                  setIsUnderlined(index);
                }
              }}
              onMouseLeave={() => {
                setIsUnderlined(null);
              }}
              className="relative "
            >
              <p
                className={`flex gap-2 pb-1 text-text-s ${isScroll ? "hover: text-white" : "hover:text-primary-purple"} `}
              >
                {item.title}
                <span>
                  {item.icon &&
                    React.createElement(item.icon, {
                      className: "inline-flex",
                    })}
                </span>
              </p>

              {/* Give Underlined Animation */}
              <div
                className={`transform rounded-md border-b transition-all duration-200 ease-in ${isScroll ? "border-white" : "border-primary-purple"}`}
                style={{
                  width: isUnderlined === index ? "100%" : "0",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                }}
              ></div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Navitems;
