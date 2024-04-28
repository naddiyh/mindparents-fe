import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontSize: {
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
  plugins: [],
};
export default config;
