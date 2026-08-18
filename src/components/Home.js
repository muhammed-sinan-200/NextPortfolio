"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pixelify, raleway } from "../fonts";
import SplitTextHover, { useRollingHover } from "./SplitTextHover";

const pixel3dStyle = {
  color: "#B9FF66",
  WebkitTextStroke: "0.07em #111111",
  paintOrder: "stroke fill",
  textShadow:
    "0.05em 0.05em 0 #4A7A12, 0.09em 0.09em 0 #4A7A12, 0.13em 0.13em 0 #111111",
};

const ctaClass =
  "cursor-pointer border-2 border-gray-900 px-5 py-2 text-sm uppercase tracking-[0.18em] text-gray-900 shadow-[3px_3px_0_0_#111] transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#111]";

export default function Home() {
  const viewProjectsRoll = useRollingHover();
  const letsTalkRoll = useRollingHover();
  const reduceMotion = useReducedMotion();

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white px-6 pt-32 pb-20 md:px-10 lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="absolute top-24 left-4 h-3 w-3 bg-[#B9FF66] sm:left-8 lg:left-16" />
        <span className="absolute top-24 left-8 h-2 w-2 bg-gray-900 sm:left-12 lg:left-20" />
        <span className="absolute top-[108px] left-4 h-2 w-5 bg-[#B9FF66] sm:left-8 lg:left-16" />
        <span className="absolute top-[116px] left-4 h-2 w-2 bg-gray-400 sm:left-8 lg:left-16" />

        <span className="absolute top-24 right-4 h-3 w-3 bg-[#B9FF66] sm:right-8 lg:right-16" />
        <span className="absolute top-24 right-8 h-2 w-2 bg-gray-900 sm:right-12 lg:right-20" />
        <span className="absolute top-[108px] right-4 h-2 w-5 bg-[#B9FF66] sm:right-8 lg:right-16" />
        <span className="absolute top-[116px] right-4 h-2 w-2 bg-gray-400 sm:right-8 lg:right-16" />

        <span className="absolute bottom-16 left-6 hidden h-3 w-3 bg-[#B9FF66] sm:block" />
        <span className="absolute bottom-16 left-10 hidden h-2 w-4 bg-gray-900 sm:block" />
        <span className="absolute bottom-20 right-10 hidden h-3 w-3 bg-[#B9FF66] md:block" />
        <span className="absolute bottom-16 right-16 hidden h-2 w-2 bg-gray-400 md:block" />

        <motion.span
          className="absolute top-[42%] right-[8%] hidden h-2 w-2 bg-[#B9FF66] lg:block"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute top-[52%] left-[7%] hidden h-3 w-2 bg-gray-300 lg:block"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p
              className={`intro-fade ${pixelify.className} text-xs uppercase tracking-[0.18em] sm:text-sm`}
              style={pixel3dStyle}
            >
              Full Stack Developer
            </p>

            <h1
              className={`${raleway.className} mt-6 text-5xl font-extrabold uppercase italic leading-[0.92] tracking-tight text-black md:text-7xl lg:text-[6.8rem]`}
            >
              <SplitTextHover className="block">
                Building
                <br />
                Digital
                <br />
                Products
              </SplitTextHover>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-[1.85] text-neutral-900 md:text-base">
              I design and build modern web applications with clean
              interfaces, scalable backend systems, and smooth user
              experiences focused on real-world usability.
            </p>
          </div>

          <div className="intro-fade intro-fade-delay-2 flex flex-col justify-end items-center md:items-end md:pr-28 md:-translate-y-8">
            <p className="font-semibold text-4xl tracking-widest uppercase text-center md:text-right text-gray-900">
              MUHAMMED SINAN
            </p>

            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={() => handleScroll("#projects")}
                className={`${ctaClass} bg-[#B9FF66]`}
                {...viewProjectsRoll.hoverProps}
              >
                <SplitTextHover unit active={viewProjectsRoll.active}>
                  View Projects
                </SplitTextHover>
              </button>

              <button
                type="button"
                onClick={() => handleScroll("#contact")}
                className={`${ctaClass} bg-white`}
                {...letsTalkRoll.hoverProps}
              >
                <SplitTextHover unit active={letsTalkRoll.active}>
                  Let&apos;s talk
                </SplitTextHover>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
