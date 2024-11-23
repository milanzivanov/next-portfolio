import { getSkills } from "../_lib/services";
import "devicon/devicon.min.css";

export const metadata = {
  title: "Portfolio page"
};

async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="w-full md:h-[calc(100dvh-80px)] h-full  flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col bg-slate-50 p-5 mt-5 rounded-md">
          <h1 className="tracking-wider text-2xl md:text-4xl mb-5 text-gray-600 font-bold">
            Technologies
          </h1>

          <p className="pb-5 text-grey-200 text-base md:text-lg">
            Hire is the list of the tech tools I use for my works.{" "}
            <span className="font-semibold tracking-wider">React</span> and{" "}
            <span className="font-semibold tracking-wider">Nextjs</span> are my
            main focus.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-200 rounded-md shadow-md py-5 px-3 flex justify-center items-center cursor-not-allowed"
              >
                <div className="flex flex-col items-center justify-center">
                  <h5 className="text-lg mb-1">{skill.iconTitle}</h5>
                  <i
                    className={`${skill.iconClass} devicon text-3xl lg:text-5xl text-blue-500`}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
