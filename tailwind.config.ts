import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "secondary-background": "var(--secondary-background)",
        light: "#B9B9B9",
        yellow: "#FFF063",
        "input-default": "#466765",
        green: "#1A2927",
        dark: "#1a1a1a",
        inactive: "#7D7D7D",
        "yellow-darker": "#FFCA0A",
      },
      fontFamily: {
        base: "var(--font-gilroy)",
        apple: "SF Pro Display, var(--font-sf), var(--font-gilroy)",
        title: "var(--font-cormorant)",
        secondary: "var(--font-cera)",
      },
      backgroundSize: {
        fill: "100% 100%",
      },
      spacing: {
        "12.5": "3.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
      },
      fontSize: {
        "h4-clamp": ["clamp(1.125rem, 5vw, 1.5rem)", { lineHeight: "1.2" }],
        "h3-clamp": ["clamp(1.25rem, 7vw, 2.25rem)", { lineHeight: "1.2" }],
        "h2-clamp": ["clamp(1.5rem, 6.4vw, 2.625rem)", { lineHeight: "1.2" }],
        "h1-clamp": ["clamp(1.75rem, 7vw, 3rem)", { lineHeight: "1.2" }],
        "h1-mon": ["clamp(2rem, 6.4vw, 3.5rem)", { lineHeight: "1.2" }],
        "h2-mon": ["clamp(1.75rem, 7.5vw, 2.25rem)", { lineHeight: "1.2" }],
        "desc-mon": ["clamp(1.125rem, 4.8vw, 1.5rem)", { lineHeight: "1.2" }],
      },
      borderRadius: {
        "5xl": "3.75rem",
        "4xl": "3rem",
      },
      keyframes: {
        chevron1: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "25%": { opacity: "1" },
          "50%": { transform: "translateY(0px)", opacity: "1" },
          "75%": { opacity: "1" },
          "100%": { transform: "translateY(30px)", opacity: "0" },
        },
        chevron2: {
          "0%": { transform: "translateY(0px)", opacity: "0" },
          "25%": { opacity: "0" },
          "50%": { transform: "translateY(30px)", opacity: "1" },
          "75%": { opacity: "0.5" },
          "100%": { transform: "translateY(60px)", opacity: "0" },
        },
      },
      animation: {
        chevron1: "chevron1 2.4s ease-in-out infinite",
        chevron2: "chevron2 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
