import dynamic from "next/dynamic";

const Arc = dynamic(() => import("@/windows/Arc"), { ssr: false });
const Resume = dynamic(() => import("@/windows/Resume"), { ssr: false });
const Finder = dynamic(() => import("@/windows/Finder"), { ssr: false });
const Contact = dynamic(() => import("@/windows/Contact"), { ssr: false });
const Home = dynamic(() => import("@/components/Home"), { ssr: false });
const TextFile = dynamic(() => import("@/windows/TextFile"), { ssr: false });
const ImgFile = dynamic(() => import("@/windows/ImgFile"), { ssr: false });
const Gallery = dynamic(() => import("@/windows/Gallery"), { ssr: false });

export { Home, TextFile, ImgFile, Gallery, Arc, Resume, Contact, Finder };
