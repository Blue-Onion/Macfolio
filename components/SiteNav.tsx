import Link from "next/link";
import { routes } from "@/lib/site";

const SiteNav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav
        aria-label="Site"
        className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between gap-4 text-sm"
      >
        <Link href="/" className="font-semibold text-gray-900 no-underline hover:underline">
          Aditya Singh Rawat
        </Link>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-end">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="text-gray-600 no-underline hover:text-gray-900 transition-colors"
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SiteNav;
