"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind" },
  { name: "Bootstrap" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
  { name: "Postman" },
  { name: "Git" },
  { name: "Figma" },
  { name: "Cloudinary" },
  { name: "Vercel" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
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

const lineReveal = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const chipReveal = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

function SkillCard({ skill }) {
  return (
    <motion.div
      variants={chipReveal}
      whileHover={{ y: -4, scale: 1.02 }}
      className="inline-flex h-[68px] min-w-[110px] items-center justify-center rounded-[1.2rem] border border-dashed border-black/20 bg-white px-5 text-sm text-gray-700 transition duration-300 hover:border-black hover:text-black"
    >
      <span className="font-medium tracking-tight">{skill}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-[#F6F4E9] blur-3xl opacity-70" />
        <div className="absolute right-[-8%] bottom-20 h-80 w-80 rounded-full bg-[#EDE8D5] blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.18 }}
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <motion.p
                variants={titleReveal}
                className="text-xs uppercase tracking-[0.32em] text-gray-400"
              >
                Technical Expertise
              </motion.p>

              <motion.h2
                variants={titleReveal}
                className="mt-5 text-5xl font-extrabold uppercase italic tracking-tight text-black md:text-7xl lg:text-[6.5rem] leading-[0.95]"
              >
                Skills
                <br />
                That Shape
                <br />
                Products
              </motion.h2>
            </div>

            <motion.div variants={titleReveal} className="md:pb-3">
              <p className="max-w-md text-sm leading-7 text-gray-600 md:text-base">
                I focus on building products with a balanced mix of interface
                quality, backend reliability, and smooth development workflow.
              </p>

              <div className="mt-8 flex items-center gap-3 text-gray-700">
                <span className="text-xs uppercase tracking-[0.28em]">
                  Scroll to explore
                </span>
                <ArrowDown size={16} />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={lineReveal}
            className="mt-12 h-px origin-left bg-gradient-to-r from-black via-gray-400 to-transparent"
          />

          <motion.div
            variants={container}
            className="mt-14 flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill.name} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}