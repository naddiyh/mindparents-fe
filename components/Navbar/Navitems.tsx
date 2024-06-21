import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/features/auth/useAuth";
import { navlink } from "@/constant/navLink";

const Navitems = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { user, handleLogOut } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  // Handle scrolling
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

  // Determine if a link is active based on pathname
  useEffect(() => {
    const currentPath = window.location.pathname;
    const index = navlink.findIndex((item) => item.href === currentPath);
    setActiveIndex(index !== -1 ? index : null);
  }, []);

  return (
    <section className="z-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-center">
      {navlink.map((item, index) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <Link href={item.href}>
            <p
              className={`flex gap-2 pb-1 text-text-s ${
                isScroll ? "hover:text-white" : "md:hover:text-primary-purple"
              } `}
            >
              {item.title}
            </p>
          </Link>

          {/* Underlined Animation */}
          <div
            className={`transform rounded-md border-b transition-all duration-200 ease-in ${
              isScroll ? "border-white" : "border-primary-purple"
            }`}
            style={{
              width: index === activeIndex ? "100%" : "0%",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          ></div>
        </div>
      ))}

      {isLoggedIn && (
        <button
          onClick={handleLogOut}
          className={`w-fit rounded-md border px-4 py-1 text-text-s ${
            isScroll ? "border-white" : "lg:border-primary-purple"
          }`}
        >
          Keluar
        </button>
      )}
    </section>
  );
};

export default Navitems;
