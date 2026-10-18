import { siteUrl, siteName, author, defaultDescription, sameAs, authorLocation } from "@/lib/site";

// JSON-LD structured data: helps Google connect this site to the person entity.
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: author,
        jobTitle: "Full-Stack Developer",
        description: defaultDescription,
        email: `mailto:rawatadityasingh963@gmail.com`,
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: "South Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        sameAs,
        knowsAbout: [
          "Next.js",
          "React",
          "JavaScript",
          "Go",
          "PostgreSQL",
          "Tailwind CSS",
          "GSAP",
          "Node.js",
          "MongoDB",
          "REST API Design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: `${author} — Portfolio`,
        description: defaultDescription,
        mainEntity: { "@id": `${siteUrl}/#person` },
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
      {
        "@type": "Place",
        name: authorLocation,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
