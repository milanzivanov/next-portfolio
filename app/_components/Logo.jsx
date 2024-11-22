import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo-2021.svg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        alt="Milan personal logo"
        width="48"
        height="48"
        quality={100}
        priority
      />
    </Link>
  );
}

export default Logo;
