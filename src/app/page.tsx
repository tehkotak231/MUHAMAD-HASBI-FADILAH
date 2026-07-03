import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { DevSkills } from "../components/DevSkills";
import { ITSupportSkills } from "../components/ITSupportSkills";
import { DevProjects } from "../components/DevProjects";
import { ITProjects } from "../components/ITProjects";
import { Certifications } from "../components/Certifications";
import { Tools } from "../components/Tools";
import { WhyHireMe } from "../components/WhyHireMe";
import { Services } from "../components/Services";
import { Languages } from "../components/Languages";
import { Downloads } from "../components/Downloads";
import { RecruiterSection } from "../components/RecruiterSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="w-full flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3 & 4. Skills Section (Development & IT Support Skills) */}
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Capabilities
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Keahlian & Kompetensi Teknis
              </p>
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-500 to-indigo-500 mt-4 rounded-full" />
            </div>

            {/* Development Skills badge grid */}
            <DevSkills />

            <div className="my-16 border-t border-slate-200/50 dark:border-slate-800/50" />

            {/* IT Support Skills cards */}
            <ITSupportSkills />
          </div>
        </section>

        {/* 6 & 7. Projects Section (Development & IT Projects) */}
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Portfolio Showroom
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Proyek Pilihan & Studi Kasus
              </p>
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-500 to-indigo-500 mt-4 rounded-full" />
            </div>

            {/* Development Projects Cards */}
            <DevProjects />

            <div className="my-16 border-t border-slate-200/50 dark:border-slate-800/50" />

            {/* IT Support Projects Cards */}
            <ITProjects />
          </div>
        </section>

        {/* 8. Certifications Section */}
        <Certifications />

        {/* 9. Tools Section */}
        <Tools />

        {/* 10. Why Hire Me Section */}
        <WhyHireMe />

        {/* 11. Services Section */}
        <Services />

        {/* 12 & 13. Languages and Downloadable Documents */}
        <section id="downloads" className="py-20 bg-slate-100 dark:bg-slate-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Resources
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Bahasa & Berkas Administrasi
              </p>
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-500 to-indigo-500 mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <Languages />
              <Downloads />
            </div>
          </div>
        </section>

        {/* 14. Recruiter Section */}
        <RecruiterSection />
      </main>

      {/* 15. Footer Section */}
      <Footer />
    </>
  );
}
