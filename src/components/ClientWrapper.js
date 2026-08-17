"use client";

import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

export default function ClientWrapper({ children }) {
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

      <Navbar />

      {children}
    </>
  );
}
