"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import IntroLoader from "./IntroLoader";
import { Toaster } from "react-hot-toast";

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
        }}
      />

      <IntroLoader isLoading={isLoading} />
      <Navbar showContent={!isLoading} />

      {children}
    </>
  );
}