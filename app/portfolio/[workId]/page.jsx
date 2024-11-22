import { getWork, getWorks } from "@/app/_lib/services";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { title } = await getWork(params.workId);
  return {
    title: title
  };
}

export async function generateStaticParams() {
  const works = await getWorks();
  const ids = works.map((work) => ({ workId: String(work.id) }));
  console.log(ids);
  return ids;
}

async function PortfolioPage({ params }) {
  const work = await getWork(params.workId);
  return (
    <div className="w-full h-[calc(100dvh-80px)] flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 p-5 mb-5 rounded-md flex items-center shadow-md">
          <div className="flex-1 pr-5">
            <h1 className="text-4xl mb-5 text-gray-600 font-bold">
              {work.title}
            </h1>
            <p className="text-grey-200 text-lg mb-10 bg-gray-100 rounded-md p-5 shadow-md">
              {work.body}
            </p>
            <ul className="space-y-2 mb-5">
              <h3 className="text-lg font-semibold tracking-wide">
                Technologies used:
              </h3>
              {work.technologiesUsed.map((skill, i) => (
                <li key={i} className="inline-block mr-2">
                  <i
                    className={`${skill.svgIcon} text-blue-500 devicon text-xl`}
                  ></i>
                </li>
              ))}
            </ul>

            <div className="flex justify-end">
              <Link
                className="inline-block bg-blue-500 rounded-md text-gray-100 px-6 py-3 text-lg"
                href={work.linkSrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                View it live
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={work.src}
              style={{ width: "auto", height: "auto" }}
              width={400}
              height={400}
              alt={work.title}
              className="object-cover object-top rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            href="/portfolio"
            className="inline-block rounded-md bg-blue-500 text-gray-100 px-6 py-3 text-lg"
          >
            Go back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
