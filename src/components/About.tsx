"use client";

import React from "react";
import { aboutMe } from "../data/portfolio";
import { motion } from "framer-motion";
import { ShieldCheck, Code, Award, Server } from "lucide-react";

export const About = () => {
  const stats = [
    {
      label: "",
      value: "",
      icon: <Award className="text-teal-500" size={24} />,
      desc: "Gabungan Dev & IT Support",
    },
    {
      label: "",
      value: "",
      icon: <Code className="text-indigo-500" size={24} />,
      desc: "Web & Mobile App",
    },
    {
      label: "",
      value: "",
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      desc: "Troubleshooting ",
    },
    {
      label: "",
      value: "",
      icon: <Server className="text-cyan-500" size={24} />,
      desc: "Workstation & Jaringan",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Grid */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            About Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            M HASBI FADILAH
          </p>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-500 to-indigo-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Stats */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all"
                >
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl mb-4">
                    {stat.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-350 mt-1">
                    {stat.label}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-450 mt-0.5">
                    {stat.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Texts */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Penyelarasan Antara Kreativitas Kode dan Ketangguhan Sistem
              </h3>
              
              <div className="space-y-4 text-slate-655 dark:text-slate-350 leading-relaxed text-base">
                {aboutMe.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Unique hybrid selling proposition */}
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
