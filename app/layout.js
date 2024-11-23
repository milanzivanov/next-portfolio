"use client";

import Header from "@/app/_components/Header";
import MobileNavigation from "./_components/MobileNavigation";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

import "@/app/_styles/globals.css";

export default function RootLayout({ children }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col antialiased  text-grey-800 min-h-screen relative`}
      >
        <Header toggleMobileNav={toggleMobileNav} />

        <MobileNavigation
          isOpen={isMobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
        <div className="flex-1 bg-slate-200">
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
