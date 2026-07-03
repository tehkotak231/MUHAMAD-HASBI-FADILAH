"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "../data/portfolio";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowDownRight, FileText } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export const Hero = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-400 text-xs font-semibold tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              FreshGraduated Informatics Engineering
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-none"
            >
              Halo, Saya{" "}
              <span className="text-gradient font-black">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-350 mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-655 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {personalInfo.subTitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#downloads"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-teal-600/20 hover:-translate-y-0.5"
              >
                <FileText size={18} />
                Unduh CV / Dokumen
              </a>
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <Phone size={18} />
                Hubungi via WhatsApp
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-450 uppercase tracking-widest hidden sm:inline">
                Socials:
              </span>
              <div className="flex gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.socials.email}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all hover:scale-105"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Picture Area */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              variants={itemVariants}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Spinning borders/glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse pointer-events-none" />
              <div className="absolute inset-2 rounded-full border border-dashed border-teal-500/40 dark:border-teal-500/20 animate-[spin_40s_linear_infinite]" />
              
              {/* Outer border glow wrapper */}
              <div className="w-full h-full p-2.5 rounded-full bg-gradient-to-tr from-teal-400 to-indigo-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-900 relative">
                  {/* Fallback avatar visual if avatar image doesn't exist */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-850 to-slate-950 text-white p-4">
                    <span className="text-6xl font-black tracking-wider text-teal-400">MHF</span>
                    <span className="text-xs uppercase tracking-widest text-slate-400 mt-2">Dev & Support</span>
                  </div>
                  {/* Image with next/image */}
                  {/* TODO: Jika sudah ada file foto Anda, aktifkan Tag Image di bawah ini dan hapus fallback div */}
                  {/*
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  */}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave bottom separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] text-slate-100 dark:text-slate-900 fill-current">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V30.28C1122.39,48.24,1051.11,110.19,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};
