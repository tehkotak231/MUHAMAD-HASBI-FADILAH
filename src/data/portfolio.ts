// TODO: Ganti data di bawah ini dengan data pribadi Anda

export const personalInfo = {
  name: "MUHAMAD HASBI FADILAH", 
  title: "Web Developer & IT Support Specialist",
  subTitle: "Bridging the gap between software development and enterprise IT systems. Building robust web applications while ensuring seamless technical operations.",
  avatar: "/images/avatar.webp", // TODO: Ganti dengan foto Anda di public/images/avatar.webp
  cvLink: "/documents/cv-placeholder.pdf", // TODO: Ganti dengan file CV asli Anda di public/documents/
  resumeLink: "/documents/resume-placeholder.pdf", // TODO: Ganti dengan file Resume asli Anda di public/documents/
  portfolioPdf: "/documents/portfolio-placeholder.pdf", // TODO: Ganti dengan file Portfolio PDF asli
  certificatesPdf: "/documents/certificates-placeholder.pdf", // TODO: Ganti dengan gabungan sertifikat PDF
  transcriptPdf: "/documents/transcript-placeholder.pdf", // TODO: Ganti dengan transkrip nilai PDF
  socials: {
    github: "https://github.com/tehkotak231/", // TODO: Ganti dengan link GitHub Anda
    linkedin: "https://www.linkedin.com/in/m-hasbi-fadilah-9758b129a?utm_source=share_via&utm_content=profile&utm_medium=member_android", // TODO: Ganti dengan link LinkedIn Anda
    email: "mailto:hasbifadhilah2000@gmail.com", // TODO: Ganti dengan email Anda
    whatsapp: "https://wa.me/6285353208617", // TODO: Ganti dengan nomor WhatsApp Anda (format internasional, tanpa + atau 0 di depan 62)
  },
};

export const aboutMe = {
  paragraphs: [
    "Saya adalah seorang fresh graduated informatics engineering yang menggabungkan keahlian Software Development dan IT Support. Dengan latar belakang yang kuat dalam membangun aplikasi web modern menggunakan React, Next.js, PHP, dan Laravel, saya juga memiliki pemahaman mendalam tentang manajemen infrastruktur IT, pemecahan masalah hardware/software, administrasi sistem, dan troubleshooting jaringan.",
    "Sebagai developer, saya berfokus pada penulisan kode yang bersih, efisien, dan mudah dipelihara. Sebagai spesialis IT Support, saya berorientasi pada kepuasan pengguna (user satisfaction), penyelesaian masalah secara cepat (quick troubleshooting), dan kepatuhan terhadap Service Level Agreement (SLA). Kombinasi unik ini memungkinkan saya melihat masalah teknologi dari kedua sisi: bagaimana sistem dibangun dan bagaimana sistem dijalankan serta dipelihara di lingkungan nyata.",
  ],
};

export const devSkills = [
  { name: "HTML", icon: "Html5" },
  { name: "CSS", icon: "Css3" },
  { name: "JavaScript", icon: "Js" },
  { name: "TypeScript", icon: "TypeScript" },
  { name: "PHP", icon: "Php" },
  { name: "Laravel", icon: "Laravel" },
  { name: "React", icon: "React" },
  { name: "Next.js", icon: "Nextjs" },
  { name: "Flutter", icon: "Flutter" },
  { name: "Firebase", icon: "Firebase" },
  { name: "MySQL", icon: "Database" },
  { name: "Git", icon: "GitBranch" },
  { name: "REST API", icon: "Cpu" },
];

