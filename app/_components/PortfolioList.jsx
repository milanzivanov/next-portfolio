import PortfolioCard from "./PortfolioCard";
import { getWorks } from "../_lib/services";
import Link from "next/link";
import ButtonBack from "./ButtonBack";

async function PortfolioList() {
  const works = await getWorks();

  if (!works) {
    return null;
  }

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 dark:bg-slate-800 p-5 md:rounded-md mb-5">
        {works.map((work) => (
          <PortfolioCard key={work.id} work={work} />
        ))}
      </div>
      <div className="flex justify-center px-5 md:px-0 md:justify-end my-5">
        <ButtonBack href="/">Go back home</ButtonBack>
      </div>
    </>
  );
}

export default PortfolioList;
