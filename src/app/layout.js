"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import IntroLoader from "./components/IntroLoader";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#FCFAF5",
              color: "#111",
              border: "1px dashed rgba(0,0,0,0.2)",
              padding: "14px 16px",
              fontSize: "14px",
            },
            success: {
              iconTheme: {
                primary: "#111",
                secondary: "#FCFAF5",
              },
            },
            error: {
              iconTheme: {
                primary: "#111",
                secondary: "#FCFAF5",
              },
            },
          }}
        />

        <IntroLoader isLoading={isLoading} />
        <Navbar showContent={!isLoading} />
        {children}
      </body>
    </html>
  );
}