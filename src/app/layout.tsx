import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Hasbi | Web Developer & IT Support Specialist",
  description: "Portofolio  Muhammad Hasbi Fadilah- Menggabungkan keahlian Software Development (React, Next.js, Laravel) dan IT Support Systems (Networking, Troubleshooting, Sysadmin).",
  keywords: [
    "Muhammad Hasbi Fadilah",
    "Full Stack Developer",
    "IT Support Specialist",
    "Helpdesk",
    "Technical Support",
    "Web Developer Indonesia",
    "Next.js Developer",
    "Laravel Developer",
    "Troubleshooting Jaringan",
    "Mikrotik Winbox",
    "Active Directory Support"
  ],
  authors: [{ name: "Muhammad Hasbi FADILAH" }],
  openGraph: {
    title: "Muhammad Hasbi | Web Developer & IT Support Specialist",
    description: "Portofolio profesional yang mengintegrasikan keahlian Software Development dan IT Systems Support.",
    url: "https://porto-hasbi.vercel.app", 
    siteName: "Muhammad Hasbi Fadilah",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hasbi | Web Developer & IT Support Specialist",
    description: "Portofolio profesional yang mengintegrasikan keahlian Software Development dan IT Systems Support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flicker Dark/Light theme resolver script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
