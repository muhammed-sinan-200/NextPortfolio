"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

const titleFromLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardFromLeft = {
  hidden: { opacity: 0, x: -50, y: 10 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpSlow = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageReveal = {
  hidden: { opacity: 0, x: 50, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={container}
        >
          <motion.h2
            variants={titleFromLeft}
            className="italic text-5xl md:text-7xl font-extrabold uppercase tracking-tight mt-8 text-center md:text-left"
          >
            About Me
          </motion.h2>

          <div className="mt-10 grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={cardFromLeft}
              className="border-2 border-dashed bg-gradient-to-br from-white via-[#FCFAF5] to-[#FFFDF8] border-gray-300 rounded-3xl p-8 md:p-10 relative"
            >
              <motion.p
                variants={fadeUpSlow}
                className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-4"
              >
                Full Stack Developer · Calicut, Kerala
              </motion.p>

              <motion.div
                variants={container}
                className="text-gray-600 leading-relaxed space-y-4 text-justify"
              >
                <motion.p variants={fadeUpSlow}>
                  Hi, I’m Muhammed Sinan, a Full Stack Developer based in
                  Calicut, Kerala. I build responsive and scalable web
                  applications with a strong focus on usability and performance.
                </motion.p>

                <motion.p variants={fadeUpSlow}>
                  I work primarily with the MERN stack, creating clean frontends
                  in React and reliable backend systems with Node.js, Express,
                  and MongoDB.
                </motion.p>

                <motion.p variants={fadeUpSlow}>
                  I enjoy turning ideas into practical products and writing
                  maintainable code that supports both good user experience and
                  long-term growth.
                </motion.p>
              </motion.div>

             <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleScroll("#projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                  }
                  className="relative overflow-hidden px-5 py-2 text-sm border border-dashed border-gray-900 cursor-pointer mt-4
      transition-colors duration-300
      before:absolute before:inset-0 before:bg-black
      before:origin-bottom before:scale-y-0
      before:transition-transform before:duration-300
      hover:before:scale-y-100 hover:text-white"
                >
                  <span className="relative z-10">View Works</span>
                </motion.button>
            </motion.div>

            <motion.div
              variants={imageReveal}
              className="flex justify-center md:justify-end"
            >
              <div className="w-full max-w-sm h-[480px] rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden">
                <motion.img
                  src="/my-gibli3.png"
                  alt="Muhammed Sinan"
                  className="w-full h-full object-cover z-10"
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: false, amount: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}