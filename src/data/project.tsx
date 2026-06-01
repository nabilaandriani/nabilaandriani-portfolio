import type { Project } from "../types/Project";
import project1 from "../assets/LandingPage.png";
import project2 from "../assets/uiuxFS.png";

export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "FreshStart Platform",
    category: "PROJECT WEB",
    image: project1,
    images: [project1],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7h18M3 12h18M9 17h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
      />
    ),
    description:
      "Fullstack job portal dengan verifikasi UMKM, sistem HRIS sederhana, sistem pelaporan, dan manajemen lowongan berbasis shift & project.",
    longDescription:
      "FreshStart Platform adalah job portal fullstack yang dirancang khusus untuk menghubungkan fresh graduate dengan UMKM lokal secara aman dan efisien. Platform ini dilengkapi sistem verifikasi UMKM untuk mencegah penipuan, fitur report untuk melaporkan UMKM yang melanggar ketentuan, serta manajemen lowongan kerja berbasis shift dan project. Terdapat pula modul HRIS sederhana yang membantu UMKM dalam proses rekrutmen dan pengelolaan kandidat.",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "MySQL",
      "Express JS",
      "TypeScript",
    ],
    githubUrl: "https://github.com/StevenVianto/WEB_Sandyakala-",
    liveUrl: "/",
  },

  {
    id: 2,
    title: "FreshStart Design",
    category: "UI/UX",
    image: project2,
    images: [project2],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
    description:
      "Desain UI/UX job portal dengan alur verifikasi UMKM, sistem pelaporan, dan manajemen rekrutmen shift & project yang aman dan mudah digunakan.",
    longDescription:
      "FreshStart Design mencakup proses desain end-to-end mulai dari user research, information architecture, user flow, wireframing, prototyping, usability testing, hingga pembuatan design system yang skalabel. Fokus utama desain adalah menciptakan pengalaman pengguna yang intuitif, aman, dan mudah digunakan bagi fresh graduate maupun pemilik UMKM.",
    tags: [
      "Figma",
      "Prototyping",
      "User Research",
      "Information Architecture",
      "Layout & Grid",
      "Usability Testing",
      "User Flow",
      "Component & Variant",
      "Typography",
      "Design System",
    ],
    liveUrl:
      "https://www.figma.com/proto/5jGisD6i0yGjod7Gr1GfD3/FreshStart?node-id=3342-21767&viewport=769%2C344%2C0.03&t=6IwlsMOvp49QYyul-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3342%3A21767&page-id=3342%3A18652",
  },
];