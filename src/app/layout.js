import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Replace with your real production domain (e.g. https://your-site.vercel.app)
const siteUrl = "https://REPLACE_WITH_YOUR_PRODUCTION_URL";

// Social preview image (1200×630) at public/og-image.png
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
    // TODO: Optional — replace with your X/Twitter handle, e.g. "@yourhandle"
    // creator: "@REPLACE_WITH_TWITTER_HANDLE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
