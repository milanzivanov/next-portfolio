import Link from "next/link";
import { getSkills } from "../_lib/services";
import "devicon/devicon.min.css";

export const metadata = {
  title: "Portfolio page"
};

async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="w-full md:h-[calc(100dvh-86px)] flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col bg-slate-50 pt-5 pb-10 px-5 md:mt-5 shadow-md md:rounded-md">
            <h1 className="tracking-wider text-2xl md:text-4xl mb-2 text-gray-600 font-bold">
              Technologies
            </h1>

            <p className="pb-5 text-grey-200 dark:text-slate-800 text-base md:text-lg max-w-5xl">
              Here is a detailed list of the tech tools I regularly use in my
              work. My primary focus revolves around{" "}
              <span className="font-semibold tracking-wider text-blue-500 dark:text-blue-700">
                React
              </span>{" "}
              and
              <span className="font-semibold tracking-wider text-blue-500 dark:text-blue-700">
                {" "}
                Next.js
              </span>
              , which are at the core of most of my projects. These tools help
              me build dynamic and efficient web applications, making them an
              essential part of my development process.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-7 gap-5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-200 text-grey-200 dark:text-slate-800 rounded-md shadow-md py-5 px-3 flex justify-center items-center cursor-not-allowed"
                >
                  <div className="flex flex-col items-center justify-center">
                    <h5 className="text-lg mb-1">{skill.iconTitle}</h5>
                    <i
                      className={`${skill.iconClass} devicon text-3xl lg:text-5xl text-blue-500 dark:text-blue-700`}
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* BTH */}
          <div className="flex justify-center px-5 md:px-0 md:justify-end my-5">
            <Link
              href="/"
              className="flex items-center w-full md:w-auto justify-center rounded-md bg-blue-500 dark:bg-blue-700 hover:bg-blue-800 text-gray-100 px-6 py-3 text-lg"
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

export default SkillsPage;
