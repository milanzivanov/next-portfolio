import Image from "next/image";

import bg from "@/public/bg.webp";

export default function HomePage() {
  return (
    <div className=" w-full h-[calc(100dvh-80px)] bg-slate-700/20 flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-10 bg-slate-700/20"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="mobile phone pancile keybord on the table"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>

      <div className="relative z-10 bg-slate-500/10 w-full mb-[80px] py-5">
        <div className="max-w-7xl  mx-auto relative z-10">
          <h1 className="block text-[5rem] tracking-wide leading-[5.5rem]">
            <span className="block text-slate-800">
              I am{" "}
              <span className="font-extrabold bg-gradient-to-r from-[#4ca5ff] to-[#6366f1] bg-clip-text text-transparent">
                Milan
              </span>
            </span>{" "}
            <span className="block text-slate-800">Minimalism lover</span>{" "}
            <span className="block font-extrabold bg-gradient-to-r from-[#4ca5ff] to-[#6366f1] bg-clip-text text-transparent">
              Frontend developer
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
