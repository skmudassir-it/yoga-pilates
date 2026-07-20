import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "ZenFlow Yoga & Pilates | Find Your Balance",
    template: "%s | ZenFlow Yoga & Pilates",
  },
  description: "Expert-led yoga and pilates classes in Portland. Hatha, Vinyasa, Reformer Pilates, meditation, and more. Transform your body and mind at ZenFlow.",
  keywords: ["yoga", "pilates", "meditation", "wellness", "Portland", "studio", "fitness"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
