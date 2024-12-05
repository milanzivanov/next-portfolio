"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/app/_components/Header";
import MobileNavigation from "./_components/MobileNavigation";
import { inter } from "./fonts/fonts";
import { useState } from "react";

import "@/app/_styles/globals.css";

export default function RootLayout({ children }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <html lang="en" className="overflow-y-scroll scroll-smooth">
      <body
        className={`${inter.className} flex flex-col antialiased text-grey-800 min-h-screen relative`}
      >
        <div className="flex-1 shadow-sm border-t-2 md:border-t-0 bg-slate-700/20">
          <main className="w-full">
            <Header toggleMobileNav={toggleMobileNav} />

            <MobileNavigation
              isOpen={isMobileNavOpen}
              setMobileNavOpen={setMobileNavOpen}
            />
            {children}
          </main>
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
