"use client";

import React from "react";
import { devSkills } from "../data/portfolio";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

export const DevSkills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  } as const;

  return (
    <div className="mb-16">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
        Development & Programming Skills
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {devSkills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-teal-500/50 hover:shadow-md transition-all group cursor-default"
          >
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 group-hover:bg-teal-500/10 group-hover:text-teal-500 transition-colors">
              <Icon name={skill.icon} size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-white">
                {skill.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
