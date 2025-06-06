import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokesh Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl text-red-600">Lokesh Portfolio</h1>
        <nav className="space-x-3 text-xl">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/resume">Resume</Link>
        </nav>
        <main className="pt-10">
        {children}
        </main>
      </div>
      </body>
    </html>
  );
}
