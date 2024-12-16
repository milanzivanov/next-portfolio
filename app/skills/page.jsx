import Link from "next/link";
import { getSkills } from "../_lib/services";
import "devicon/devicon.min.css";
import ButtonBack from "../_components/ButtonBack";

export const metadata = {
  title: "Portfolio page"
};

async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="w-full 2xl:h-[calc(100dvh-86px)] flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col bg-slate-50 pt-5 pb-10 px-5 md:mt-5 shadow-md 2xl:rounded-md">
            <h1 className="tracking-wider text-2xl md:text-4xl mb-2 text-gray-600 font-bold">
              Technologies
            </h1>

            <p className="pb-5 text-grey-200 dark:text-slate-800 text-base 2xl:text-lg max-w-5xl">
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

            <div className="grid grid-cols-2 xl:grid-cols-8 2xl:grid-cols-7 gap-5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-200 text-grey-200 dark:text-slate-800 rounded-md shadow-md py-5 px-0 2xl:py-5 2xl:px-3 flex justify-center items-center cursor-not-allowed"
                >
                  <div className="flex flex-col items-center justify-center">
                    <h5 className="text-md 2xl:text-lg mb-1">
                      {skill.iconTitle}
                    </h5>
                    <i
                      className={`${skill.iconClass} devicon text-3xl 2xl:text-5xl text-blue-500 dark:text-blue-700`}
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* BTH */}
          <div className="flex justify-center px-5 2xl:px-0 md:justify-end my-5">
            <ButtonBack href="/">Go back home</ButtonBack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
