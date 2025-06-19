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
        "15": "3.75rem",
      },
      fontSize: {
        "h4-clamp": ["clamp(1.125rem, 5vw, 1.375rem)", { lineHeight: "1.15" }],
        "h3-clamp": ["clamp(1.25rem, 7vw, 2.25rem)", { lineHeight: "1.15" }],
        "h2-clamp": ["clamp(1.625rem, 9.6vw, 3.5rem)", { lineHeight: "1.15" }],
        "h1-clamp": ["clamp(1.75rem, 7vw, 3rem)", { lineHeight: "1.2" }],
      },
      borderRadius: {
        "5xl": "3.75rem",
        "4xl": "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
