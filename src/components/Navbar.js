"use client";
import { motion, AnimatePresence } from "framer-motion";
import { pixelify } from "../fonts";
import { useEffect, useState } from "react";

const pixel3dStyle = {
  color: "#B9FF66",
  WebkitTextStroke: "0.07em #111111",
  paintOrder: "stroke fill",
  textShadow:
    "0.05em 0.05em 0 #4A7A12, 0.09em 0.09em 0 #4A7A12, 0.13em 0.13em 0 #111111",
};

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (index, path) => {
    setActiveIndex(index);
    setMenuOpen(false);

    document.querySelector(path)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.path));

    const onScroll = () => {
      if (window.scrollY < 120) {
        setActiveIndex(0);
        return;
      }

      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      sections.forEach((section, index) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 z-50 flex w-full justify-center px-4 sm:px-0">
      <nav className="intro-nav w-full max-w-4xl border-2 border-gray-900 bg-white px-4 py-3 text-sm text-gray-900 shadow-[3px_3px_0_0_#111] sm:w-[90%] sm:px-6">
        <div className="flex items-center justify-between">
          <div
            onClick={() => handleScroll(0, "#home")}
            className={`${pixelify.className} cursor-pointer px-2 py-1 text-xl uppercase tracking-wide sm:px-4 sm:text-2xl`}
            style={pixel3dStyle}
          >
            <span>SinAn.</span>
          </div>

          <div className="hidden gap-2 p-1 md:flex">
            {navLinks.map((link, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleScroll(i, link.path)}
                className={`cursor-pointer border-2 px-5 py-2 uppercase tracking-[0.12em] transition-[background-color,box-shadow,border-color] duration-150 ${
                  activeIndex === i
                    ? "border-gray-900 bg-[#B9FF66] text-gray-900 shadow-[2px_2px_0_0_#111]"
                    : "border-transparent text-gray-900 hover:border-gray-900 hover:bg-[#B9FF66]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute block h-[1.4px] w-6 bg-black transition-all duration-300 ease-out ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-[1.4px] w-6 bg-black transition-all duration-300 ease-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-[1.4px] w-6 bg-black transition-all duration-300 ease-out ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-6 flex flex-col items-start gap-2 px-2 pb-2 md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleScroll(i, link.path)}
                  whileTap={{ scale: 0.96 }}
                  className={`border-2 px-4 py-2 text-left text-3xl font-medium uppercase tracking-tight transition-[background-color,border-color] duration-150 ${
                    activeIndex === i
                      ? "border-gray-900 bg-[#B9FF66] text-gray-900"
                      : "border-transparent text-gray-900 hover:border-gray-900 hover:bg-[#B9FF66]"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
