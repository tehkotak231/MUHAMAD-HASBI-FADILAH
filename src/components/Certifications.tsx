"use client";

import React from "react";
import { certifications } from "../data/portfolio";
import { Award, CheckCircle2, Circle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Certifications = () => {
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
    <section id="certifications" className="py-20 bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Grid */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Credentials
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Sertifikasi
          </p>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-500 to-indigo-500 mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-3 flex items-center justify-center gap-1.5 max-w-md mx-auto">
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-950 border ${
                cert.obtained
                  ? "border-teal-500/30 dark:border-teal-500/20 hover:border-teal-500/50 hover:shadow-teal-500/5"
                  : "border-slate-200 dark:border-slate-800/80 opacity-70 hover:opacity-100"
              } shadow-md flex flex-col hover:shadow-lg transition-all relative overflow-hidden group`}
            >
              {/* Corner Watermark stamp */}
              <div className="absolute -right-4 -bottom-4 text-slate-100 dark:text-slate-900/50 group-hover:scale-110 transition-transform pointer-events-none">
                <Award size={96} />
              </div>

              {/* Status Header Badge */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-350">
                  <Award size={20} className={cert.obtained ? "text-teal-500" : "text-slate-400"} />
                </span>
                
                {cert.obtained ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 size={10} />
                    Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 px-2 py-0.5 rounded-full">
                    <Circle size={10} />
                    Rencana / Proses
                  </span>
                )}
              </div>

              {/* Certificate Content */}
              <div className="flex-grow relative z-10">
                <h4 className="text-base font-bold text-slate-800 dark:text-white leading-snug group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors mb-1">
                  {cert.name}
                </h4>
                <p className="text-slate-500 dark:text-slate-450 text-xs font-semibold">
                  Penerbit: {cert.issuer}
                </p>
              </div>

              {/* Action Link */}
              {cert.obtained && cert.verificationLink ? (
                <div className="mt-6 relative z-10 pt-4 border-t border-slate-100 dark:border-slate-850">
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-500 transition-colors"
                  >
                    Verifikasi Sertifikat &rarr;
                  </a>
                </div>
              ) : (
                <div className="mt-6 relative z-10 pt-4 border-t border-slate-100 dark:border-slate-850 text-xxs text-slate-400 italic">
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
