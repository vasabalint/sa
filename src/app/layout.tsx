import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aria Voss — Painter & Fine Artist",
  description:
    "Explore the original oil paintings of Aria Voss — landscapes, portraits, and abstract works that capture light, emotion, and the beauty of the natural world.",
  keywords: ["Aria Voss", "painter", "oil paintings", "fine art", "gallery", "landscape", "portrait", "abstract"],
  openGraph: {
    title: "Aria Voss — Painter & Fine Artist",
    description:
      "Explore the original oil paintings of Aria Voss — landscapes, portraits, and abstract works.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
