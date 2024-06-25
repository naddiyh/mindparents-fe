"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "light" ? (
          <MdLightMode
            className={`h-7 w-7 ${scrolled ? "text-white" : "text-primary-purple"}`}
          />
        ) : (
          <MdDarkMode
            className={`h-7 w-7 ${scrolled ? "text-white" : "text-primary-purple"}`}
          />
        )}
      </button>
    </div>
  );
}
