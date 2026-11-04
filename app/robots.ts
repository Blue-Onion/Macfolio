import { siteUrl } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The HTML /resume page is canonical; keep the binary PDF out of the index.
        disallow: ["/files/resume.pdf"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
