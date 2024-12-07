"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";

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
    <html
      lang="en"
      className="overflow-y-scroll scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} dark:text-white text-black flex flex-col antialiased text-grey-800 min-h-screen relative`}
      >
        <Providers>
          <div className="flex-1 shadow-sm bg-slate-700/20">
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
        </Providers>
      </body>
    </html>
  );
}
