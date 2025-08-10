import Navigation from "../ui/Navigation";
import DarkModeToggle from "../ui/DarkModeToggle";
import Link from "../ui/Link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-32 bg-slate-100/60  dark:bg-dark/60 backdrop-blur-sm px-4 tablet:px-8 desktop:px-40 py-5 tablet:py-7 desktop:py-10">
      <div className="max-w-[90rem] mx-auto flex flex-row justify-between items-center gap-4 tablet:gap-0 h-full">
        {/* Logo / Name */}
        <p className="text-logo-name font-bold hover:scale-105 transition-transform duration-300">
          <Link
            to="/"
            className="text-logo-name font-bold text-dark dark:text-white no-underline hover:no-underline border-none"
          >
            cornelia mueller
            <span className="text-primary uppercase block">Websolutions</span>
          </Link>
        </p>

        {/* Navigation + Theme Toggle */}
        <div className="flex items-center gap-4 tablet:gap-8 desktop:gap-12 relative">
          <Navigation />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
