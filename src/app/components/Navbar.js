"use client"
import { motion } from "framer-motion"
import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";


const font = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0)
    const navLinks = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Projects", path: "#projects" },
        { name: "Services", path: "#services" },
        { name: "Contact", path: "#contact" },
    ]

    const handleScroll = (index, path) => {
        setActiveIndex(index)

        document.querySelector(path)?.scrollIntoView({
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const sections = navLinks.map((link) =>
            document.querySelector(link.path)
        )

        const onScroll = () => {
            const scrollPos = window.scrollY + 120

            sections.forEach((section, index) => {
                if (!section) return

                const top = section.offsetTop
                const height = section.offsetHeight

                if (scrollPos >= top && scrollPos < top + height) {
                    setActiveIndex(index)
                }
            })
        }

        window.addEventListener("scroll", onScroll)
        onScroll()

        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return (
        <div className={` fixed top-4 left-0 w-full  justify-center z-50 flex gap-10 ${font.className} `}>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="px-6 py-3 font-bold text-sm rounded-full flex justify-between items-center w-[90%] max-w-4xl shadow-lg
            backdrop-blur-md bg-white/5 border border-black/5"
            >
                <motion.div className="rounded-full px-4 py-2 text-2xl">
                    <h1>SinAn.</h1>
                </motion.div>

                <motion.div className="flex gap-2 border border-black/10 p-1 rounded-full">
                    {
                        navLinks.map((link, i) => (
                            <motion.button key={i}
                                onClick={() => handleScroll(i, link.path)}
                                className={`px-6 py-2 rounded-full transition ${activeIndex === i
                                    ? "border border-black/30 bg-white/10 cursor-pointer transition-all"
                                    : "border border-transparent hover:border-black/10 cursor-pointer"
                                    }`}
                            >
                                {link.name}
                            </motion.button>
                        ))
                    }
                </motion.div>

            </motion.nav>
        </div>
    )
}