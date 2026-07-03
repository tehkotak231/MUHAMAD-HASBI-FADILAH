"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolio";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    }
  }, []);

  // Monitor scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#recruiter" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-colors">
                {personalInfo.name.split(" ")[0]}
                <span className="text-teal-500 dark:text-teal-400">.dev</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 font-medium text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-6">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Direct WhatsApp CTA */}
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-md hover:shadow-teal-500/20"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Mobile Menu Button / Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-850 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-teal-600 dark:hover:text-teal-400 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-850 flex flex-col gap-3">
                <a
                  href={personalInfo.cvLink}
                  download
                  className="w-full text-center bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-850 transition-colors"
                >
                  Download CV
                </a>
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-teal-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-teal-500 transition-colors"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
