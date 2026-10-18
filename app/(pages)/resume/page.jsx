import Link from "next/link";
import { aboutMe, techStack, achievements, locations, socials } from "@/data";
import { projectSlug, author, authorEmail, authorLocation } from "@/lib/site";

const title = `Resume — ${author}`;
const description = `Resume of ${author}, full-stack developer from South Delhi, India. Skills: Go, JavaScript, React, Next.js, Node.js, PostgreSQL. Download the PDF or read the HTML version.`;

export const metadata = {
  title: "Resume",
  description,
  alternates: { canonical: "/resume" },
  openGraph: { title, description, url: "/resume" },
};

export default function ResumePage() {
  const projects = locations.work.children;

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-2 text-gray-600">
            Full-Stack Developer · {authorLocation} ·{" "}
            <a href={`mailto:${authorEmail}`} className="text-blue-700 hover:underline">
              {authorEmail}
            </a>
          </p>
        </div>
        <a
          href="/files/resume.pdf"
          download
          className="shrink-0 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm no-underline hover:bg-gray-700 transition-colors"
        >
          Download PDF
        </a>
      </div>

      <section className="mt-12" aria-labelledby="resume-summary">
        <h2 id="resume-summary" className="text-2xl font-bold">
          Summary
        </h2>
        <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
          {aboutMe.description.slice(0, 3).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="resume-skills">
        <h2 id="resume-skills" className="text-2xl font-bold">
          Skills
        </h2>
        <div className="mt-4 space-y-4">
          {techStack.map((group) => (
            <div key={group.category} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
              <p className="font-semibold text-gray-900 sm:w-40 shrink-0">{group.category}</p>
              <p className="text-gray-700">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="resume-projects">
        <h2 id="resume-projects" className="text-2xl font-bold">
          Selected Projects
        </h2>
        <ul className="mt-4 space-y-6">
          {projects.map((project) => (
            <li key={project.id}>
              <h3 className="font-semibold text-gray-900 text-lg">
                <Link href={`/projects/${projectSlug(project.name)}`} className="no-underline hover:underline">
                  {project.name}
                </Link>
              </h3>
              <p className="mt-1 text-gray-700 leading-relaxed">
                {project.children.find((c) => c.fileType === "txt")?.description?.[0]}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="resume-achievements">
        <h2 id="resume-achievements" className="text-2xl font-bold">
          Achievements
        </h2>
        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
          {achievements.map((ach) => (
            <li key={ach.id}>
              <span className="font-medium text-gray-900">{ach.title}</span>{" "}
              <span className="text-gray-500">({ach.date})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="resume-contact">
        <h2 id="resume-contact" className="text-2xl font-bold">
          Contact
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                {social.text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
