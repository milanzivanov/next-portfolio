import { getSkills } from "../_lib/services";
import "devicon/devicon.min.css";

export const metadata = {
  title: "Portfolio page"
};

async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="w-full h-[calc(100dvh-80px)]  flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col bg-slate-50 p-5 pr-0 mt-5 rounded-md">
          <h1 className="text-4xl mb-5 text-gray-600 font-bold">
            Technologies
          </h1>

          <p className="pb-5 text-lg">
            Hire is the list of the tech tools I use for my works. React and
            Nextjs are my main focus.
          </p>

          <div className="flex flex-wrap gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-200 rounded-md shadow-md py-5 flex flex-col items-center flex-wrap basis-[calc(100%/8)] max-w-[calc(100%/8)]"
              >
                <div className="flex-1">
                  <h5 className="text-lg mb-1">{skill.iconTitle}</h5>
                  <i
                    className={`${skill.iconClass} devicon text-5xl text-blue-500`}
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
