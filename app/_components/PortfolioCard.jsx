import Image from "next/image";
import Link from "next/link";

import "devicon/devicon.min.css";

function PortfolioCard({ work }) {
  return (
    <>
      <div className="bg-gray-100 shadow-md p-5 rounded-md">
        <Link href={`/portfolio/${work.id}`} key={work.id}>
          <h2 className="tracking-wider text-xl pb-1 font-semibold text-gray-800">
            {work.title}
          </h2>

          <div className="relative">
            <Image
              src={work.src}
              style={{ width: "auto", height: "auto" }}
              width={400}
              height={400}
              alt={work.title}
              priority
              className="object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gray-800/10"></div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PortfolioCard;
