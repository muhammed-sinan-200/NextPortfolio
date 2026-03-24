"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/mhd-sinan404", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/muhammed-sinan-200", icon: Github },
  { name: "Email", href: "mailto:mhdsinanat20@gmail.com", icon: Mail },
  { name: "Instagram", href: "https://instagram.com/sinanuuo", icon: Instagram },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    emailjs
  .sendForm(
    "service_kf5d8ow",
    "template_qspc7fk",
    e.target,
    "4aKwEsw6XNGFQnPMe"
  )
  .then(
    () => {
      toast.success("I'll get back to you soon!");
      reset();
    },
    (error) => {
      console.log(error);
      toast.error("Please try again.");
    }
  );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Header */}
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gray-400">
                Contact
              </p>

              <h2 className="mt-5 text-5xl md:text-7xl lg:text-[6.5rem] font-extrabold italic uppercase tracking-tight text-black leading-[0.95]">
                Let&apos;s
                <br />
                Connect
              </h2>
            </div>

            <div className="md:pb-3">
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-tight">
                Let’s build something
                <br />
                great together.
              </h3>

              <p className="mt-6 max-w-md text-sm md:text-base text-gray-600 leading-relaxed">
                Got an idea, project, or just want to connect? I’d love to hear
                from you.
              </p>
            </div>
          </div>

          <div className="mt-12 h-px origin-left bg-gradient-to-r from-black via-gray-400 to-transparent" />

          {/* Content */}
          <div className="mt-14 grid w-full gap-10 lg:grid-cols-[280px_1fr]">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">
                Find me here
              </p>

              <div className="flex items-center gap-4">
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
                      className="group p-3 rounded border border-dashed border-black/20 transition bg-[#F8F6F1] hover:border-black hover:bg-black hover:text-white"
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
                href="/MuhammedSinan_Mern_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group mt-5 inline-flex items-center gap-3 px-5 py-3 rounded border border-dashed border-black/20 bg-[#F8F6F1] text-sm font-medium text-black transition duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                View Resume
              </motion.a>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full rounded border border-dashed border-black/20 p-6 md:p-8 bg-[#F8F6F1]"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <input
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Enter your name"
                    className="h-12 rounded border border-dashed bg-white border-black/20 px-4 text-sm outline-none transition focus:border-black"
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
                    className="h-12 rounded border border-dashed bg-white border-black/20 px-4 text-sm outline-none transition focus:border-black"
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
                  className="h-12 rounded border border-dashed bg-white border-black/20 px-4 text-sm outline-none transition focus:border-black"
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
                  className="resize-none rounded border border-dashed bg-white border-black/20 px-4 py-3 text-sm outline-none transition focus:border-black"
                />
                {errors.message && (
                  <span className="text-xs text-red-500">Message is required</span>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden mt-6 px-6 py-3 text-sm bg-white border border-dashed border-black/20 rounded cursor-pointer
                before:absolute before:inset-0 before:bg-black
                before:origin-bottom before:scale-y-0
                before:transition-transform before:duration-300
                hover:before:scale-y-100 hover:text-white"
              >
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}