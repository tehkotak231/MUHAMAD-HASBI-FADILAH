"use client";

import React from "react";
import { itSupportSkills } from "../data/portfolio";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

export const ITSupportSkills = () => {
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
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <div>
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
        IT Support & Systems Competencies
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {itSupportSkills.map((category) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/50 hover:shadow-lg transition-all group"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 group-hover:bg-indigo-500/10 group-hover:text-indigo-500 transition-colors">
                <Icon name={category.icon} size={22} />
              </div>
              <h4 className="font-bold text-base text-slate-850 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                {category.category}
              </h4>
            </div>

            {/* Description */}
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed flex-grow">
              {category.description}
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-655 dark:text-slate-350 text-[10px] font-semibold border border-slate-200/60 dark:border-slate-800/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
