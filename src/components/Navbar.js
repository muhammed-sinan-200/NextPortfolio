"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
import { raleway } from "../fonts";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Navbar({ showContent }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

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
    <div
      className={`fixed top-4 left-0 w-full justify-center z-50 flex px-4 sm:px-0 ${font.className}`}
    >
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 sm:px-6 py-3 text-sm rounded-2xl w-full sm:w-[90%] max-w-4xl backdrop-blur-md bg-white/70 border border-black/10 shadow-sm"      >
        <div className="flex justify-between items-center">
          <motion.div
            onClick={() => handleScroll(0, "#home")}
            className={`${raleway.className} font-bold italic rounded-full px-2 sm:px-4 py-2 text-xl sm:text-2xl cursor-pointer`}
          >
            <h1>SinAn.</h1>
          </motion.div>

          <motion.div className="hidden md:flex gap-6 p-1 rounded">
            {navLinks.map((link, i) => (
              <motion.button
                key={i}
                onClick={() => handleScroll(i, link.path)}
                className={`px-6 py-2 rounded-full transition ${activeIndex === i
                  ? "border border-black/30 bg-[#fffefb] text-black  cursor-pointer transition-all"
                  : "border border-transparent hover:border-black/10 hover:border-dashed cursor-pointer"
                  }`}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden relative flex h-10 w-10 items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute block h-[1.4px] w-6 bg-black transition-all duration-300 ease-out ${menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
            />
            <span
              className={`absolute block h-[1.4px] w-6 bg-black transition-all duration-300 ease-out ${menuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`absolute block h-[1.4px] w-6 bg-black transition-all duration-300 ease-out ${menuOpen ? "-rotate-45" : "translate-y-2"
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
              className="md:hidden mt-6 flex flex-col gap-2 px-4 pb-4 items-start"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleScroll(i, link.path)}
                  whileTap={{ scale: 0.96 }}
                  className={`text-4xl font-medium tracking-tighter transition ${activeIndex === i
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-80"
                    }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}