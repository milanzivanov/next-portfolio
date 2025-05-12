import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeSwitch from "../ThemeSwitch";

function Header({ toggleMobileNav }) {
  return (
    <header className="relative z-20 py-0 md:py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:bg-slate-50/20 md:dark:bg-slate-900 px-5 py-3 2xl:rounded-md md:shadow-sm">
        <Logo />
        <Link href="#" className="flex md:hidden">
          <ThemeSwitch />
        </Link>
        <Navigation toggleMobileNav={toggleMobileNav} />
      </div>
    </header>
  );
}

export default Header;
