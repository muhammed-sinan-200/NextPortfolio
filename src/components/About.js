"use client";

import Image from "next/image";
import { pixelify } from "../fonts";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import SplitTextHover, { useRollingHover } from "./SplitTextHover";
import styles from "./AboutBentoGallery.module.css";

gsap.registerPlugin(ScrollTrigger, Flip);

const PROFILE_IMAGE = "/my-gibli3.webp";

const TILES = [
  { src: "/about-text4.webp", objectPosition: "52% 18%", width: 1364, height: 768 },
  { src: "/about-text5.webp", objectPosition: "82% 22%", width: 1364, height: 677 },
  { src: "/about-img.webp", objectPosition: "28% 48%", width: 1920, height: 2538 },
  { src: "/about-text6.webp", objectPosition: "72% 52%", width: 697, height: 759 },
  { src: "/about-text1.webp", objectPosition: "18% 12%", width: 1408, height: 602 },
  { src: "/about-text3.webp", objectPosition: "14% 78%", width: 1008, height: 1055 },
  { src: "/about-text2.webp", objectPosition: "50% 74%", width: 768, height: 432 },
  { src: "/about-text7.webp", objectPosition: "86% 84%", width: 1408, height: 649 },
];

function AboutContent({ viewWorksRoll }) {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center overflow-hidden border-2 border-dashed border-gray-300 bg-white px-6 py-12 text-center sm:px-10 md:px-14 md:py-16">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <span className="absolute top-3 left-3 h-3 w-3 bg-[#B9FF66]" />
        <span className="absolute top-3 left-6 h-2 w-2 bg-gray-900" />
        <span className="absolute top-6 left-3 h-2 w-5 bg-[#B9FF66]" />
        <span className="absolute top-8 left-3 h-2 w-2 bg-gray-400" />

        <span className="absolute top-3 right-3 h-3 w-3 bg-[#B9FF66]" />
        <span className="absolute top-3 right-6 h-2 w-2 bg-gray-900" />
        <span className="absolute top-6 right-3 h-2 w-5 bg-[#B9FF66]" />
        <span className="absolute top-8 right-3 h-2 w-2 bg-gray-400" />

        <span className="absolute bottom-3 left-3 h-3 w-3 bg-[#B9FF66]" />
        <span className="absolute bottom-3 left-6 h-2 w-4 bg-gray-900" />
        <span className="absolute bottom-6 left-3 h-2 w-2 bg-[#B9FF66]" />

        <span className="absolute bottom-3 right-3 h-3 w-3 bg-[#B9FF66]" />
        <span className="absolute bottom-3 right-6 h-2 w-4 bg-gray-900" />
        <span className="absolute bottom-6 right-3 h-2 w-2 bg-[#B9FF66]" />

        <span className="absolute top-1/2 left-2 hidden h-2 w-2 -translate-y-8 bg-[#B9FF66] sm:block" />
        <span className="absolute top-1/2 left-2 hidden h-3 w-2 translate-y-2 bg-gray-300 sm:block" />
        <span className="absolute top-1/2 right-2 hidden h-2 w-2 -translate-y-8 bg-[#B9FF66] sm:block" />
        <span className="absolute top-1/2 right-2 hidden h-3 w-2 translate-y-2 bg-gray-300 sm:block" />
      </div>

      <h3
        className={`${pixelify.className} relative z-[1] mt-6 max-w-full rotate-[-1.5deg] px-1 text-[clamp(1.45rem,6.4vw,3.35rem)] font-bold uppercase leading-[1.08] tracking-wide`}
        style={{
          color: "#B9FF66",
          WebkitTextStroke: "0.07em #111111",
          paintOrder: "stroke fill",
          textShadow:
            "0.05em 0.05em 0 #4A7A12, 0.09em 0.09em 0 #4A7A12, 0.13em 0.13em 0 #111111",
        }}
      >
        I build things
        <br />
        for the web.
      </h3>

      <p className="relative z-[1] mx-auto mt-8 w-full max-w-5xl text-center text-[15px] leading-[1.85] text-neutral-900 md:text-base">
        Hi, I&apos;m{" "}
        <strong className="font-semibold text-gray-900 bg-[#B9FF66] px-1">
          Muhammed Sinan
        </strong>
        , a{" "}
        <strong className="font-semibold text-gray-900 bg-[#B9FF66] px-1">
          Full Stack Developer
        </strong>{" "}
        based in{" "}
        <strong className="font-semibold text-gray-900 bg-[#B9FF66] px-1">
          Calicut, Kerala
        </strong>
        . I design and build{" "}
        <strong className="font-semibold text-gray-900">
          responsive, scalable web applications
        </strong>{" "}
        with a strong focus on usability, performance, and clean product
        thinking — taking ideas from sketch to something people can actually
        use. I work primarily with the{" "}
        <strong className="font-semibold text-gray-900 bg-[#B9FF66]">MERN stack</strong>,
        creating{" "}
        <strong className="font-semibold text-gray-900">React</strong> and{" "}
        <strong className="font-semibold text-gray-900">Next.js</strong>{" "}
        frontends with reliable backends in{" "}
        <strong className="font-semibold text-gray-900">Node.js</strong>,{" "}
        <strong className="font-semibold text-gray-900">Express</strong>, and{" "}
        <strong className="font-semibold text-gray-900">MongoDB</strong>. I care
        about{" "}
        <strong className="font-semibold text-gray-900">maintainable code</strong>
        , thoughtful user experience, and products that stay easy to grow long
        after the first release.
      </p>

      <button
        type="button"
        onClick={() =>
          document.querySelector("#projects")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="relative z-[1] mt-8 cursor-pointer border-2 border-gray-900 bg-[#B9FF66] px-5 py-2 text-sm uppercase tracking-[0.18em] text-gray-900 shadow-[3px_3px_0_0_#111] transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#111]"
        {...viewWorksRoll.hoverProps}
      >
        <SplitTextHover unit active={viewWorksRoll.active}>
          View Works
        </SplitTextHover>
      </button>
    </div>
  );
}

function AboutStaticLayout() {
  const viewWorksRoll = useRollingHover();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full py-12">
        <h2 className="italic text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-center md:text-left">
          <SplitTextHover className="block">About Me</SplitTextHover>
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-16 items-start">
          <AboutContent viewWorksRoll={viewWorksRoll} />

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm h-[480px] rounded-3xl border-2 border-dashed border-gray-200 relative overflow-hidden">
              <Image
                src={PROFILE_IMAGE}
                alt="Muhammed Sinan"
                fill
                sizes="(max-width: 768px) 92vw, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBentoExperience() {
  const viewWorksRoll = useRollingHover();
  const wrapRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    const wrapElement = wrapRef.current;

    if (!galleryElement || !wrapElement) return;

    let flipCtx;

    const createTween = () => {
      const galleryItems = galleryElement.querySelectorAll(
        `.${styles.galleryItem}`
      );

      flipCtx?.revert();
      galleryElement.classList.remove(styles.galleryFinal);

      flipCtx = gsap.context(() => {
        galleryElement.style.visibility = "hidden";
        galleryElement.classList.add(styles.galleryFinal);
        const flipState = Flip.getState(galleryItems);
        galleryElement.classList.remove(styles.galleryFinal);
        galleryElement.style.visibility = "";

        const flip = Flip.to(flipState, {
          simple: true,
          ease: "expoScale(1, 5)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: galleryElement,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: wrapElement,
            pinSpacing: false,
          },
        });

        tl.add(flip);

        return () => gsap.set(galleryItems, { clearProps: "all" });
      });
    };

    createTween();

    const onResize = () => {
      createTween();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      flipCtx?.revert();
    };
  }, []);

  return (
    <section id="about" className="bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4 md:pt-12">
        <h2 className="italic text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-center md:text-left">
          <SplitTextHover className="block">About Me</SplitTextHover>
        </h2>
      </div>

      <div className={styles.galleryPinSpace}>
        <div ref={wrapRef} className={styles.galleryWrap}>
          <div
            ref={galleryRef}
            id="gallery-about"
            className={`${styles.gallery} ${styles.galleryBento}`}
            aria-label="Profile gallery"
          >
            {TILES.map((tile, index) => (
              <div key={index} className={styles.galleryItem}>
                <img
                  src={tile.src}
                  alt=""
                  aria-hidden="true"
                  width={tile.width}
                  height={tile.height}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: tile.objectPosition }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-20 py-8 pb-16">
        <AboutContent viewWorksRoll={viewWorksRoll} />
      </div>
    </section>
  );
}

export default function About() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  if (prefersReducedMotion) {
    return <AboutStaticLayout />;
  }

  return <AboutBentoExperience />;
}
