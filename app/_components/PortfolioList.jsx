import PortfolioCard from "./PortfolioCard";
import { getWorks } from "../_lib/services";
import Link from "next/link";

async function PortfolioList() {
  const works = await getWorks();

  if (!works) {
    return null;
  }

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-5 md:rounded-md mb-5">
        {works.map((work) => (
          <PortfolioCard key={work.id} work={work} />
        ))}
      </div>
      <div className="flex justify-center px-5 md:px-0 md:justify-end my-5">
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
    </>
  );
}

export default PortfolioList;
