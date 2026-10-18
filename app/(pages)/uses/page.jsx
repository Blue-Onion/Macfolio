import { techStack } from "@/data";
import { author } from "@/lib/site";

const title = `Uses & Tech Stack — ${author}`;
const description = `The tools and technologies ${author} uses to build web applications: Go, Python, JavaScript, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Docker and more.`;

export const metadata = {
  title: "Uses & Tech Stack",
  description,
  alternates: { canonical: "/uses" },
  openGraph: { title, description, url: "/uses" },
};

export default function UsesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
        The daily toolkit — languages, frameworks and infrastructure I reach for when
        building web applications.
      </p>

      <div className="mt-12 space-y-10">
        {techStack.map((group) => (
          <section key={group.category} aria-labelledby={`uses-${group.category}`}>
            <h2 id={`uses-${group.category}`} className="text-2xl font-bold">
              {group.category}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.category} technologies`}>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
