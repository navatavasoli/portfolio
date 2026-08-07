import type { Metadata } from "next";
import { Geist, Archivo, IBM_Plex_Mono, Chakra_Petch, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { PixelCursorTrail } from "@/components/ui/pixel-trail";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-chakra-petch",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navatavasoli.com"),
  title: {
    default: "Nava Tavasoli — Computing Technology × Electrical Engineering",
    template: "%s — Nava Tavasoli",
  },
  description:
    "Portfolio of Nava Tavasoli: hardware security, signal processing, and applied AI/ML. CS + EE double degree at the University of Ottawa.",
  keywords: [
    "Nava Tavasoli",
    "hardware security",
    "signal processing",
    "applied AI",
    "machine learning",
    "University of Ottawa",
    "computing technology",
    "electrical engineering",
  ],
  authors: [{ name: "Nava Tavasoli", url: "https://navatavasoli.com" }],
  creator: "Nava Tavasoli",
  alternates: {
    canonical: "https://navatavasoli.com",
  },
  openGraph: {
    type: "website",
    url: "https://navatavasoli.com",
    title: "Nava Tavasoli — Computing Technology × Electrical Engineering",
    description:
      "Portfolio of Nava Tavasoli: hardware security, signal processing, and applied AI/ML. CS + EE double degree at the University of Ottawa.",
    siteName: "Nava Tavasoli",
    images: [
      {
        url: "/headshot.png",
        width: 1445,
        height: 1717,
        alt: "Nava Tavasoli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nava Tavasoli — Computing Technology × Electrical Engineering",
    description:
      "Portfolio of Nava Tavasoli: hardware security, signal processing, and applied AI/ML. CS + EE double degree at the University of Ottawa.",
    images: ["/headshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${archivo.variable} ${plexMono.variable} ${chakraPetch.variable} ${sourceSerif.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nava Tavasoli",
              url: "https://navatavasoli.com",
              image: "https://navatavasoli.com/headshot.png",
              jobTitle: "Computing Technology × Electrical Engineering",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Ottawa",
              },
              sameAs: [
                "https://www.linkedin.com/in/nava-tavasoli/",
                "https://github.com/navatavasoli",
              ],
            }),
          }}
        />
        <PixelCursorTrail />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
