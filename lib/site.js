// Central site SEO config: single source of truth for URLs, nav and sitemap.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://macfolio-azure.vercel.app";

export const siteName = "Aditya Singh Rawat — Macfolio";
export const author = "Aditya Singh Rawat";
export const authorEmail = "rawatadityasingh963@gmail.com";
export const authorLocation = "South Delhi, India";

export const defaultTitle = "Aditya Singh Rawat — Full-Stack Developer Portfolio";
export const defaultDescription =
  "Portfolio of Aditya Singh Rawat, a full-stack developer based in South Delhi, India, building reliable and scalable web applications with Next.js, React, Go and PostgreSQL. Explore projects, achievements and an interactive macOS-style experience.";

// Crawlable content routes (surface for sitemap, robots and site nav).
export const routes = [
  { path: "/", title: "Home", priority: 1 },
  { path: "/about", title: "About", priority: 0.9 },
  { path: "/projects", title: "Projects", priority: 0.9 },
  { path: "/achievements", title: "Achievements", priority: 0.7 },
  { path: "/uses", title: "Uses & Tech Stack", priority: 0.7 },
  { path: "/resume", title: "Resume", priority: 0.8 },
  { path: "/contact", title: "Contact", priority: 0.7 },
];

// "FinGenie" -> "fingenie". Shared by /projects/[slug] and sitemap.
export const projectSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Identity links for JSON-LD sameAs (entity linking).
export const sameAs = [
  "https://github.com/Blue-Onion",
  "https://www.linkedin.com/in/aditya-singh-rawat-0a7416326",
  "https://x.com/Blue_Onion_3480",
  "https://leetcode.com/u/Blue_onion/",
];
