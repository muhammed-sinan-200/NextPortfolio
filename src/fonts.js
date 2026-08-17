import { Pixelify_Sans, Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-raleway",
});

export const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-pixelify",
});
