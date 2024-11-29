import Logo from "./Logo";
import Navigation from "./Navigation";

function Header({ toggleMobileNav }) {
  return (
    <header className="relative z-20 py-0 md:py-3">
      <div className="flex justify-between items-center bg-slate-50/40 shadow-sm px-5 py-3 md:rounded-md max-w-7xl mx-auto">
        <Logo />
        <Navigation toggleMobileNav={toggleMobileNav} />
      </div>
    </header>
  );
}

export default Header;
