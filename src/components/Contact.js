"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { pixelify } from "../fonts";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SplitTextHover, { useRollingHover } from "./SplitTextHover";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/mhd-sinan404", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/muhammed-sinan-200", icon: Github },
  { name: "Email", href: "mailto:mhdsinanat20@gmail.com", icon: Mail },
  { name: "Instagram", href: "https://instagram.com/sinanuuo", icon: Instagram },
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

const ctaClass =
  "inline-flex cursor-pointer items-center gap-3 border-2 border-gray-900 px-5 py-3 text-sm uppercase tracking-[0.18em] text-gray-900 shadow-[3px_3px_0_0_#111] transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#111] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60";

const fieldClass =
  "h-12 w-full border-2 border-gray-900 bg-white px-4 text-sm text-gray-900 outline-none transition focus:shadow-[2px_2px_0_0_#111]";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resumeRoll = useRollingHover();
  const submitRoll = useRollingHover();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        toast.error("Please try again.");
        return;
      }

      toast.success("I'll get back to you soon!");
      reset();
    } catch {
      toast.error("Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gray-600">
                Contact
              </p>

              <h2
                className={`${pixelify.className} mt-5 max-w-full rotate-[-1.5deg] text-[clamp(1.5rem,6vw,3.6rem)] font-bold uppercase leading-[1.08] tracking-wide`}
                style={pixel3dStyle}
              >
                <SplitTextHover className="block">
                  Let&apos;s
                  <br />
                  Connect
                </SplitTextHover>
              </h2>
            </div>

            <div className="md:pb-3">
              <h3 className="text-4xl font-medium leading-tight tracking-tight text-black md:text-5xl">
                Let’s build something
                <br />
                great together.
              </h3>

              <p className="mt-6 max-w-md text-sm leading-[1.85] text-neutral-900 md:text-base">
                Got an idea, project, or just want to connect? I’d love to hear
                from you.
              </p>
            </div>
          </div>

          <div className="mt-12 h-px origin-left bg-gray-900" />

          <div className="mt-14 grid w-full gap-10 lg:grid-cols-[280px_1fr]">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Find me here
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-label={item.name}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group border-2 border-gray-900 bg-white p-3 text-gray-900 shadow-[2px_2px_0_0_#111] transition-[background-color,box-shadow,transform] duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#B9FF66] hover:shadow-[1px_1px_0_0_#111]"
                    >
                      <Icon
                        size={20}
                        className="transition group-hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>

              <motion.a
                href="/Muhammed_Sinan_MERN-Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaClass} mt-5 bg-white hover:bg-[#B9FF66]`}
                {...resumeRoll.hoverProps}
              >
                <SplitTextHover unit active={resumeRoll.active}>
                  View Resume
                </SplitTextHover>
              </motion.a>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative w-full border-2 border-gray-900 bg-white p-6 shadow-[3px_3px_0_0_#111] md:p-8"
            >
              <span
                className="absolute top-2 left-2 h-2 w-2 bg-[#B9FF66]"
                aria-hidden="true"
              />

              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
              >
                <label htmlFor="website">Website</label>
                <input
                  {...register("website")}
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <input
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Enter your name"
                    className={fieldClass}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500">Name is required</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className={fieldClass}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">Valid email required</span>
                  )}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <input
                  {...register("subject", { required: true })}
                  name="subject"
                  placeholder="What’s this about?"
                  className={fieldClass}
                />
                {errors.subject && (
                  <span className="text-xs text-red-500">Subject is required</span>
                )}
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <textarea
                  {...register("message", { required: true })}
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  className={`${fieldClass} h-auto resize-none py-3`}
                />
                {errors.message && (
                  <span className="text-xs text-red-500">Message is required</span>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`${ctaClass} mt-6 bg-[#B9FF66]`}
                {...(isSubmitting ? {} : submitRoll.hoverProps)}
              >
                <span>
                  <SplitTextHover
                    unit
                    active={isSubmitting ? false : submitRoll.active}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </SplitTextHover>
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
