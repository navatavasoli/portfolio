import type { Metadata } from "next";
import { Geist, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";

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

export const metadata: Metadata = {
  title: "Nava Tavasoli — Computing Technology × Electrical Engineering",
  description:
    "Portfolio of Nava Tavasoli: hardware security, signal processing, and applied AI/ML. CS + EE double degree at the University of Ottawa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${archivo.variable} ${plexMono.variable} bg-background text-foreground antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
