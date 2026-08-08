import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6F5544",
          light: "#B79A7E",
          dark: "#4A382C",
        },
        footer: "#1A1613",
        ivory: "#FAF8F6",
        text: {
          DEFAULT: "#2B2B2B",
          muted: "#8A8A8A",
        },
        border: "#E5E5E5",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        serif: ["var(--font-noto-serif-jp)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
