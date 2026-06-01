import { useEffect, useState } from "react";
import type { Project } from "../types/Project";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, currentIndex]);

  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const handlePrev = () => {
    if (!project || isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 250);
  };

  const handleNext = () => {
    if (!project || isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 250);
  };

  if (!project) return null;
  const images = project.images?.length ? project.images : [project.image];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(6px)", background: "rgba(20,5,3,0.75)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] rounded-xl overflow-hidden flex flex-col lg:flex-row"
        style={{
          background: "linear-gradient(135deg, #fdf6f0 0%, #f5e6d8 100%)",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(107,26,16,0.15)",
          animation: "modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {/* Tombol tutup */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            background: "rgba(107,26,16,0.12)",
            color: "#6B1A10",
            border: "1px solid rgba(107,26,16,0.2)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(107,26,16,0.25)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(107,26,16,0.12)")
          }
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* KIRI: Carousel */}
        <div
          className="relative lg:w-[55%] shrink-0"
          style={{ background: "#1a0a07", minHeight: "280px" }}
        >
          <div
            className="relative w-full h-full overflow-hidden"
            style={{ minHeight: "280px" }}
          >
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              style={{
                animation: isAnimating
                  ? "none"
                  : direction === "right"
                  ? "slideInRight 0.3s ease both"
                  : "slideInLeft 0.3s ease both",
                minHeight: "280px",
                maxHeight: "520px",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(26,10,7,0.7) 0%, transparent 100%)",
              }}
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
                style={{
                  background: "rgba(253,246,240,0.15)",
                  border: "1px solid rgba(253,246,240,0.3)",
                  color: "#fdf6f0",
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(253,246,240,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(253,246,240,0.15)")
                }
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 3L5 8l5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
                style={{
                  background: "rgba(253,246,240,0.15)",
                  border: "1px solid rgba(253,246,240,0.3)",
                  color: "#fdf6f0",
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(253,246,240,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(253,246,240,0.15)")
                }
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? "right" : "left");
                      setCurrentIndex(i);
                    }}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === currentIndex ? "20px" : "6px",
                      height: "6px",
                      background:
                        i === currentIndex
                          ? "#fdf6f0"
                          : "rgba(253,246,240,0.4)",
                    }}
                  />
                ))}
              </div>

              <div
                className="absolute top-4 left-4 z-10 text-xs font-semibold tracking-wider px-3 py-1 rounded-sm"
                style={{
                  background: "rgba(26,10,7,0.6)",
                  color: "#fdf6f0",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(253,246,240,0.15)",
                }}
              >
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* KANAN: Detail */}
        <div
          className="flex-1 p-7 lg:p-8 overflow-y-auto flex flex-col gap-5"
          style={{ maxHeight: "90vh" }}
        >
          <span
            className="self-start text-[10px] tracking-[0.3em] uppercase font-bold px-3 py-1.5 rounded-sm"
            style={{
              background: "rgba(107,26,16,0.1)",
              color: "#6B1A10",
              border: "1px solid rgba(107,26,16,0.2)",
            }}
          >
            {project.category}
          </span>

          <div>
            <h2
              className="text-2xl lg:text-3xl font-light leading-tight"
              style={{ color: "#2a0a06" }}
            >
              {project.title}
            </h2>
            <div className="mt-2 h-px w-12" style={{ background: "#6B1A10" }} />
          </div>

          <p className="text-sm leading-relaxed" style={{ color: "#5a2a20" }}>
            {project.longDescription || project.description}
          </p>

          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-3"
              style={{ color: "#9a4a30" }}
            >
              Tools & Tech
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-sm font-medium"
                  style={{
                    background: "rgba(107,26,16,0.08)",
                    color: "#6B1A10",
                    border: "1px solid rgba(107,26,16,0.15)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1" />

          <div
            className="flex flex-wrap gap-3 pt-2 border-t"
            style={{ borderColor: "rgba(107,26,16,0.15)" }}
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold px-5 py-2.5 rounded-sm transition-all duration-200"
                style={{ border: "1px solid #6B1A10", color: "#6B1A10" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#6B1A10";
                  e.currentTarget.style.color = "#fdf6f0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#6B1A10";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold px-5 py-2.5 rounded-sm transition-all duration-200"
                style={{ background: "#6B1A10", color: "#fdf6f0" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#8B2A1A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#6B1A10";
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {project.category === "UI/UX" ? "Lihat Figma" : "Live Demo"}
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
