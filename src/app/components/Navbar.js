"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
      const scrollPos = window.scrollY + 120;

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
        className="px-4 sm:px-6 py-3 font-bold text-sm rounded w-full sm:w-[90%] max-w-4xl shadow-lg backdrop-blur-md bg-white/5 border border-black/5"
      >
        <div className="flex justify-between items-center">
          <motion.div
            className={`${raleway.className} italic rounded-full px-2 sm:px-4 py-2 text-xl sm:text-2xl`}
          >
            <h1>SinAn.</h1>
          </motion.div>

          <motion.div className="hidden md:flex gap-2 p-1 rounded">
            {navLinks.map((link, i) => (
              <motion.button
                key={i}
                onClick={() => handleScroll(i, link.path)}
                className={`px-6 py-2 rounded transition ${activeIndex === i
                    ? "border border-black/30 bg-white/10 cursor-pointer transition-all"
                    : "border border-transparent hover:border-black/10 cursor-pointer"
                  }`}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center rounded p-2 border border-black/10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3 flex flex-col gap-2 p-2"
            >
              {navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => handleScroll(i, link.path)}
                  className={`w-full text-left px-4 py-3 rounded transition ${activeIndex === i
                      ? "border border-black/30 bg-white/10"
                      : "border border-transparent hover:border-black/10"
                    }`}
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}