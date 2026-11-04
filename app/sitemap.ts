import { siteUrl, routes, projectSlug, defaultTitle } from "@/lib/site";
import { locations } from "@/data";

// Stable ISO string so build output doesn't churn on every deploy.
const lastModified = new Date(process.env.SITEMAP_CONTENT_DATE ?? "2026-10-18");

export default function sitemap() {
  const projectEntries = locations.work.children.map((project) => ({
    url: `${siteUrl}/projects/${projectSlug(project.name)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const pageEntries = routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));

  return [...pageEntries, ...projectEntries];
}
