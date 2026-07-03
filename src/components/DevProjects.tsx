"use client";

import React from "react";
import { devProjects } from "../data/portfolio";
import { ExternalLink, Code2, Folder } from "lucide-react";
import { Github } from "./BrandIcons";
import { motion } from "framer-motion";
import Image from "next/image";

export const DevProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
            Web & Mobile Development Projects
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Kumpulan proyek perangkat lunak dan aplikasi web yang saya rancang dan bangun.
          </p>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {devProjects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex flex-col rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-md hover:shadow-lg transition-all group"
          >
            {/* Visual Header (Next.js Image or Fallback IDE Terminal Visual) */}
            <div className="h-48 relative bg-slate-900 flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800/85">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={idx < 2}
                />
              ) : (
                /* Fallback IDE Visual - default preview representation */
                <div className="absolute inset-0 bg-slate-950 p-4 flex flex-col font-mono text-xs select-none">
                  <div className="flex items-center gap-1.5 border-b border-slate-800/50 pb-2 mb-2 text-slate-500 text-[10px]">
                    <Folder size={10} className="text-amber-500" />
                    <span>{project.title.toLowerCase().replace(/\s+/g, "-")}</span>
                    <div className="ml-auto flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                  </div>
                  <div className="text-slate-450 leading-relaxed overflow-hidden">
                    <span className="text-indigo-400">const</span> <span className="text-blue-400">ProjectDetails</span> = () =&gt; &#123; <br />
                    &nbsp;&nbsp;<span className="text-emerald-400"></span> <br />
                    &nbsp;&nbsp;<span className="text-indigo-400">return</span> (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-pink-400">div</span> <span className="text-amber-400">className</span>=<span className="text-teal-400">&quot;portfolio-card&quot;</span>&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-teal-400">h1</span>&gt;&#123;{project.title}&#125;&lt;/<span className="text-teal-400">h1</span>&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-pink-400">div</span>&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &#125;
                  </div>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-550 dark:text-slate-400 text-[10px] font-semibold tracking-wider uppercase border border-slate-200/50 dark:border-slate-800/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-slate-855 dark:text-slate-100 mb-2 group-hover:text-teal-500 transition-colors">
                {project.title}
              </h4>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-slate-850 pt-4">
                
                
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
