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
  metadataBase: new URL("https://macfolio-azure.vercel.app/"),
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


  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://macfolio-azure.vercel.app/",
    title: "Blue Onion's Macfolio",
    description:
      "Experience a stunning macOS-style portfolio showcasing creative work with a smooth, interactive interface inspired by Apple's design language.",
    siteName: "Blue Onion's Macfolio",
    images: [
      {
        url: "/images/previewPic.png",
        width: 1200,
        height: 630,
        alt: "Blue Onion's Macfolio Preview",
      },
    ],
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


 
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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
