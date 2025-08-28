import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with React, next.js, Tailwind CSS and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} 
        text-white antialiased 
        min-h-screen 
        bg-[linear-gradient(to_right,#3C3B3F,#605C3C)]

      `}
      >
        {children}
      </body>
    </html>
  );
}
