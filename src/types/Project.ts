import type { ReactNode } from "react";

export type Project = {
  id: number;
  title: string;
  category: "UI/UX" | "PROJECT WEB" | "LAINNYA";
  image: string;
  images: string[];
  icon: ReactNode;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};