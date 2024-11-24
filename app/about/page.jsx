import Image from "next/image";

import image1 from "@/public/Milan_left.webp";
import Link from "next/link";

export const metadata = {
  title: "About page"
};

function AboutPage() {
  return (
    <div className="w-full md:h-[calc(100dvh-80px)] flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 p-5 md:rounded-md shadow-md flex md:flex-row flex-col items-center">
          <div>
            <h1 className="text-2xl tracking-wider md:text-4xl mb-2 text-gray-600 font-bold">
              Bit about myself
            </h1>

            <div className="space-y-4 pr-3 pb-5">
              <p className="text-grey-200 text-base md:text-lg">
                Hi, I&apos;m Milan an enthusiastic tech and design enthusiast.
                With experience at{" "}
                <span className="font-semibold">Vega IT Solution</span>,{" "}
                <span className="font-semibold">OMA Adriatic</span>, and{" "}
                <span className="font-semibold">HTEC</span>, I specialize in
                creating user-friendly digital products.
              </p>
              <p>
                Clean code and simplicity drive my passion. Let&apos;s connect
                I&apos;m open to freelance opportunities and always eager to
                learn. Excited about mastering{" "}
                <span className="font-semibold">Nextjs</span> for my next
                adventure!
              </p>
              <p>
                This is my little corner of the internet. Let&apos;s connect 🚀
              </p>
            </div>
          </div>

          <div className="col-span-2">
            <Image
              className="object-cover bg-gray-300 rounded-md shadow-md"
              src={image1}
              alt="Family sitting around a fire pit in front of cabin"
              placeholder="blur"
              quality={80}
            />
          </div>

          {/* BTH */}
          <div className="flex justify-center w-full md:px-0 md:justify-end my-5">
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
    </div>
  );
}

export default AboutPage;
