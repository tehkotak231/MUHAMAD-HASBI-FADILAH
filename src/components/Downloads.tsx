"use client";

import React from "react";
import { personalInfo } from "../data/portfolio";
import { FileText, FileDown, Download, AlertCircle } from "lucide-react";

export const Downloads = () => {
  // Document configurations linking to public paths
  const documents = [
    {
      title: "Curriculum Vitae (CV)",
      desc: "Profil lengkap profesional, riwayat karir, dan keahlian teknis.",
      link: personalInfo.cvLink,
      filename: "CV-Muhammad-Hasbi.pdf",
    },
    {
      title: "Certificate CCNAv7",
      desc: "Resume ringkas 1-halaman untuk referensi cepat rekrutmen.",
      link: personalInfo.resumeLink,
      filename: "Resume-Muhammad-Hasbi.pdf",
    },
    {
      title: "Junior Web Programmer",
      desc: "Dokumentasi cetak proyek aplikasi web dan troubleshoot hardware.",
      link: personalInfo.portfolioPdf,
      filename: "Portfolio-Muhammad-Hasbi.pdf",
    },
  ];

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-md h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
        <FileDown className="text-teal-500" size={20} />
        Download Center
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
        Unduh berkas administrasi dan portofolio cetak untuk kebutuhan rekrutmen.
      </p>

      <div className="space-y-4 flex-grow">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 hover:border-teal-500/30 transition-all group"
          >
            <div className="flex gap-3 items-start mr-4">
              <div className="p-2 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-455 rounded-lg border border-slate-200/60 dark:border-slate-800/80 group-hover:text-teal-500 transition-colors">
                <FileText size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-800 dark:text-slate-100 leading-snug">
                  {doc.title}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-450 mt-0.5 leading-normal">
                  {doc.desc}
                </p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href={doc.link}
              download={doc.filename}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white text-slate-600 dark:text-slate-400 transition-all"
              title="Unduh File"
            >
              <Download size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
