import Image from "next/image";

import image1 from "@/public/Milan_right.webp";

export const metadata = {
  title: "Contact page"
};

function ContactPage() {
  return (
    <div className="w-full h-[calc(100dvh-80px)] flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 p-5 rounded-md shadow-md flex">
          <div className="">
            <Image
              className="object-cover bg-gray-300 rounded-md"
              src={image1}
              alt="milan picture"
              placeholder="blur"
              quality={80}
              width={500}
              height={500}
            />
          </div>
          <div className="flex-1 p-5">
            <h1 className="text-4xl mb-5 text-gray-600 font-bold">
              Get in tuch with me
            </h1>

            <p className="text-grey-200 text-lg w-10/12 mb-5">
              I&apos;d love to hear from you if you have any questions or want
              to work together. Don&apos;t hesitate to reach out!
            </p>

            <ul className="space-y-5 mb-5 bg-slate-100 p-5 rounded-md shadow-md">
              <h3 className="text-lg font-semibold tracking-wide">
                You can find me on:
              </h3>
              <li className="flex">
                <a
                  className="flex items-center text-xl text-blue-500 hover:text-blue-700 gap-2"
                  href="https://www.linkedin.com/in/milan-%C5%BEivanov1983/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="devicon-github-original text-3xl"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li className="flex">
                <a
                  className="flex items-center text-xl text-blue-500 hover:text-blue-700 gap-2"
                  href="https://github.com/milanzivanov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="devicon-linkedin-plain text-3xl"></i>
                  <span>Github</span>
                </a>
              </li>
            </ul>
            <h4 className="text-md font-semibold tracking-wide">
              email:{" "}
              <span className="text-blue-500 italic">
                milan.zivanov@gmail.com
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
