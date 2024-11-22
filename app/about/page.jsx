import Image from "next/image";

import image1 from "@/public/Milan_left.webp";

export const metadata = {
  title: "About page"
};

function AboutPage() {
  return (
    <div className="w-full h-[calc(100dvh-80px)]  flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 p-5 rounded-md shadow-md flex items-center">
          <div>
            <h1 className="text-4xl mb-5 text-gray-600 font-bold">
              Bit about myself
            </h1>

            <div className="space-y-4 pr-3">
              <p>
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
                learn. Excited about mastering Nextjs for my next adventure! 🚀
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
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
