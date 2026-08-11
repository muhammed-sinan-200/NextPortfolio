"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { raleway } from "../fonts";
import { projects } from "../data/projects";

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
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
                </div>

                <div className="flex flex-1 flex-col p-4 md:p-5">
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
              className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[6px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div
                className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-black/8 bg-[#FCFAF5] shadow-[0_25px_80px_rgba(0,0,0,0.22)] md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute right-3 top-3 z-20 rounded-full border border-black/10 bg-white/90 p-2.5 text-gray-700 shadow-sm backdrop-blur-md transition hover:border-black/20 hover:bg-white hover:text-black sm:right-4 sm:top-4"
                >
                  <X size={18} />
                </button>

                <div className="relative flex shrink-0 items-center justify-center overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#F3EFE4] via-[#F8F6F1] to-[#EDE8D5] p-4 sm:p-5 md:w-[54%] md:border-b-0 md:border-r md:p-7">
                  <div className="pointer-events-none absolute -left-10 top-8 h-40 w-40 rounded-full bg-white/50 blur-3xl" />
                  <div className="pointer-events-none absolute -right-8 bottom-6 h-36 w-36 rounded-full bg-[#E8E0CF]/70 blur-3xl" />

                  <div className="relative w-full overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                    <img
                      src={selectedProject.images[0]}
                      alt={selectedProject.title}
                      className="mx-auto block h-auto max-h-[38vh] w-full object-contain object-top md:max-h-[78vh]"
                    />
                  </div>
                </div>

                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-white px-7 py-8 sm:px-9 sm:py-10 md:px-10 md:py-12">
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-gray-400">
                      {selectedProject.category}
                    </p>

                    <h3
                      className={`${raleway.className} mt-4 text-3xl font-extrabold italic tracking-tight text-black sm:text-4xl`}
                    >
                      {selectedProject.title}
                    </h3>

                    <div className="mt-6 h-px w-12 bg-black/20" />

                    <p className="mt-6 max-w-md text-sm leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3 border-t border-black/6 pt-8">
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition duration-300 hover:scale-[1.02]"
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    )}

                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-black/15 bg-[#FCFAF5] px-6 py-3 text-sm font-medium text-gray-800 transition duration-300 hover:border-black hover:bg-black hover:text-white"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
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