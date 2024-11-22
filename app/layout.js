import Header from "@/app/_components/Header";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / Portfolio of Milan Zivanov",
    default: "Welcome / MZ Portfolio"
  },
  description:
    "This is the portfolio of Milan Zivanov and this is nextjs website where you can see my projects and skills. And also I am leraning nextjs by meking this portfolio. Frontend developer."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col antialiased  text-grey-800 min-h-screen relative`}
      >
        <Header />
        <div className="flex-1 bg-slate-200">
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
