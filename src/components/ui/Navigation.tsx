// components/ui/Navigation.tsx
import Link from "./Link";
import BurgerNav from "./BurgerNav";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between w-full ">
      {/* Desktop navigation */}
      <ul className="hidden desktop:flex items-center gap-6 tablet:gap-8">
        <li>
          <Link to="/#experience" className="text-small ">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/#aboutMe" className="text-small">
            About me
          </Link>
        </li>
        <li>
          <Link to="/#projects" className="text-small">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/#contact" className="text-small">
            Contact me
          </Link>
        </li>
      </ul>

      {/* Mobile navigation */}
      <BurgerNav />
    </nav>
  );
}
