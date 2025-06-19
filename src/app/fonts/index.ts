import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";

export const gilroy = localFont({
  src: [
    {
      path: "./Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Gilroy-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

export const cera = localFont({
  src: [
    {
      path: "./CeraRoundPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./CeraRoundPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cera",
});

export const sfpro = localFont({
  src: [
    {
      path: "./SFProDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sf",
});

export const cormorant = Cormorant_Garamond({
  weight: ["500"],
  subsets: ["latin", "cyrillic"],
  style: "normal",
  variable: "--font-cormorant",
  display: "swap",
});
