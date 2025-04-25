import PortfolioCardContainer from "./PortfolioCardContainer";
import { getWorks } from "../../_lib/services";
import ButtonBack from "../ButtonBack";

async function PortfolioList() {
  const works = await getWorks();

  if (!works) {
    return null;
  }

  return (
    <>
      <PortfolioCardContainer works={works} />

      <div className="flex justify-center px-5 xl:px-0 md:justify-end my-5">
        <ButtonBack href="/">Go back home</ButtonBack>
      </div>
    </>
  );
}

export default PortfolioList;
