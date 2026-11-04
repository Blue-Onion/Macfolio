import Image from "next/image";
import { achievements } from "@/data";
import { defaultDescription, author } from "@/lib/site";

const title = `Achievements — ${author}`;
const description = `${author}'s competitive programming achievements and hackathon results: LeetCode, GDG DSA 1st place, HackCBS and Supernova hackathons.`;

export const metadata = {
  title: "Achievements",
  description,
  alternates: { canonical: "/achievements" },
  openGraph: { title, description: defaultDescription, url: "/achievements" },
};

export default function AchievementsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
        Hackathon results, competitive programming and problem-solving milestones.
      </p>

      <ul className="mt-12 divide-y divide-gray-200">
        {achievements.map((ach) => {
          const hasLink = ach.link && ach.link !== "#";
          const content = (
            <>
              <Image
                src={ach.image}
                alt={ach.title}
                width={320}
                height={200}
                className="rounded-xl border border-gray-200 shadow-sm w-full max-w-xs h-auto object-cover"
              />
              <div className="mt-4">
                <p className="text-sm text-gray-500">{ach.date}</p>
                <h2 className="mt-1 text-lg font-semibold">{ach.title}</h2>
                {ach.description && (
                  <p className="mt-2 text-gray-600 leading-relaxed">{ach.description}</p>
                )}
              </div>
            </>
          );

          return (
            <li key={ach.id} className="py-10">
              {hasLink ? (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline text-gray-900"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
