"use client";

import React from "react";
import { itSupportProjects } from "../data/portfolio";
import { Wrench, Network, Headphones, ShieldCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ITProjects = () => {
  const getProjectIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "computer maintenance":
        return <Wrench className="text-teal-500" size={20} />;
      case "network installation":
        return <Network className="text-indigo-500" size={20} />;
      case "helpdesk support system":
      case "helpdesk support":
        return <Headphones className="text-emerald-500" size={20} />;
      case "operating system deployment":
        return <ShieldCheck className="text-cyan-500" size={20} />;
      default:
        return <CheckCircle className="text-teal-500" size={20} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  } as const;

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
          IT Support & Operations Projects
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Proyek pemeliharaan perangkat, pemasangan jaringan, dan dukungan infrastruktur perkantoran.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {itSupportProjects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/50 hover:shadow-lg transition-all group"
          >
            {/* Visual Icon Box */}
            <div className="flex-shrink-0">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl group-hover:bg-indigo-500/10 transition-colors">
                {getProjectIcon(project.title)}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