export const itSupportSkills = [
  {
    category: "Operating Systems",
    icon: "Monitor",
    skills: ["Windows 10/11", "Windows Server"],
    description: "Instalasi, konfigurasi, optimasi performa, dan manajemen lisensi OS."
  },
  {
    category: "Hardware",
    icon: "Cpu",
    skills: ["PC Assembly", "Laptop Troubleshooting", "Printer Installation", "Hardware Diagnostics", "RAM & SSD Upgrade", "BIOS Configuration"],
    description: "Perakitan komputer desktop, perbaikan laptop, upgrade komponen, dan pemeliharaan printer."
  },
  {
    category: "Networking",
    icon: "Network",
    skills: [ "WiFi Troubleshooting", "Router Configuration", "Switch Configuration", "Network Sharing"],
    description: "Perancangan jaringan lokal, konfigurasi perangkat jaringan, pembagian hak akses sharing, dan troubleshoot koneksi."
  },
  {
    category: "Software",
    icon: "FileCode",
    skills: ["Microsoft Office", "Microsoft Outlook", "Google Workspace", "Remote Desktop", "TeamViewer", "Zoom", "Microsoft Teams"],
    description: "Konfigurasi email client, aplikasi kolaborasi, dan utilitas remote assistance."
  },
  {
    category: "System Administration",
    icon: "Server",
    skills: ["User Management", "Active Directory (Basic)", "File Sharing", "Windows Permissions", "Backup & Restore", "Disk Management"],
    description: "Manajemen kredensial pengguna, pengaturan hak akses folder/sharing, dan strategi backup data berkala."
  },
  {
    category: "Security",
    icon: "ShieldAlert",
    skills: ["Antivirus Installation", "Malware Removal", "Firewall Configuration", "BitLocker", "Windows Security"],
    description: "Perlindungan data dari ancaman virus, konfigurasi enkripsi disk, serta pengaturan keamanan jaringan."
  },
  {
    category: "Helpdesk",
    icon: "Headphones",
    skills: [ "Incident Management", "Problem Solving", "Documentation", "User Training", "Customer Service", "SLA Awareness"],
    description: "Pemberian solusi kendala IT bagi end-user secara terstruktur, ramah, dan sesuai dengan target waktu resolusi."
  },
  {
    category: "Cloud",
    icon: "Cloud",
    skills: ["Google Drive", "OneDrive", "Dropbox", "Basic Microsoft 365"],
    description: "Manajemen penyimpanan awan, backup data otomatis ke cloud, dan kolaborasi online."
  }
];

export const itSupportTimeline = [
  {
    period: "2025 - Sekarang",
    title: "Web Developer ",
    company: "",
    description: "Menyediakan layanan ganda berupa pengembangan situs web profil/e-commerce serta pemeliharaan infrastruktur komputer kantor secara berkala. Berhasil mengatasi puluhan isu jaringan dan troubleshooting hardware."
  },
  {
    period: "2022 - 2024",
    title: "IT Helpdesk Support",
    company: "PT. Tekno Solusindo Utama (Placeholder)", // TODO: Ganti dengan nama instansi/perusahaan Anda
    description: "Mengelola akun Active Directory, melakukan instalasi & deploy sistem operasi Windows secara massal, merawat printer."
  },
  {
    period: "2020 - 2022",
    title: "Technical Support Assistant",
    company: "Universitas / Lab Komputer (Placeholder)", // TODO: Ganti dengan nama instansi/sekolah/kuliah Anda
    description: "Membantu administrator jaringan dalam merakit komputer laboratorium, melakukan instalasi software perkuliahan, melakukan update OS, serta membersihkan malware/virus di komputer mahasiswa."
  }
];

export const itSupportProjects = [
  {
    title: "Computer Maintenance",
    description: "Preventive maintenance berkala komputer: pembersihan fisik (cleaning dust), update software/OS patch, scan antivirus, serta diagnostik hardware (kesehatan RAM & SSD)."
  },
  {
    title: "Network Installation",
    description: "Merancang dan memasang instalasi jaringan lokal (LAN)."
  },
  {
    title: "Helpdesk Support System",
    description: "Memberikan dukungan teknis harian bagi end user (lokal maupun remote via TeamViewer). Melacak kendala hardware, software, VPN, konfigurasi email Outlook, dan memastikan waktu resolusi sesuai SLA."
  },
  {
    title: "Operating System Deployment",
    description: "Instalasi & konfigurasi sistem operasi Windows 10/11 Pro secara bersih, instalasi driver yang kompatibel, instalasi Microsoft Office, antivirus, serta enkripsi BitLocker untuk keamanan data perusahaan."
  }
];

