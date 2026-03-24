"use client";

import { motion, AnimatePresence } from "framer-motion";
import { raleway } from "../fonts";

export default function IntroLoader({ isLoading }) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[9999] overflow-hidden bg-black"
                >
                    <div className="relative flex h-full w-full items-center justify-center">
                        <motion.h1
                            initial={{
                                opacity: 0,
                                scale: 0.82,
                                filter: "blur(10px)",
                                letterSpacing: "0.04em",
                            }}
                            animate={{
                                opacity: [0, 1, 1, 0],
                                scale: [0.82, 1, 18, 18],
                                filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(2px)"],
                                letterSpacing: ["0.04em", "0.01em", "0.01em", "0.01em"],
                            }}
                            transition={{
                                duration: 1.55,
                                times: [0, 0.28, 0.85, 1],
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`${raleway.className} relative z-10 text-5xl font-bold italic tracking-tight text-[#E9DFC8] sm:text-6xl md:text-7xl`}
                        >
                            SinAn.
                        </motion.h1>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}