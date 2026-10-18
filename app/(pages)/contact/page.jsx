import { author, authorEmail, authorLocation } from "@/lib/site";
import { socials } from "@/data";

const title = `Contact ${author}`;
const description = `Get in touch with ${author} — full-stack developer in South Delhi, India. Open to freelance, collaborations and full-time roles. Email ${authorEmail}.`;

export const metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
        Wanna build something? Just email and I magically appear. Based in{" "}
        {authorLocation} — working with clients worldwide.
      </p>

      <p className="mt-8 text-lg">
        <span className="font-semibold">Email:</span>{" "}
        <a href={`mailto:${authorEmail}`} className="text-blue-700 hover:underline">
          {authorEmail}
        </a>
      </p>

      <section className="mt-12" aria-labelledby="contact-socials">
        <h2 id="contact-socials" className="text-2xl font-bold">
          Social profiles
        </h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 no-underline text-gray-900 hover:shadow-md transition-shadow"
              >
                <span
                  className="h-10 w-10 rounded-xl shrink-0 flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: social.bg }}
                  aria-hidden="true"
                >
                  {social.text[0]}
                </span>
                <span>
                  <span className="block font-semibold">{social.text}</span>
                  <span className="block text-sm text-gray-500 break-all">{social.link}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
