"use client";

import { motion } from "framer-motion";
import { raleway } from "../fonts";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const titleReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



export default function Home({ showContent }) {
  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FCFAF5] px-6 pt-32 pb-20 md:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-[#F6F4E9] blur-3xl opacity-80" />
        <div className="absolute right-[-8%] top-28 h-80 w-80 rounded-full bg-[#EEE7D8] blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs uppercase tracking-[0.32em] text-gray-400"
              >
                Full Stack Developer
              </motion.p>

              <motion.h1
                variants={titleReveal}
                className={`${raleway.className} mt-6 text-5xl font-extrabold uppercase italic leading-[0.92] tracking-tight text-black md:text-7xl lg:text-[6.8rem]`}
              >
                Building
                <br />
                Digital
                <br />
                Products
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-xl text-sm leading-7 text-gray-600 md:text-base"
              >
                I design and build modern web applications with clean
                interfaces, scalable backend systems, and smooth user
                experiences focused on real-world usability.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col justify-end items-center md:items-end md:pr-28 md:-translate-y-8"
              variants={container}
            >
              <motion.p
                variants={fadeUp}
                className="font-light text-4xl tracking-widest uppercase text-center md:text-right"
              >
                MUHAMMED SINAN
              </motion.p>

              <motion.div
                className="flex gap-4 mt-6"
                variants={fadeUp}
              >
                <motion.button
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleScroll("#projects")}
                  className="group relative overflow-hidden px-5 py-2 text-sm border border-dashed border-gray-900 cursor-pointer"
                >
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-black transition-transform duration-300 ease-out group-hover:scale-y-100" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    View Projects
                  </span>
                </motion.button>

                <motion.button
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleScroll("#contact")}
                  className="group relative overflow-hidden px-5 py-2 text-sm border border-dashed border-gray-900 cursor-pointer"
                >
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-black transition-transform duration-300 ease-out group-hover:scale-y-100" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Let's talk
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}