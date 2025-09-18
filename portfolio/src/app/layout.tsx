import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with React, next.js, Tailwind CSS and TypeScript",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body
        className={`${inter.className} 
        text-white antialiased 
        min-h-screen 
        bg-zinc-900

      `}
      >
        {children}
      </body>
    </html>
  );
}
