import Image from "next/image";
import Link from "next/link";
import { aboutMe, techStack, socials } from "@/data";
import { author, authorLocation } from "@/lib/site";

const title = `About ${author} — Full-Stack Developer`;
const description =
  "Learn about Aditya Singh Rawat, a full-stack developer based in South Delhi, India, focused on building simple, reliable and scalable web applications with Next.js, React and Go.";

export const metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-2 text-gray-600">{authorLocation}</p>

      <div className="mt-10 flex flex-col sm:flex-row gap-8 items-start">
        <Image
          src={aboutMe.image}
          alt={`Portrait of ${author}, full-stack developer`}
          width={220}
          height={220}
          className="rounded-2xl border border-gray-200 shadow-sm"
          priority
        />

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-semibold text-gray-900">{aboutMe.subtitle}</h2>
          {aboutMe.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="rounded-lg bg-gray-900 text-white px-4 py-2 text-sm no-underline hover:bg-gray-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm no-underline hover:bg-gray-100 transition-colors"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-16" aria-labelledby="about-skills">
        <h2 id="about-skills" className="text-2xl font-bold">
          Skills & Technologies
        </h2>
        <div className="mt-6 space-y-5">
          {techStack.map((group) => (
            <div key={group.category}>
              <h3 className="font-semibold text-gray-900">{group.category}</h3>
              <ul className="mt-2 flex flex-wrap gap-2" aria-label={`${group.category} technologies`}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="about-elsewhere">
        <h2 id="about-elsewhere" className="text-2xl font-bold">
          Find me elsewhere
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
