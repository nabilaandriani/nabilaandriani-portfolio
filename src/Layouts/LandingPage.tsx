import { useEffect, useState } from "react";
import logo from "../assets/logoPortfolioNabila.png";
import profil from "../assets/photome.png";
import type { Project } from "../types/Project";
import { ALL_PROJECTS } from "../data/project";
import { ProjectModal } from "../pages/ProjectModal";

function LandingNavbar() {
  const [active, setActive] = useState("about me");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sectionIds = ["about me", "projects", "contact"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "about me", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-20 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-[#F5EFE6]`}
    >
      <div className="px-8 py-3 flex items-center justify-between">
        <img
          src={logo}
          alt="Logo Nabila Andriani"
          onClick={() => scrollTo("about me")}
          className="h-12 w-auto cursor-pointer object-contain"
        />
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`text-sm cursor-pointer tracking-[0.2em] uppercase font-medium transition-colors duration-150 pb-1 ${
                  active === link.id
                    ? "text-red underline decoration-2 underline-offset-6"
                    : "text-[#2a1a10] hover:text-red"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-red transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-red transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-red transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[#F5EFE6] border-t border-[#e0d4c3] px-8 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm cursor-pointer text-left tracking-[0.2em] uppercase font-medium transition-colors duration-150 ${
                active === link.id ? "text-red" : "text-[#2a1a10] hover:text-red"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── About Me ────────────────────────────────────────────────────────────────
function AboutMe() {
  return (
    <section
      id="about me"
      className="min-h-screen bg-[#F5EFE6] px-20 pt-10 flex items-center overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="relative shrink-0 flex items-center justify-center w-full lg:w-auto">
          <div />
          <div className="hidden md:flex bg-maroon ml-10 w-90 min-h-screen rounded-b-full items-center justify-center">
            <img src={profil} alt="Photo Profile" className="rounded-b-full h-160 object-contain" />
          </div>
          <div className="absolute bottom-6 right-4 w-3 h-3 rounded-full bg-red opacity-40" />
        </div>

        <div className="flex-1 text-center pt-10 px-6 lg:px-0 lg:ml-30 lg:text-left">
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
            <span className="block w-10 h-px bg-red" />
            <span className="text-red text-xs tracking-[0.3em] uppercase font-semibold">Portfolio 2026</span>
          </div>
          <div className="mb-4">
            <div className="hidden lg:block absolute right-0 top-1/3 w-px h-32 bg-[#D4B896]" />
            <h2 className="text-4xl lg:text-5xl text-[#2a1a10] font-light leading-tight mb-1">Halo, Saya</h2>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#6B1A10] leading-tight">Nabila Andriani</h1>
          </div>
          <p className="text-red text-xs tracking-[0.25em] uppercase font-semibold mb-6">
            Front-End Developer &amp; UI/UX Designer
          </p>
          <p className="text-[#4a3728] text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
            Saya tertarik di bidang Front-End Developer dan UI/UX Designer yang berfokus pada pembuatan website modern,
            responsif, dan user-friendly. Saya senang mengubah ide menjadi pengalaman digital yang menarik dan mudah digunakan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <button
              onClick={() => { const el = document.getElementById("projects"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-2 border border-[#2a1a10] text-[#2a1a10] hover:border-red hover:text-red text-sm tracking-widest uppercase px-6 py-3 rounded-sm font-semibold transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              View Projects
            </button>
            <a
              href="/cv/NabilaCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red hover:bg-[#8f2e14] text-white text-sm tracking-widest uppercase px-6 py-3 rounded-sm font-semibold transition-colors duration-200 shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
              </svg>
              View CV
            </a>
          </div>
          <div className="flex gap-3 justify-center mb-5 lg:justify-start">
            {[
              {
                label: "GitHub",
                icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />,
                link: "https://github.com/nabilaandriani",
              },
              {
                label: "LinkedIn",
                icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
                link: "https://www.linkedin.com/in/nabila-andriani-027xyz/",
              },
              {
                label: "Instagram",
                icon: <><rect x="3" y="3" width="18" height="18" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>,
                link: "https://www.instagram.com/naabbb__/",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-[#c9b49a] flex items-center justify-center text-[#6B1A10] hover:bg-red hover:text-white hover:border-red transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────
function Projects() {
  const [activeFilter, setActiveFilter] = useState("SEMUA");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // ← STATE MODAL

  const filters = ["SEMUA", "UI/UX", "PROJECT WEB", "LAINNYA"];

  const filtered =
    activeFilter === "SEMUA"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  const displayed = showAll ? filtered : filtered.slice(0, 3);

  return (
    <>
      <section id="projects" className="min-h-screen px-20 bg-[#6B1A10]">
        <div className="px-8 py-20">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-cream-skin" />
              <span className="text-cream-skin text-xs tracking-[0.3em] uppercase font-semibold">Projects</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2 className="text-5xl lg:text-6xl font-light text-white leading-tight">
                  Featured{" "}
                  <em className="italic font-normal text-cream-skin">Projects</em>
                </h2>
                <p className="text-[#d4b09a] mt-4 max-w-lg leading-relaxed">
                  Kumpulan project yang pernah saya kerjakan mulai dari UI/UX Design, Website Development, hingga project lainnya.
                </p>
              </div>
              <button
                onClick={() => setShowAll(!showAll)}
                className="shrink-0 flex items-center gap-2 border border-cream-skin text-cream-skin hover:bg-cream-skin hover:text-[#6B1A10] text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-sm font-semibold transition-all duration-200 self-start lg:self-auto"
              >
                {showAll ? "Sembunyikan" : "Lihat Selengkapnya"}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => { setActiveFilter(f); setShowAll(false); }}
                className={`text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-cream-light text-[#6B1A10]"
                    : "border border-[#a05a3a] text-[#d4b09a] hover:border-cream-skin hover:text-cream-skin"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)} // ← BUKA MODAL
                className="group bg-cream-light hover:bg-cream-dark rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 cursor-pointer"
              >
                <div className="h-44 bg-[#5a1509] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: "rgba(107,26,16,0.55)" }}
                  >
                    <span className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-semibold text-white border border-white/50 px-4 py-2 rounded-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                      </svg>
                      Lihat Detail
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-deep-red text-[10px] tracking-[0.25em] uppercase font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-red font-semibold mt-1 mb-2 text-base">{project.title}</h3>
                  <p className="text-deep-red text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider uppercase bg-cream text-deep-red px-2.5 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="text-[10px] tracking-wider uppercase bg-cream text-deep-red px-2.5 py-1 rounded-sm">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal — render di luar section agar tidak ter-clip */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const socials = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      label: "EMAIL",
      value: "nabilaandriani027@gmail.com",
    },
    {
      icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
      label: "LINKEDIN",
      value: "linkedin.com/in/nabila-andriani-027xyz",
    },
    {
      icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />,
      label: "GITHUB",
      value: "github.com/nabilaandriani",
    },
    {
      icon: <><rect x="3" y="3" width="18" height="18" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>,
      label: "INSTAGRAM",
      value: "naabbb__",
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-[#F5EFE6]">
      <div className="px-30">
        <div className="flex items-center pt-15 gap-3 mb-4">
          <span className="block w-8 h-px bg-red" />
          <span className="text-[#B33A1A] text-xs tracking-[0.3em] uppercase font-semibold">Hubungi Saya</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1">
            <h2 className="text-5xl lg:text-6xl font-light text-[#2a1a10] leading-tight mb-4">
              Let's Work{" "}
              <em className="italic font-normal text-[#6B1A10]">Together</em>
            </h2>
            <p className="text-[#6a4f3a] leading-relaxed mb-10 max-w-sm">
              Tertarik bekerja sama atau ingin berdiskusi mengenai project? Silakan hubungi saya.
            </p>
            <p className="text-[#2a1a10] text-xs tracking-[0.25em] uppercase font-semibold mb-5">Atau Temukan Saya Di</p>
            <div className="flex flex-col gap-5">
              {socials.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#c9b49a] flex items-center justify-center text-[#6B1A10] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">{s.icon}</svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-[#9a7060] uppercase font-semibold mb-0.5">{s.label}</p>
                    <p className="text-[#2a1a10] text-sm">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 lg:max-w-md">
            <div className="bg-deep-red rounded-t-full min-h-screen pt-35 px-20">
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-cream-skin text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">Nama</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Nama lengkap Anda"
                    className="w-full bg-[#F5EFE6] text-[#2a1a10] placeholder-[#b09a80] text-sm px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cream-skin transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-cream-skin text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full bg-[#F5EFE6] text-[#2a1a10] placeholder-[#b09a80] text-sm px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cream-skin transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-cream-skin text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">Pesan</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Tuliskan pesan Anda di sini..." rows={5}
                    className="w-full bg-[#F5EFE6] text-[#2a1a10] placeholder-[#b09a80] text-sm px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cream-skin transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className={`w-full flex items-center justify-center gap-2 text-sm tracking-[0.2em] uppercase font-semibold px-6 py-3.5 rounded-md transition-all duration-200 ${
                    sent ? "bg-green-600 text-white" : "bg-cream-light hover:bg-white text-deep-red"
                  }`}
                >
                  {sent ? "Pesan Terkirim ✓" : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-fill bg-deep-red py-8">
        <div className="px-30 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg">Nabila Andriani</p>
            <p className="text-[#c9a080] text-sm">Front-End Developer &amp; UI/UX Designer</p>
            <p className="text-[#8a6050] text-xs mt-1">© 2026 Nabila Andriani. All rights reserved.</p>
          </div>
          <div className="flex gap-3">
            {[
              { label: "GitHub", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />, link: "https://github.com/nabilaandriani" },
              { label: "LinkedIn", icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>, link: "https://www.linkedin.com/in/nabila-andriani-027xyz" },
              { label: "Instagram", icon: <><rect x="3" y="3" width="18" height="18" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>, link: "https://www.instagram.com/naabbb__/" },
            ].map((s) => (
              <a
                key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-9 h-9 rounded-full border border-[#7a4030] flex items-center justify-center text-[#c9a080] hover:border-cream-skin hover:text-white transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="font-['DM_Serif_Display',serif]">
      <LandingNavbar />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
