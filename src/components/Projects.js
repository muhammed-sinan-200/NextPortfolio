"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import Image from "next/image";
import { pixelify } from "../fonts";
import { projects } from "../data/projects";
import SplitTextHover, { useRollingHover } from "./SplitTextHover";

const sectionReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleFromLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
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

const ctaClass =
  "inline-flex items-center gap-2 border-2 border-gray-900 bg-[#B9FF66] px-5 py-2 text-sm uppercase tracking-[0.18em] text-gray-900 shadow-[3px_3px_0_0_#111] transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#111]";

function ProjectCard({ project, index, variants, onSelect }) {
  const { active, hoverProps } = useRollingHover();

  return (
    <motion.article
      variants={variants}
      onClick={() => onSelect(project)}
      {...hoverProps}
      className="group cursor-pointer overflow-hidden border-2 border-gray-900 bg-white shadow-[3px_3px_0_0_#111] transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#111]"
    >
      <div className="relative h-48 overflow-hidden border-b-2 border-gray-900 bg-white">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span
          className="absolute top-2 left-2 h-2 w-2 bg-[#B9FF66]"
          aria-hidden="true"
        />
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

            <span className="shrink-0 bg-[#B9FF66] px-1.5 py-0.5 text-xs uppercase tracking-[0.24em] text-gray-900">
              0{index + 1}
            </span>
          </div>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 self-start border-2 border-gray-900 bg-[#B9FF66] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-gray-900 shadow-[2px_2px_0_0_#111] transition-[transform,box-shadow] duration-150 group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0_0_#111]">
          <SplitTextHover unit active={active}>
            View Project
          </SplitTextHover>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const livePreviewRoll = useRollingHover();
  const githubRoll = useRollingHover();

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
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div
            variants={{ hidden: {}, show: {} }}
            className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end"
          >
            <div>
              <motion.p
                variants={titleFromLeft}
                className="text-xs uppercase tracking-[0.32em] text-gray-400"
              >
                Builds
              </motion.p>

              <motion.h2
                variants={titleFromLeft}
                className={`${pixelify.className} mt-5 max-w-full rotate-[-1.5deg] text-[clamp(1.5rem,6vw,3.6rem)] font-bold uppercase leading-[1.08] tracking-wide`}
                style={pixel3dStyle}
              >
                <SplitTextHover className="block">
                  Projects
                  <br />
                  & Works
                </SplitTextHover>
              </motion.h2>
            </div>

            <motion.div variants={fadeUp} className="md:pb-3">
              <p className="max-w-md text-sm leading-[1.85] text-neutral-900 md:text-base">
                A collection of projects where I build clean interfaces,
                reliable backends, and scalable systems focused on real-world
                usability.
              </p>

              <div className="mt-8 flex items-center gap-3 text-gray-700">
                <span className="inline-block h-2 w-2 shrink-0 bg-[#B9FF66]" />
                <span className="text-xs uppercase tracking-[0.28em]">
                  Click to explore
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 h-px origin-left bg-gray-900"
          />

          <motion.div
            className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            variants={cardsContainer}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variants={cardReveal}
                onSelect={setSelectedProject}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/55"
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
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden border-2 border-gray-900 bg-white shadow-[6px_6px_0_0_#111] md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute right-3 top-3 z-20 border-2 border-gray-900 bg-[#B9FF66] p-2 text-gray-900 shadow-[2px_2px_0_0_#111] transition-[transform,box-shadow] duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#111] sm:right-4 sm:top-4"
                >
                  <X size={18} />
                </button>

                <div className="relative flex shrink-0 items-center justify-center overflow-hidden border-b-2 border-gray-900 bg-white p-4 sm:p-5 md:w-[54%] md:border-b-0 md:border-r-2 md:p-7">
                  <span
                    className="absolute top-3 left-3 h-2 w-2 bg-[#B9FF66]"
                    aria-hidden="true"
                  />
                  <div className="relative w-full overflow-hidden border-2 border-gray-900 bg-white">
                    <Image
                      src={selectedProject.images[0]}
                      alt={selectedProject.title}
                      width={1366}
                      height={768}
                      sizes="(max-width: 768px) 92vw, 552px"
                      className="mx-auto block h-auto max-h-[38vh] w-full object-contain object-top md:max-h-[78vh]"
                    />
                  </div>
                </div>

                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-white px-7 py-8 sm:px-9 sm:py-10 md:px-10 md:py-12">
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-gray-400">
                      {selectedProject.category}
                    </p>

                    <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                      {selectedProject.title}
                    </h3>

                    <div className="mt-6 h-px w-12 bg-gray-900" />

                    <p className="mt-6 max-w-md text-sm leading-7 text-neutral-900 sm:text-[15px] sm:leading-8">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3 border-t-2 border-gray-300 pt-8">
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={ctaClass}
                        {...livePreviewRoll.hoverProps}
                      >
                        <SplitTextHover unit active={livePreviewRoll.active}>
                          Live Preview
                        </SplitTextHover>
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-gray-900 bg-white px-5 py-2 text-sm uppercase tracking-[0.18em] text-gray-900 shadow-[3px_3px_0_0_#111] transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#111]"
                        {...githubRoll.hoverProps}
                      >
                        <Github size={16} />
                        <SplitTextHover unit active={githubRoll.active}>
                          GitHub
                        </SplitTextHover>
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
