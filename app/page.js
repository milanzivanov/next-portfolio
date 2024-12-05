import Image from "next/image";
import { poppins } from "./fonts/fonts";

import bg from "@/public/bg.webp";

export const metadata = {
  title: {
    template: "%s / Portfolio of Milan Zivanov",
    default: "Welcome / Milan Portfolio"
  },
  description:
    "Milan Zivanov - Frontend Developer - Welcome to my personal website and portfolio showcasing my past work. Explore and witness my frontend skills! Feel free to reach out for any inquiries or opportunities to collaborate. This is the portfolio made in next.js and it is my first next.js project but not last"
};

export default function HomePage() {
  return (
    <div className=" w-full h-[calc(100dvh-86px)] bg-slate-700 flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-10 bg-slate-700/20"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-center md:rotate-180"
          alt="mobile phone pancile keybord on the table"
        />
      </div>

      <div className="relative z-10 w-full bg-slate-50/10 shadow-sm py-5">
        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <h1
            className={`${poppins.className} px-5 block text-[1.6rem] leading-[2.3rem] md:text-[3.5rem] lg:text-[4.5rem] tracking-wide lg:leading-[5.3rem]`}
          >
            <span className="block text-slate-800">
              I am{" "}
              <span className="font-extrabold bg-gradient-to-r from-[#0071bc] to-[#6366f1] bg-clip-text text-transparent">
                Milan
              </span>
            </span>{" "}
            <span className="block text-slate-800">Minimalism lover</span>{" "}
            <span className="block font-extrabold bg-gradient-to-r from-[#0071bc] to-[#6366f1] bg-clip-text text-transparent">
              Frontend developer
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
