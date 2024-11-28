import Image from "next/image";

import image1 from "@/public/Milan_left.webp";
import Link from "next/link";

export const metadata = {
  title: "About page"
};

function AboutPage() {
  return (
    <div className="w-full md:h-[calc(100dvh-86px)] h-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-gray-50 p-5 flex md:flex-row flex-col md:rounded-md shadow-md">
          <div className="flex-1 flex flex-col justify-center space-y-1 md:space-y-4 pr-3 pb-5">
            <h1 className="text-2xl tracking-wider md:text-4xl text-gray-600 font-bold">
              Bit about myself
            </h1>
            <p className="text-grey-200 text-base md:text-lg">
              Hi, I&apos;m Milan an enthusiastic front-end developer and design
              enthusiast with 2+ years of experience at{" "}
              <a
                href="https://www.vegaitglobal.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300 ease-in-out"
              >
                Vega IT Solution
              </a>
              ,{" "}
              <a
                href="https://omadriatic.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300 ease-in-out"
              >
                OMA Adriatic
              </a>
              , and{" "}
              <a
                href="https://htec.rs/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300 ease-in-out"
              >
                HTEC
              </a>
              , I specialize in crafting clean, user-friendly digital
              experiences.
            </p>
            <p className="text-grey-200 text-base md:text-lg">
              This is my little corner of the internet where I share my thoughts
              and ideas. Let&apos;s connect I&apos;m open to freelance
              opportunities and always eager to learn.
            </p>
            <p className="text-grey-200 text-base md:text-lg">
              Excited about mastering{" "}
              <span className="font-semibold text-blue-500">Next.js</span> for
              my next adventure 🚀
            </p>
          </div>
          <div className="flex-1">
            <Image
              className="flex-1 object-cover bg-gray-300 rounded-md shadow-md"
              src={image1}
              alt="Family sitting around a fire pit in front of cabin"
              placeholder="blur"
              quality={80}
            />
          </div>
        </div>

        {/* BTH */}
        <div className="flex justify-center w-full px-5 md:px-0 md:justify-end my-5">
          <Link
            href="/"
            className="flex items-center w-full md:w-auto justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-gray-100 px-6 py-3 text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>

            <span>Go back home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
