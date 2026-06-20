"use client"
import Image from "next/image";
import { useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const blurb = ["MERN STACK DEVELOPER"];

    gsap.to(textRef.current, {
      scrambleText: {
        text: blurb[0],
        chars: "upperAndLowerCase",
        revealDelay: 0.5,
        tweenLength: true,
      },
      duration: 2,
    });
  }, []);

 

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 w-full mt-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="text-left">
            <p ref={textRef} className="text-sm text-black/40 tracking-[0.25em] uppercase sm:text-sm">MERN STACK DEVELOPER</p>
            <h1 className="font-raleway text-3xl md:text-6xl font-medium leading-tight tracking-tight text-gray-900">
              Crafting thoughtful <span className="italic">designs</span> for modern products,
            </h1>

            <p className="mt-6 text-md text-gray-500 max-w-lg leading-relaxed">
              I design and build refined, intuitive interfaces with a strong focus on clarity and performance.
              Every decision is intentional — ensuring seamless interactions and a cohesive{" "}

              <span className="relative inline-block py-2 px-4">
                <span className="relative z-10">user experience</span>

                <svg
                  className="absolute left-0 top-0 -translate-y-1 w-full h-full pointer-events-none overflow-visible"
                  viewBox="0 0 100 60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="
                        M5 28
                        C 20 0, 80 0, 95 25
                        C 105 50, 75 65, 50 65
                        C 20 65, -5 50, 5 28
                        C 10 10, 85 5, 95 30
                      "
                    stroke="black"
                    strokeWidth="2.4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    className="animate-[drawCircle_1.2s_ease-out_forwards]"
                  />
                </svg>
              </span>
            </p>

            {/* <div className=" mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-black text-white text-sm rounded-full transition"
              >
                View Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 text-sm rounded-full hover:bg-gray-100 transition"
              >
                Contact
              </a>
            </div> */}
          </div>

            {/* <div className="hidden md:flex justify-center items-center">
  <motion.div
    className="relative w-48 h-48  md:w-58 md:h-58 cursor-grab"
    initial={{ opacity: 0, x: 100, rotate: -15 }}
    animate={{ opacity: 1, x: 0, rotate: -10 }}
    transition={{ duration: .2, ease: "easeOut" }}
    whileHover={{ rotate: 0, scale: 1.05 }}
  >
    <Image
      src="/my-img3.jpeg"
      alt="Your Name"
      fill
      className="object-cover rounded-2xl shadow-2xl"
    />
  </motion.div>
</div> */}

        </div>
      </div>
    </section>
  );
}