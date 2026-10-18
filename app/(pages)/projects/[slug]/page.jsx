import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations } from "@/data";
import { projectSlug, siteUrl, author } from "@/lib/site";

const projects = locations.work.children;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: projectSlug(project.name) }));
}

const getProject = (slug) => projects.find((p) => projectSlug(p.name) === slug);

const getProjectMeta = (project) => {
  const txt = project.children.find((c) => c.fileType === "txt");
  const urls = project.children.filter((c) => c.fileType === "url");
  const screenshot = project.children.find((c) => c.fileType === "img");
  return { description: txt?.description ?? [], urls, screenshot: screenshot?.imageUrl };
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const { description, screenshot } = getProjectMeta(project);
  const title = `${project.name} — Project by ${author}`;
  const projectDescription =
    description[0] ?? `${project.name}: a project by ${author}.`;

  return {
    title: project.name,
    description: projectDescription,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title,
      description: projectDescription,
      url: `/projects/${slug}`,
      ...(screenshot && { images: [{ url: screenshot, alt: `${project.name} screenshot` }] }),
    },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { description, urls, screenshot } = getProjectMeta(project);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: description.join(" "),
    author: { "@type": "Person", name: author },
    image: screenshot ? `${siteUrl}${screenshot}` : undefined,
    ...(urls.some((u) => u.name.toLowerCase().includes("github")) && {
      codeRepository: urls.find((u) => u.name.toLowerCase().includes("github")).href,
    }),
    ...(urls.some((u) => u.name.toLowerCase().includes("demo") || u.name.toLowerCase().includes("website")) && {
      url: urls.find((u) => u.name.toLowerCase().includes("demo") || u.name.toLowerCase().includes("website")).href,
    }),
  };

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projects" className="text-sm text-gray-500 no-underline hover:underline">
        ← All projects
      </Link>

      <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">{project.name}</h1>

      {screenshot && (
        <Image
          src={screenshot}
          alt={`${project.name} project screenshot`}
          width={1024}
          height={640}
          className="mt-8 w-full rounded-2xl border border-gray-200 shadow-sm"
          priority
        />
      )}

      <section className="mt-10 space-y-4 text-gray-700 leading-relaxed" aria-label={`${project.name} description`}>
        {description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      {urls.length > 0 && (
        <section className="mt-10" aria-label={`${project.name} links`}>
          <h2 className="text-lg font-semibold">Links</h2>
          <ul className="mt-3 flex flex-wrap gap-4">
            {urls.map((url) => (
              <li key={url.id}>
                <a
                  href={url.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-medium hover:underline"
                >
                  {url.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14 pt-8 border-t border-gray-200" aria-label="More projects">
        <h2 className="text-lg font-semibold">More projects</h2>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {projects
            .filter((p) => p.id !== project.id)
            .map((p) => (
              <li key={p.id}>
                <Link href={`/projects/${projectSlug(p.name)}`} className="text-gray-600 hover:underline">
                  {p.name}
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
