import PortfolioList from "../_components/PortfolioList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Link from "next/link";

export const metadata = {
  title: "Portfolio page"
};

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gray-50 p-5 my-5 rounded-md">
        <h1 className="tracking-wider text-2xl md:text-4xl mb-2 text-gray-600 font-bold">
          Portfolio
        </h1>

        <p className="text-grey-200 text-lg mb-10 max-w-4xl">
          Here you can find some of the projects I&apos;ve been working on. I
          have more and u can look them at my{" "}
          <Link
            href="https://github.com/milanzivanov"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            github profile.
          </Link>
        </p>
      </div>

      <Suspense fallback={<Spinner />}>
        <PortfolioList />
      </Suspense>
    </div>
  );
}
