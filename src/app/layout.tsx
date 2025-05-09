import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechPrep - Interview Preparation app",
  description: "Crack any interview using these tools offered for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen bg-gray-100">
          <Navbar />

          <main className="flex-1 overflow-y-auto mt-10">{children}</main>

          <footer className=" bg-white text-center-text-white text-center text-xs shadow-xl text-gray-400 py-4">
            TechPrep &copy; {new Date().getFullYear()} - All Rights Reserved |
            Coded with 💖
          </footer>
        </div>
      </body>
    </html>
  );
}
