import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Umair Mumtaz | Software Engineer",
  description:
    "Full stack developer in Lahore building modern web applications with React, Next.js, TypeScript, Node.js, and Python.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
