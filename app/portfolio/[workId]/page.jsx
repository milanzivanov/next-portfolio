import { getWork, getWorks } from "@/app/_lib/services";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { title } = await getWork(resolvedParams.workId);
  return {
    title: title
  };
}

export async function generateStaticParams() {
  const works = await getWorks();
  const ids = works.map((work) => ({ workId: String(work.id) }));
  return ids;
}

async function PortfolioPage({ params }) {
  const resolvedParams = await params;
  const work = await getWork(resolvedParams.workId);
  return (
    <div className="w-full md:h-[calc(100dvh-86px)] flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 p-5 mb-5 md:rounded-md flex flex-col md:flex-row items-center shadow-md">
          <div className="flex-1 md:pr-5">
            <h1 className="text-2xl md:text-4xl mb-5 text-gray-600 font-bold">
              {work.title}
            </h1>
            <p className="text-grey-200 text-base md:text-lg mb-5 bg-gray-100  rounded-md p-5 shadow-md">
              {work.body}
              <span className="block">{work.projectTime}</span>
            </p>
            <ul className="flex md:flex-row md:items-center flex-col bg-gray-100 md:bg-transparent md:rounded-none md:shadow-none rounded-md shadow-md p-5 mb-5">
              <h3 className="text-base md:text-lg font-semibold tracking-wider mr-3 mb-2 md:mb-0">
                Technologies used:
              </h3>
              <div className="flex flex-wrap">
                {work.technologiesUsed.map((skill, i) => (
                  <li key={i} className="flex items-center mr-2">
                    <i
                      className={`${skill.svgIcon}  text-blue-500 devicon text-xl`}
                    ></i>
                  </li>
                ))}
              </div>
            </ul>

            <div className="flex justify-end mb-5">
              <Link
                className="flex items-center w-full md:w-auto justify-center bg-blue-500 hover:bg-blue-600 rounded-md text-gray-100 px-6 py-3 text-lg"
                href={work.linkSrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">View it live</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={work.src}
              style={{ width: "auto", height: "auto" }}
              width={400}
              height={400}
              alt={work.title}
              className="object-cover object-top rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center px-5 md:px-0 md:justify-end mb-5 md:mb-0">
          <Link
            href="/portfolio"
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

            <span>Go back to portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
