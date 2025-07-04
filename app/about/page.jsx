import Image from "next/image";

import aboutImage from "@/public/coding-about.webp";

import ButtonBack from "../_components/ButtonBack";
import Title from "../_components/Title";

export const metadata = {
  title: "About page"
};

function AboutPage() {
  return (
    <div className="w-full md:h-[calc(100dvh-86px)] h-auto flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto fadeInUp">
        <div className="w-full flex flex-col-reverse gap-5 md:flex-row-reverse">
          <div className="relative bg-slate-50/20 dark:bg-slate-900 flex flex-col justify-center rounded-md md:shadow-md space-y-1 md:space-y-3 p-5">
            <Title text="Bit about myself" />
            <p className="text-slate-800 dark:text-slate-100 text-base 2xl:text-lg">
              Hi, I&apos;m Milan an enthusiastic front-end developer with 2+
              years of experience at{" "}
              <a
                href="https://www.vegaitglobal.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out"
              >
                Vega IT Solution
              </a>
              (two-week internship),{" "}
              <a
                href="https://omadriatic.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out"
              >
                OMA Adriatic
              </a>
              , and{" "}
              <a
                href="https://htec.rs/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out"
              >
                HTEC
              </a>
              , I specialize in crafting clean, user-friendly digital
              experiences.
            </p>
            <p className="text-slate-800 dark:text-slate-100 text-base 2xl:text-lg">
              This is my little corner of the internet where I share my thoughts
              and ideas. Let&apos;s connect I&apos;m open to freelance
              opportunities and always eager to learn.
            </p>
            <p className="text-slate-800 dark:text-slate-100 text-base 2xl:text-lg">
              Focused on mastering{" "}
              <span className="font-semibold text-blue-500">Next.js</span> as my
              core frontend framework and building my next career chapter around
              it, while also leveraging{" "}
              <span className="font-semibold text-blue-500">Sanity</span> as a
              flexible and powerful headless CMS for content-driven
              applications. 🚀
            </p>
          </div>
          <div className="relative pr-5 md:max-w-[450px] flex bg-slate-50/20 dark:bg-slate-900 rounded-md md:shadow-md">
            <Image
              className="object-cover"
              src={aboutImage}
              alt="Family sitting around a fire pit in front of cabin"
              quality={80}
            />
          </div>
        </div>

        {/* BTH */}
        <div className="flex justify-center w-full px-5 xl:px-0 md:justify-end my-5">
          <ButtonBack href="/">Go back home</ButtonBack>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