export const devProjects = [
  {
    title: "PEMBANGUNAN APLIKASI FUTSALGO!",
    description: "Aplikasi FUTSALGO! adalah platform media sosial bagi pencinta olahraga futsal, yang dirancang untuk mengatasi permasalahan  umum seperti: mencari pemain untuk mengisi kekurangan tim, mencari lapangan yang tersedia dan melakukan booking lapangan",
    tech: ["Flutter", "dart", "FireBase", "Laravel", "PHP,SQL"],
    image: "/images/futsalgo.png"
  },
  {
    title: "murmerdigital",
    description: "murmer digital adalah sebuah platform website jasa pembuatan undangan online yang menyediakan template undangan, seperti undangan pernikahan, ulang tahun, syukuran dan khitanan.",
    tech: ["Laravel", "PHP", "Bootstrap", "MySQL", "REST API"],
    image: "/images/murmer.jpg"
  },
];

export const certifications = [
  {
    name: "CCNAv7 Switching, Routing, and Wireless Essentials",
    issuer: "Cico Networking Academy",
    obtained: true, 
    verificationLink: "https://www.linkedin.com/in/m-hasbi-fadilah-9758b129a/overlay/Certifications/2088122572/treasury/?profileId=ACoAAEhkRykBllxDwiXdzwRatYCbfVYD2jmsriU",
  },
  {
    name: "Junior Web Programmer",
    issuer: "Lembaga Sertifikasi Profesi Teknologi Digital",
    obtained: true, 
    verificationLink: "https://www.linkedin.com/in/m-hasbi-fadilah-9758b129a/overlay/Certifications/2088122572/treasury/?profileId=ACoAAEhkRykBllxDwiXdzwRatYCbfVYD2jmsriU",
  },
  
];

export const tools = [
  { name: "VS Code", category: "Development" },
  { name: "Git", category: "Development" },
  { name: "GitHub", category: "Development" },
  { name: "Postman", category: "Development" },
  { name: "XAMPP", category: "Development" },
  { name: "Laragon", category: "Development" },
  { name: "MySQL Workbench", category: "Development" },
  { name: "Android Studio", category: "Development" },
  { name: "Figma", category: "Design" },
  { name: "Microsoft Office", category: "IT Operations" },
  { name: "TeamViewer", category: "IT Operations" },
  { name: "VirtualBox", category: "IT Operations" },
];

export const whyHireMe = [
  {
    title: "Strong Problem Solving",
    description: "Mampu menganalisis akar penyebab masalah teknis secara logis, baik di tingkat baris kode program maupun kegagalan perangkat keras.",
    icon: "Search"
  },
  {
    title: "Fast Learner",
    description: "Mampu beradaptasi dengan cepat terhadap framework pemrograman baru maupun pembaruan sistem operasi dan teknologi jaringan teranyar.",
    icon: "Zap"
  },
  {
    title: "Team Collaboration",
    description: "Berpengalaman bekerja dalam tim developer maupun berkoordinasi lintas divisi untuk menyelesaikan kendala infrastruktur IT.",
    icon: "Users"
  },
  {
    title: "Good Communication",
    description: "Mampu menjelaskan istilah teknis yang rumit menjadi penjelasan sederhana yang mudah dimengerti oleh pengguna non-teknis.",
    icon: "MessageSquare"
  },
  {
    title: "Customer-Oriented",
    description: "Menempatkan kepuasan pengguna akhir sebagai prioritas utama saat melayani keluhan helpdesk dan memastikan downtime minimal.",
    icon: "Heart"
  },
  {
    title: "Detail-Oriented",
    description: "Teliti dalam mendiagnosis bug software serta melakukan inventarisasi aset hardware dan dokumentasi konfigurasi jaringan.",
    icon: "CheckCircle"
  },
  {
    title: "Able to Work Under Pressure",
    description: "Tetap tenang dan terstruktur dalam mencari solusi saat menghadapi pemadaman sistem jaringan darurat (emergency downtime) atau tenggat waktu rilis aplikasi.",
    icon: "Shield"
  },
  {
    title: "Quick Troubleshooting",
    description: "Menguasai metode diagnostik terukur untuk mendeteksi error software, kerusakan hardware PC/laptop, dan masalah konektivitas internet.",
    icon: "Settings"
  },
  {
    title: "Adaptable",
    description: "Siap bekerja dalam skema WFO (Work from Office), WFH/Remote, maupun Hybrid dengan fleksibilitas tinggi.",
    icon: "RefreshCw"
  },
  {
    title: "Continuous Learning",
    description: "Secara aktif mempelajari modul-modul sertifikasi internasional (seperti CompTIA/Cisco/Microsoft) untuk memvalidasi kompetensi IT.",
    icon: "GraduationCap"
  }
];

