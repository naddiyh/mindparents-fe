import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#7631CC",
          "purple-hover": "#9E59F5",
        },

        secondary: {
          softpurple: "#E9DEF7",
          black: "#00000",
        },
      },
      boxShadow: {
        right: "14px 4px 20px -7px rgba(0,0,0,0.6)",
      },
      fontSize: {
        "text-xs": [
          "12px",
          {
            lineHeight: "18px",
          },
        ],
        "text-s": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "text-m": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "text-l": [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        "heading-s": [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        "heading-m": [
          "32px",
          {
            lineHeight: "40px",
          },
        ],
        "heading-l": [
          "40px",
          {
            lineHeight: "48px",
          },
        ],
      },
    },
  },
  darkMode: "class",

  plugins: [nextui()],
};
