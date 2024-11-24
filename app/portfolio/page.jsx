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

        <p className="text-grey-200 text-base md:text-lg mb-5 md:mb-10">
          Welcome! Here you&apos;ll find a selection of projects I&apos;ve been
          working on, showcasing my skills and dedication to development. These
          projects represent some of the ideas and solutions I&apos;ve brought
          to life through coding. While this is just a glimpse of my work,
          I&apos;ve completed many other exciting projects that you can explore
          on my{" "}
          <Link
            href="https://github.com/milanzivanov"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            GitHub
          </Link>{" "}
          profile. There, you&apos;ll find a diverse collection of repositories,
          ranging from small experiments to fully realized applications. Feel
          free to check them out to learn more about my approach,
          problem-solving skills, and the technologies I enjoy working with!
        </p>
      </div>

      <Suspense fallback={<Spinner />}>
        <PortfolioList />
      </Suspense>
    </div>
  );
}