export const services = [
  {
    title: "Web Development",
    description: "Pembuatan website profil perusahaan, e-commerce, atau dashboard kustom menggunakan framework modern Next.js/React dan backend Laravel/PHP.",
    icon: "Globe"
  },
  {
    title: "Mobile Application Development",
    description: "Pengembangan aplikasi mobile lintas platform (Android & iOS) menggunakan Flutter untuk kebutuhan operasional bisnis Anda.",
    icon: "Smartphone"
  },
  {
    title: "Website Maintenance",
    description: "Layanan pemeliharaan berkala, optimasi kecepatan halaman web, pembaruan konten, monitoring server, serta perbaikan bug website.",
    icon: "Wrench"
  },
  {
    title: "IT Support & Helpdesk",
    description: "Layanan dukungan teknis harian bagi staf perusahaan Anda untuk menangani kendala software harian, printer, email, dan remote assistance.",
    icon: "Headphones"
  },
  {
    title: "Technical Support",
    description: "Analisis mendalam dan perbaikan tingkat lanjut untuk aneka masalah sistem informasi internal, integrasi database, dan kendala API.",
    icon: "Cpu"
  },
  {
    title: "Computer Troubleshooting",
    description: "Diagnosa menyeluruh terhadap kerusakan hardware laptop/desktop, pembersihan virus/malware, serta instalasi ulang OS secara aman.",
    icon: "Monitor"
  },
  {
    title: "Network Setup & Troubleshooting",
    description: "Perancangan jaringan LAN/WiFi kantor, konfigurasi router Mikrotik, pembatasan bandwidth, setup VPN, dan penataan kabel (cabling layout).",
    icon: "Network"
  },
  {
    title: "Software Installation & Config",
    description: "Pemasangan software berlisensi, konfigurasi Outlook, sinkronisasi cloud drive (Google Workspace / M365), serta instalasi database lokal.",
    icon: "Download"
  },
  {
    title: "Hardware Upgrade",
    description: "Rekomendasi dan pemasangan komponen komputer seperti penambahan RAM, penggantian SSD NVMe untuk peningkatan kecepatan booting, dan cleaning hardware.",
    icon: "Layers"
  },
  {
    title: "Database Development",
    description: "Perancangan skema database relasional (MySQL, PostgreSQL) yang optimal untuk kebutuhan penyimpanan data aplikasi bisnis Anda.",
    icon: "Database"
  }
];

export const languages = [
  { name: "Bahasa Indonesia", level: "Native / Bilingual", rating: 5 },
  { name: "English", level: "Professional / Conversational", rating: 3 }
];

export const recruiterBadges = [
  { label: "Available for Full Time", type: "success" },
  { label: "Available for Remote", type: "info" },
  { label: "Available for Hybrid", type: "warning" },
  { label: "Open to Relocation", type: "primary" },
  { label: "Immediate Joiner", type: "danger" }
];
