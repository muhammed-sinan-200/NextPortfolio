"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#F6F4E9]">
      <div className="max-w-7xl mx-auto px-6 w-full mt-28">
        
        <motion.div
          className="grid md:grid-cols-2 gap-40 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} 
        > 

          <motion.div className="text-left" variants={container}>
            <motion.p
              variants={fadeUp}
              className="text-sm text-black/40 tracking-[0.25em] uppercase"
            >
              FULL STACK ENGINEER
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-raleway text-3xl md:text-6xl font-medium leading-tight tracking-tight text-gray-900"
            >
              Building scalable <span className="italic">Web Applications</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-md text-gray-500 max-w-lg leading-relaxed tracking-wide text-justify"
            >
              I build modern web applications that are fast, reliable, and easy to use,
              with a strong focus on performance, clean code, and a seamless user experience
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col justify-end items-center md:pr-28 md:-translate-y-10"
            variants={fadeUp}
          >
            <motion.p
              variants={fadeUp}
              className="font-light text-4xl tracking-widest uppercase"
            >
              MUHAMMED SINAN
            </motion.p>

            <motion.div className="flex gap-2" variants={fadeUp}>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative overflow-hidden mt-6 px-5 py-2 text-sm border-b border-gray-900 cursor-pointer
                transition-colors duration-300
                before:absolute before:inset-0 before:bg-black
                before:origin-bottom before:scale-y-0
                before:transition-transform before:duration-300
                hover:before:scale-y-100 hover:text-white"
              >
                <span className="relative z-10">View Projects</span>
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative overflow-hidden mt-6 px-5 py-2 text-sm border-b border-gray-900 cursor-pointer
                transition-colors duration-300
                before:absolute before:inset-0 before:bg-black
                before:origin-bottom before:scale-y-0
                before:transition-transform before:duration-300
                hover:before:scale-y-100 hover:text-white"
              >
                <span className="relative z-10">Let's talk</span>
              </motion.button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}