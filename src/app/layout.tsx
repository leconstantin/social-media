import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lecon Social Media App",
  description: "Social media app built with Latest feature of Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white">
          <Navbar />
        </div>
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-100">
          {children}
        </div>
      </body>
    </html>
  );
}
