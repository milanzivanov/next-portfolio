import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="relative z-20 px-0 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
