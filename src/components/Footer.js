"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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

export default function Footer() {
    const handleScroll = (href) => {
        document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative bg-[#F6F4E9] px-6 pt-20 pb-8 md:px-10 lg:px-20 overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-white to-transparent" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />
            <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] items-start">
                <div>
                    <h2 className="mt-5 text-3xl md:text-4xl italic font-extrabold tracking-tight text-black">
                        SinAn.
                    </h2>
                    <p className="mt-5 max-w-sm text-sm md:text-base text-gray-600 leading-relaxed">
                        I build modern web applications that are fast, reliable, and easy to use, with a strong focus on performance, clean code, and a seamless user experience.
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
                                className="w-fit text-left text-sm md:text-base text-gray-700 hover:text-black transition"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm uppercase tracking-[0.24em] text-gray-400">
                        Find me on
                    </h3>

                    <div className="mt-5 flex gap-3">
                        {socialLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="group p-3 rounded-full border border-black/10 transition hover:border-black hover:bg-black hover:text-white"
                                >
                                    <Icon size={18} className="transition group-hover:scale-110" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-center gap-3">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Muhammed Sinan  .All rights reserved.
                </p>

            </div>
        </footer>
    );
}