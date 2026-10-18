import Image from "next/image";
import Link from "next/link";
import { locations } from "@/data";
import { projectSlug, author } from "@/lib/site";

const title = `Projects by ${author}`;
const description =
  "Selected full-stack projects by Aditya Singh Rawat: FinGenie, MediCall, SensAI, Reflect, PourTail and Medusa — built with Next.js, React, Go, Prisma and PostgreSQL.";

export const metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
};

// Every project folder has a `.txt` child with the description and `url` children with links.
const getProjectMeta = (project) => {
  const txt = project.children.find((c) => c.fileType === "txt");
  const urls = project.children.filter((c) => c.fileType === "url");
  const screenshot = project.children.find((c) => c.fileType === "img");
  return {
    description: txt?.description ?? [],
    urls,
    screenshot: screenshot?.imageUrl,
  };
};

export default function ProjectsPage() {
  const projects = locations.work.children;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
        A selection of products and experiments I&apos;ve designed, built and shipped —
        covering AI-powered apps, full-stack platforms and Go tooling.
      </p>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2">
        {projects.map((project) => {
          const { description, urls, screenshot } = getProjectMeta(project);
          const slug = projectSlug(project.name);
          return (
            <li key={project.id} className="group">
              {screenshot && (
                <Link href={`/projects/${slug}`} className="block overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <Image
                    src={screenshot}
                    alt={`${project.name} project screenshot`}
                    width={640}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform"
                  />
                </Link>
              )}
              <h2 className="mt-4 text-xl font-semibold">
                <Link href={`/projects/${slug}`} className="no-underline hover:underline">
                  {project.name}
                </Link>
              </h2>
              {description[0] && <p className="mt-2 text-gray-600 leading-relaxed">{description[0]}</p>}
              <ul className="mt-3 flex flex-wrap gap-4 text-sm">
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
                <li>
                  <Link href={`/projects/${slug}`} className="text-gray-500 hover:underline">
                    Read more →
                  </Link>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
