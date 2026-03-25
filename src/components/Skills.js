"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Bootstrap", icon: "/icons/Bootstrap.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "Express.js", icon: "/icons/Express.svg" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  { name: "Postman", icon: "/icons/Postman.svg" },
  { name: "Git", icon: "/icons/Git.svg" },
  { name: "GitHub", icon: "/icons/GitHub.svg" },
  { name: "Figma", icon: "/icons/Figma.svg" },
  { name: "Cloudinary", icon: "/icons/cloudinary.svg" },
  { name: "Vercel", icon: "/icons/Vercel.svg" },
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

function SkillCard({ skill, icon }) {
  return (
    <motion.div
      variants={chipReveal}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group flex items-center gap-3 h-[68px] min-w-[120px] justify-center rounded border border-dashed border-black/20 bg-white px-5 text-sm text-gray-700 transition duration-300 hover:border-black hover:text-black"
    >
      <Image
        src={icon}
        alt={skill}
        width={38}
        height={38}
        className="object-contain"
      />

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
                Behind
                <br />
                My Work
              </motion.h2>
            </div>

            <motion.div variants={titleReveal} className="md:pb-3">
              <p className="max-w-md text-sm leading-7 text-gray-600 md:text-base">
                I focus on building products with a balanced mix of interface
                quality, backend reliability, and smooth development workflow.
              </p>
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
              <SkillCard
                key={skill.name}
                skill={skill.name}
                icon={skill.icon}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}