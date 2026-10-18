import { Inter, Roboto_Mono, Georama, Archivo_Black } from "next/font/google";
import "./globals.css";

import StructuredData from "@/components/StructuredData";
import {
  siteUrl,
  siteName,
  author,
  defaultTitle,
  defaultDescription,
} from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const georama = Georama({
  variable: "--font-georama",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const siteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Aditya Singh Rawat",
    "full-stack developer",
    "Next.js developer India",
    "React developer Delhi",
    "Go developer",
    "portfolio",
  ],
  authors: [{ name: author, url: siteUrl }],
  creator: author,
  publisher: author,

  alternates: {
    canonical: "/",
  },

  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: siteName,
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  ...(siteVerification ? { verification: { google: siteVerification } } : {}),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: "#000" }}>
      <body
        className={`${inter.variable} ${robotoMono.variable} ${georama.variable} ${archivoBlack.variable} antialiased`}
        style={{ backgroundColor: "#000" }}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
