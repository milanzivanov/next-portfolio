import { getSkills } from "../_lib/services";
import ButtonBack from "../_components/ButtonBack";
import Title from "../_components/Title";
import SkillsItems from "../_components/skills/SkillsItems";

import "devicon/devicon.min.css";

export const metadata = {
  title: "Portfolio page"
};

async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="w-full 2xl:h-[calc(100dvh-86px)] flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
          <div className="flex flex-col bg-slate-50/20 dark:bg-slate-800 pt-5 pb-10 px-5 md:mt-5 shadow-md xl:rounded-md">
            <Title text="Technologies" />

            <p className="pb-5 text-slate-800 dark:text-slate-100 text-base 2xl:text-lg max-w-5xl">
              Here is a detailed list of the tech tools I regularly use in my
              work. My primary focus revolves around{" "}
              <span className="font-semibold tracking-wider text-blue-500">
                React
              </span>{" "}
              and
              <span className="font-semibold tracking-wider text-blue-500">
                {" "}
                Next.js
              </span>
              , which are at the core of most of my projects. These tools help
              me build dynamic and efficient web applications, making them an
              essential part of my development process.
            </p>

            <SkillsItems skills={skills} />
          </div>
          {/* BTH */}
          <div className="flex justify-center px-5 xl:px-0 md:justify-end my-5">
            <ButtonBack href="/">Go back home</ButtonBack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
