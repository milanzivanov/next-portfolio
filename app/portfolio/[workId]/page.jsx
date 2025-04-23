import ButtonBack from "@/app/_components/ButtonBack";
import { getWork, getWorks } from "@/app/_lib/services";
import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import DescriptionText from "@/app/_components/DescriptionText";
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
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        <div className="bg-gray-50 xl:rounded-md p-5 mb-5 shadow-md">
          <h1 className="text-2xl md:text-3xl mb-3 text-gray-600 font-bold">
            {work.title}
          </h1>
          <div className=" flex flex-col md:flex-row">
            <div className="flex-1 md:pr-5">
              <DescriptionText text={work.body} work={work.projectTime} />

              <ul className="flex md:flex-row md:items-center flex-col bg-gray-100 md:bg-transparent md:rounded-none md:shadow-none rounded-md shadow-md pl-5 md:pl-0 py-5 mb-5">
                <h3 className="text-base text-grey-200 dark:text-slate-800 md:text-lg font-semibold tracking-wider mr-3 mb-2 md:mb-0">
                  Technologies used:
                </h3>
                <div className="flex flex-wrap">
                  {work.technologiesUsed.map((skill, i) => (
                    <li key={i} className="flex items-center mr-2">
                      <i
                        className={`${skill.svgIcon} text-blue-500 dark:text-blue-700 devicon text-xl`}
                      ></i>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
            <div className="relative flex-1 ">
              <Image
                src={work.src}
                style={{ width: "auto", height: "auto" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                width={400}
                height={400}
                alt={work.title}
                className="object-cover object-top rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <Link
              className="flex items-center w-full md:w-auto justify-center bg-blue-500 dark:bg-blue-700 hover:bg-blue-800 rounded-md text-gray-100 px-6 py-3 text-lg"
              href={work.linkSrc}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">View it live</span>
              <FaArrowCircleRight className="size-5" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center px-5 xl:px-0 md:justify-end mb-5 md:mb-0">
          <ButtonBack href="/portfolio">Back to portfolio</ButtonBack>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
