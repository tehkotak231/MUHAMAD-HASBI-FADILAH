"use client";

import React from "react";
import { languages } from "../data/portfolio";
import { Star, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export const Languages = () => {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-md h-full">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
        <Globe2 className="text-teal-500" size={20} />
        Bahasa & Bahasa Asing
      </h3>

      <div className="space-y-6">
        {languages.map((lang, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                  {lang.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {lang.level}
                </p>
              </div>
              
              {/* Star Rating */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < lang.rating
                        ? "text-amber-500 fill-amber-500"
                        : "text-slate-200 dark:text-slate-800"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(lang.rating / 5) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
