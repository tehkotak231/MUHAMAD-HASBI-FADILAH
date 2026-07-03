"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolio";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="relative bg-slate-900 text-slate-400 py-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-white">
            {personalInfo.name}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-450 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-455 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personalInfo.socials.email}
            className="p-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-455 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={personalInfo.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-455 hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white shadow-lg transition-all hover:scale-110 z-40"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};
