import PortfolioContainer from "../_components/portfolio/PortfolioContainer";
import Title from "../_components/Title";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Link from "next/link";

export const metadata = {
  title: "Portfolio page"
};

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
      <div className="bg-slate-50/20 dark:bg-slate-800 p-5 md:mb-5 mt-0 md:my-5 shadow-md xl:rounded-md">
        <Title text="Portfolio" />

        <p className="text-slate-800 dark:text-slate-100 text-base 2xl:text-lg mb-5 md:mb-10">
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
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out"
          >
            GitHub
          </Link>{" "}
          profile.
        </p>
      </div>

      <Suspense fallback={<Spinner />}>
        <PortfolioContainer />
      </Suspense>
    </div>
  );
}
