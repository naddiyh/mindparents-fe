// import {
//   navlink,
//   persiapanortu,
//   kehamilan,
//   perkembangan,
// } from "@/constant/navLink";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/useAuth";
import Cookies from "js-cookie";
import { navlink } from "@/constant/navLink";

const Navitems = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const pathname = usePathname();
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

  const handleToggleDropdown = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  // const getSublinks = (index: number) => {
  //   if (index === 1) return persiapanortu;
  //   if (index === 2) return kehamilan;
  //   if (index === 3) return perkembangan;
  //   return [];
  // };

  useEffect(() => {
    console.log("User changed:", user);
  }, [user]);

  return (
    <section className="z-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-center">
      {navlink.map((item, index) => (
        <div
          key={item.href}
          onMouseEnter={() => {
            if ([0, 1, 2, 3, 4, 5].includes(index)) {
              setIsUnderlined(index);
            }
          }}
          onMouseLeave={() => {
            setHoverIndex(null);
            if ([0, 4, 5].includes(index)) {
              setIsUnderlined(null);
            }
          }}
          className="relative"
        >
          <Link href={item.href}>
            <p
              className={`flex gap-2 pb-1 text-text-s ${
                isScroll ? "hover:text-white" : "md:hover:text-primary-purple"
              }`}
              // onClick={() => handleToggleDropdown(index)}
            >
              {item.title}
              {/* <span>
                {item.icon &&
                  React.createElement(item.icon, {
                    className: "inline-flex",
                    style: {
                      transform: isOpen === index ? "rotate(180deg)" : "",
                    },
                  })}
              </span> */}
            </p>
          </Link>

          {/* Mobile Dropdown Menu */}
          {/* {isOpen === index && (
            <div className="w-full rounded-md pt-2 text-text-s lg:hidden">
              {getSublinks(index).map((subitem) => (
                <Link key={subitem.href} href={subitem.href}>
                  <div className="p-3 text-white hover:bg-purple-500">
                    {subitem.title}
                  </div>
                </Link>
              ))}
            </div>
          )} */}

          {/* Underlined Animation */}
          {[0, 1, 2, 3, 4, 5].includes(index) && (
            <div
              className={`transform rounded-md border-b transition-all duration-200 ease-in ${
                isScroll ? "border-white" : "border-primary-purple"
              }`}
              style={{
                width: isUnderlined === index ? "100%" : "0",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            ></div>
          )}

          {/* Dropdown Menu */}
          {/* {hoverIndex === index && (
            <div
              className={`absolute left-0 top-full hidden w-[200px] justify-center rounded-xl bg-white text-text-s shadow-2xl lg:flex lg:flex-col ${
                isScroll ? "md:bg-primary-purple" : ""
              }`}
            >
              {getSublinks(index).map((subitem) => (
                <Link key={subitem.href} href={subitem.href}>
                  <div
                    className={`rounded-xl px-4 py-2 text-black hover:bg-gray-100 ${
                      isScroll ? "text-white md:hover:bg-purple-600" : ""
                    }`}
                  >
                    {subitem.title}
                  </div>
                </Link>
              ))}
            </div>
          )} */}
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
