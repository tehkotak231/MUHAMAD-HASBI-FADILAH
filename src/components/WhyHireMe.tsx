"use client";

import React from "react";
import { whyHireMe } from "../data/portfolio";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

export const WhyHireMe = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  } as const;

  return (
    <section id="why-hire-me" className="py-20 bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Grid */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
          
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Value Proposition
          </p>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-500 to-indigo-500 mt-4 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {whyHireMe.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-lg hover:border-teal-500/30 dark:hover:border-teal-500/25 transition-all group"
            >
              {/* Header Icon */}
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-700 dark:text-slate-300 group-hover:bg-teal-500/10 group-hover:text-teal-500 transition-colors w-fit mb-4">
                <Icon name={item.icon} size={22} />
              </div>

              {/* Title */}
              <h4 className="text-base font-bold text-slate-800 dark:text-white mb-2 group-hover:text-teal-500 transition-colors">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
