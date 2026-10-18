import "./pages.css";
import SiteNav from "@/components/SiteNav";
import Link from "next/link";
import { author, routes } from "@/lib/site";
import { authorEmail } from "@/lib/site";

export default function PagesLayout({ children }) {
  return (
    <div className="min-h-dvh bg-white text-gray-900 flex flex-col">
      <SiteNav />
      <main className="flex-1 w-full h-auto!">{children}</main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-4 justify-between">
          <p>
            © {new Date().getFullYear()} {author} · Built with Next.js
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-1">
            {routes
              .filter((r) => r.path !== "/")
              .map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className="no-underline hover:text-gray-900 transition-colors"
                >
                  {route.title}
                </Link>
              ))}
            <a href={`mailto:${authorEmail}`} className="no-underline hover:text-gray-900 transition-colors">
              Email
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
