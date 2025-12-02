import { Inter, Roboto_Mono, Georama, Archivo_Black } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  metadataBase: new URL("https://blueonion.dev"),
  title: {
    default: "Blue Onion's Macfolio",
    template: "%s | Blue Onion's Macfolio",
  },
  description:
    "Experience a stunning macOS-style portfolio showcasing creative work with a smooth, interactive interface inspired by Apple's design language.",
  keywords: [
    "portfolio",
    "macOS",
    "design",
    "creative",
    "web development",
    "Blue Onion",
    "interactive UI",
  ],
  authors: [{ name: "Blue Onion" }],
  creator: "Blue Onion",
  publisher: "Blue Onion",

  // OpenGraph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blueonion.dev",
    title: "Blue Onion's Macfolio",
    description:
      "Experience a stunning macOS-style portfolio showcasing creative work with a smooth, interactive interface inspired by Apple's design language.",
    siteName: "Blue Onion's Macfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blue Onion's Macfolio Preview",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Blue Onion's Macfolio",
    description:
      "Experience a stunning macOS-style portfolio showcasing creative work with a smooth, interactive interface inspired by Apple's design language.",
    creator: "@blueonion",
    images: ["/twitter-image.png"],
  },

  // Viewport and theme
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

  // Additional SEO
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

  // Verification (add your verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} ${georama.variable} ${archivoBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
