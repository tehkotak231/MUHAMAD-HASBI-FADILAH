"use client";

import React from "react";
import { tools } from "../data/portfolio";
import { Wrench, Code2, ShieldAlert, Monitor, Check } from "lucide-react";
import { motion } from "framer-motion";

export const Tools = () => {
  const getToolCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "development":
        return "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20";
      case "design":
        return "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20";
      case "it operations":
        return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20";
      default:
        return "bg-slate-100 text-slate-700 dark:text-slate-400 border-slate-200";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  } as const;

  return (
    <section id="tools" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Grid */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Workspaces
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Software & Peralatan Kerja Harian
          </p>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-500 to-indigo-500 mt-4 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-slate-350 dark:hover:border-slate-750 transition-all text-center group"
            >
              {/* Tool icon / layout indicator */}
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full border ${getToolCategoryColor(tool.category)}`}>
                  {tool.category === "it operations" ? "Ops" : tool.category}
                </span>
                <Check className="text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
              </div>

              {/* Tool Name */}
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 text-left mt-2 group-hover:text-teal-500 transition-colors">
                {tool.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
