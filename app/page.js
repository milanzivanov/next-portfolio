import Image from "next/image";
import { poppins } from "./fonts/fonts";

import bg from "@/public/Milan_right.webp";

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
    <div
      className={`w-full h-[calc(100dvh-86px)] flex items-center justify-center`}
    >
      <div className="flex gap-5 bg-slate-50/20 dark:bg-slate-800 md:dark:bg-transparent md:bg-transparent py-5 md:py-0 max-w-5xl mx-auto justify-center w-full fadeInUp">
        <div className="bg-slate-50/20 dark:bg-slate-800 relative shadow-sm hidden lg:flex rounded-md overflow-hidden h-[300px] w-[350px]">
          <Image
            src={bg}
            fill
            placeholder="blur"
            quality={80}
            className="object-cover object-center"
            alt="mobile phone pancile keybord on the table"
          />
        </div>
        <div className="bg-transparent flex bottom-0 lg:bottom-[3vh] md:shadow-sm lg:bg-slate-50/20 lg:dark:bg-slate-800 items-center rounded-md overflow-hidden relative z-10 ">
          <h1
            className={`${poppins.className} px-5 block text-[1.9rem] leading-[2.9rem] lg:text-[2.5rem] 2xl:text-[3rem] tracking-wide lg:leading-[3.7rem]`}
          >
            <span className="block text-slate-800 dark:text-slate-100">
              I am{" "}
              <span className="font-extrabold bg-gradient-to-r from-[#0071bc] to-[#6366f1] bg-clip-text text-transparent">
                Milan
              </span>
            </span>{" "}
            <span className="block text-slate-800 dark:text-slate-100 ">
              Curiosity driven
            </span>{" "}
            <span className="block font-extrabold bg-gradient-to-r from-[#0071bc] to-[#6366f1] bg-clip-text text-transparent">
              Frontend developer
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
