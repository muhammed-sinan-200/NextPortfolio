"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { pixelify } from "../fonts";
import SplitTextHover from "./SplitTextHover";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mhd-sinan404",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/muhammed-sinan-200",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:mhdsinanat20@gmail.com",
    icon: Mail,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sinanuuo",
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919526095873",
    icon: FaWhatsapp,
  },
];

const pixel3dStyle = {
  color: "#B9FF66",
  WebkitTextStroke: "0.07em #111111",
  paintOrder: "stroke fill",
  textShadow:
    "0.05em 0.05em 0 #4A7A12, 0.09em 0.09em 0 #4A7A12, 0.13em 0.13em 0 #111111",
};

export default function Footer() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-white px-6 pt-20 pb-8 md:px-10 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-20 left-[-8%] h-72 w-72 rounded-full bg-[#B9FF66] blur-3xl opacity-20" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#B9FF66] blur-3xl opacity-25" />
        <span className="absolute top-8 left-4 h-3 w-3 bg-[#B9FF66] sm:left-8" />
        <span className="absolute top-8 left-8 h-2 w-2 bg-gray-900 sm:left-12" />
        <span className="absolute top-8 right-4 h-3 w-3 bg-[#B9FF66] sm:right-8" />
        <span className="absolute top-8 right-8 h-2 w-2 bg-gray-900 sm:right-12" />
      </div>

      <div className="relative grid items-start gap-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2
            className={`${pixelify.className} mt-5 text-3xl font-bold uppercase tracking-wide text-black md:text-4xl`}
            style={pixel3dStyle}
          >
            SinAn.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-[1.85] text-neutral-900 md:text-base">
            I build modern web applications that are fast, reliable, and easy to
            use, with a strong focus on performance, clean code, and a seamless
            user experience.
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.24em] text-gray-400">
            Quick Links
          </h3>
          <div className="mt-5 flex flex-col gap-3">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="w-fit text-left text-sm text-gray-700 transition hover:text-black md:text-base"
              >
                <SplitTextHover>{link.name}</SplitTextHover>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.24em] text-gray-400">
            Find me on
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group border-2 border-gray-900 bg-white p-3 text-gray-900 shadow-[2px_2px_0_0_#111] transition-[background-color,box-shadow,transform] duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#B9FF66] hover:shadow-[1px_1px_0_0_#111]"
                >
                  <Icon
                    size={18}
                    className="transition group-hover:scale-110"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-16 flex flex-col items-center justify-center gap-3 border-t-2 border-gray-900 pt-6 md:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Muhammed Sinan  .All rights reserved.
        </p>
      </div>
    </footer>
  );
}
