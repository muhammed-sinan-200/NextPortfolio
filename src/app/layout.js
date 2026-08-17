import { Geist } from "next/font/google";
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper";
import { pixelify, raleway } from "../fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const siteUrl = "https://sinaan.netlify.app";


const ogImagePath = "/og-image.png";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Muhammed Sinan | Full Stack Developer",
    template: "%s | Muhammed Sinan",
  },

  description:
    "Portfolio of Muhammed Sinan, a Full Stack Developer based in Calicut, Kerala. Building modern web apps with React, Next.js, Node.js, Express, and MongoDB.",

  keywords: [
    "Muhammed Sinan",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Portfolio",
    "Calicut",
    "Kerala",
  ],

  authors: [{ name: "Muhammed Sinan", url: siteUrl }],
  creator: "Muhammed Sinan",
  publisher: "Muhammed Sinan",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Muhammed Sinan Portfolio",
    title: "Muhammed Sinan | Full Stack Developer",
    description:
      "Full Stack Developer based in Calicut, Kerala. Building clean, scalable web applications with the MERN stack and Next.js.",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Muhammed Sinan — Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammed Sinan | Full Stack Developer",
    description:
      "Full Stack Developer based in Calicut, Kerala. Building clean, scalable web applications with the MERN stack and Next.js.",
    images: [ogImagePath],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistSans.className} ${raleway.variable} ${pixelify.variable} antialiased`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
