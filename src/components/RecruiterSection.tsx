"use client";

import React from "react";
import { personalInfo, recruiterBadges } from "../data/portfolio";
import { Briefcase, Send, MessageSquare, Mail } from "lucide-react";
import { Linkedin } from "./BrandIcons";
import { motion } from "framer-motion";

export const RecruiterSection = () => {
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "success":
        return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20";
      case "info":
        return "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20";
      case "warning":
        return "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20";
      case "primary":
        return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20";
      case "danger":
        return "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20";
      default:
        return "bg-slate-100 text-slate-700 dark:text-slate-400 border-slate-200";
    }
  };

  return (
    <section id="recruiter" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-lg relative overflow-hidden text-center"
        >
          {/* Decorative gradients */}
          <div className="absolute -left-16 -top-16 w-48 h-48 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Section icon */}
          <div className="inline-flex items-center justify-center p-4 bg-teal-500/10 text-teal-655 dark:text-teal-400 rounded-2xl mb-6 relative z-10">
            <Briefcase size={28} />
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 relative z-10">
            Contact
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto mb-8 relative z-10 leading-relaxed">
Saya terbuka untuk berbagai kolaborasi. Baik itu dalam pekerjaan purna waktu (full-time) untuk sebuah tim, atau pekerja paruh waktu (part-time) untuk mengerjakan proyek tertentu. Saya akan senang mendengarnya.

Kotak masuk saya selalu terbuka. Mari kita diskusikan bagaimana kita bisa menciptakan sesuatu yang luar biasa bersama-sama.          </p>

          {/* Badges Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 relative z-10 max-w-2xl mx-auto">
            {recruiterBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`px-4 py-1.5 rounded-full border text-xs font-bold tracking-wide uppercase transition-all hover:scale-105 select-none ${getBadgeStyle(
                  badge.type
                )}`}
              >
                ✔ {badge.label}
              </span>
            ))}
          </div>

          <div className="w-full h-px bg-slate-100 dark:bg-slate-850 mb-10 relative z-10" />

          {/* CTA Channels */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={personalInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5"
            >
              <MessageSquare size={16} />
              Hubungi via WhatsApp
            </a>
            
            <a
              href={personalInfo.socials.email}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Kirim Email Bisnis
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold px-6 py-3.5 rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
            >
              <Linkedin size={16} />
              Koneksi LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
