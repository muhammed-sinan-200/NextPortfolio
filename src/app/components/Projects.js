"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { raleway } from "../fonts";

const projects = [
  {
    id: 1,
    title: "Mediflow",
    category: "Full Stack Project",
    fullDescription:
      "Mediflow is a full stack web application focused on smooth user experience, scalable architecture, and reliable backend functionality.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/mediflow.png",
    live: "https://mediflow-user.vercel.app/",
    github: "https://github.com/muhammed-sinan-200/MediFlow",
  },
  {
    id: 2,
    title: "Aiman Holidays",
    category: "Frontend Freelance Project",
    fullDescription:
      "Aiman Holidays is a frontend website developed for a travel agency client to present their business online in a clean and professional way. Focused on clean design, responsive layout, and smooth user experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/travels.png",
    live: "https://aiman-holidays.vercel.app/",
    github: null,
  },
  {
    id: 3,
    title: "Sneaker Hub",
    category: "Frontend React Project",
    fullDescription:
      "SneakerHub is a shopping app built with React, featuring product listing, cart functionality, and state management using Context API.",
    tech: ["React", "Context API", "React Bootstrap"],
    image: "/sneeker.png",
    live: "https://sneekerehub-argf.vercel.app/",
    github: "https://github.com/muhammed-sinan-200/sneekerehub",
  },
  {
    id: 4,
    title: "Developer Portfolio",
    category: "Frontend Next.js Project",
    fullDescription:
      "A personal portfolio website built to showcase my projects, skills, and development work through a clean and interactive user interface.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/portfolio.png",
    live: null,
    github: null,
  },
  {
    id: 5,
    title: "Resumy",
    category: "Full Stack AI Project",
    fullDescription:
      "A full stack resume review web app where users upload their resume PDF and receive instant AI-based feedback to improve content and overall quality.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Google Gemini API"],
    image: "/resumy.png",
    live: "https://resumy-kappa.vercel.app",
    github: "https://github.com/muhammed-sinan-200/Resumy",
  },
];

const titleFromLeft = {
  hidden: { opacity: 0, x: -70 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="min-h-screen relative bg-[#FCFAF5] px-6 py-24 md:px-10 lg:px-20"
    >
<div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-white to-transparent" />
  <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.18 }}
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <motion.p
                variants={titleFromLeft}
                className="text-xs uppercase tracking-[0.32em] text-gray-400"
              >
                Builds 
              </motion.p>

              <motion.h2
                variants={titleFromLeft}
                className={`${raleway.className} mt-5 text-5xl font-extrabold uppercase italic tracking-tight text-black md:text-7xl lg:text-[6.5rem] leading-[0.95]`}
              >
                Projects 
                <br />
               & Works
              </motion.h2>
            </div>

            <motion.div variants={fadeUp} className="md:pb-3">
              <p className="max-w-md text-sm leading-7 text-gray-600 md:text-base">
                A collection of projects where I build clean interfaces,
                reliable backends, and scalable systems focused on real-world
                usability.
              </p>

              <div className="mt-8 flex items-center gap-3 text-gray-700">
                <span className="text-xs uppercase tracking-[0.28em]">
                  Click to explore
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-12 h-px origin-left bg-gradient-to-r from-black via-gray-400 to-transparent"
          />

          <motion.div
            className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            variants={cardsContainer}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={cardReveal}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_6px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex flex-col gap-2">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400">
                      {project.category}
                    </p>

                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight text-black">
                        {project.title}
                      </h3>

                      <span className="shrink-0 text-xs uppercase tracking-[0.24em] text-gray-400">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="pt-6 flex items-center gap-2 text-sm font-medium text-gray-800">
                    <span>View Project</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div
                className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 z-20 rounded-full border border-gray-200 bg-white/90 p-2 text-gray-700 backdrop-blur-md transition hover:bg-gray-100"
                >
                  <X size={20} />
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="h-72 bg-gray-100 md:h-full">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="max-h-[85vh] overflow-y-auto p-8 md:p-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                      {selectedProject.category}
                    </p>

                    <h3 className="mt-3 text-xl font-bold tracking-tight text-black md:text-3xl">
                      {selectedProject.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-justify text-gray-600 md:text-base">
                      {selectedProject.fullDescription}
                    </p>

                    <div className="mt-8">
                      <h4 className="text-sm uppercase tracking-[0.24em] text-gray-400">
                        Tech Stack
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedProject.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                        >
                          Live Preview
                          <ArrowUpRight size={16} />
                        </a>
                      )}

                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                        >
                          GitHub
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}