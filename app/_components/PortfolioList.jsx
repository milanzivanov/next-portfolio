import PortfolioCard from "./PortfolioCard";
import { getWorks } from "../_lib/services";

async function PortfolioList() {
  const works = await getWorks();

  if (!works) {
    return null;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-md mb-5">
      {works.map((work) => (
        <PortfolioCard key={work.id} work={work} />
      ))}
    </div>
  );
}

export default PortfolioList;
