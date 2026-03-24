"use client";

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Page() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Home showContent={showContent} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}