"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { pixelify } from "../fonts";
import SplitTextHover from "./SplitTextHover";

const skills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "Express.js", icon: "/icons/Express.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "Bootstrap", icon: "/icons/Bootstrap.svg" },
  { name: "Postman", icon: "/icons/Postman.svg" },
  { name: "Git", icon: "/icons/Git.svg" },
  { name: "Redis", icon: "/icons/redis.svg" },
  { name: "GitHub", icon: "/icons/GitHub.svg" },
  { name: "Figma", icon: "/icons/Figma.svg" },
  { name: "Cloudinary", icon: "/icons/cloudinary.svg" },
  { name: "Vercel", icon: "/icons/Vercel.svg" },
];

const cardsStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const labelReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const titleReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const descReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
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
      duration: 0.6,
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
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const pixel3dStyle = {
  color: "#B9FF66",
  WebkitTextStroke: "0.07em #111111",
  paintOrder: "stroke fill",
  textShadow:
    "0.05em 0.05em 0 #4A7A12, 0.09em 0.09em 0 #4A7A12, 0.13em 0.13em 0 #111111",
};

function SkillCard({ skill, icon }) {
  return (
    <motion.div
      variants={chipReveal}
      whileHover={{ y: -3 }}
      className="flex h-[68px] w-full items-center justify-center gap-3 border-2 border-gray-900 bg-white px-4 text-sm text-gray-900 shadow-[2px_2px_0_0_#111] transition-[background-color,box-shadow] duration-150 hover:bg-[#B9FF66] hover:shadow-[3px_3px_0_0_#111]"
    >
      <Image
        src={icon}
        alt={skill}
        width={38}
        height={38}
        className="h-[38px] w-[38px] object-contain"
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
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="absolute top-16 left-4 h-3 w-3 bg-[#B9FF66] sm:left-8" />
        <span className="absolute top-16 left-8 h-2 w-2 bg-gray-900 sm:left-12" />
        <span className="absolute top-16 right-4 h-3 w-3 bg-[#B9FF66] sm:right-8" />
        <span className="absolute top-16 right-8 h-2 w-2 bg-gray-900 sm:right-12" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <motion.p
                variants={labelReveal}
                className="text-xs uppercase tracking-[0.32em] text-gray-600"
              >
                Technical Expertise
              </motion.p>

              <motion.h2
                variants={titleReveal}
                className={`${pixelify.className} mt-5 max-w-full rotate-[-1.5deg] text-[clamp(1.5rem,6vw,3.6rem)] font-bold uppercase leading-[1.08] tracking-wide`}
                style={pixel3dStyle}
              >
                <SplitTextHover className="block">
                  Skills I
                  <br />
                  Possess
                </SplitTextHover>
              </motion.h2>
            </div>

            <motion.div variants={descReveal} className="md:pb-3">
              <p className="max-w-md text-sm leading-[1.85] text-neutral-900 md:text-base">
                I focus on building products with a balanced mix of interface
                quality, backend reliability, and smooth development workflow.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={lineReveal}
            className="mt-12 h-px origin-left bg-gray-900"
          />

          <motion.div
            variants={cardsStagger}
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4"
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
