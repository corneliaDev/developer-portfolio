import Link from "../ui/Link";
import SocialMediaList from "../ui/SocialMediaList";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 text-center tablet:text-left tablet:py-7 desktop:flex-row desktop:justify-between desktop:py-10">
      <p className="font-bold text-logo-name">cornelia mueller</p>

      <div className="flex flex-col items-center gap-4 tablet:flex-row tablet:gap-8">
        <ul className="flex gap-4 tablet:gap-8">
          <li>
            <Link to="/impressum" className="text-small">
              Impressum
            </Link>
          </li>
          <li>
            <Link to="/datenschutz" className="text-small">
              Datenschutz
            </Link>
          </li>
        </ul>

        <ul className="flex gap-[1.6rem] tablet:gap-8">
          <SocialMediaList />
        </ul>
      </div>
    </footer>
  );
}
