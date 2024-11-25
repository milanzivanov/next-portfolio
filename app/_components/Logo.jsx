import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        alt="Milan personal logo"
        width="38"
        height="38"
        quality={100}
        priority
      />
    </Link>
  );
}

export default Logo;
