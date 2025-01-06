import { socialMediaIcons } from "../lib/data";

export default function SocialMediaList() {
  return (
    <ul className="flex items-center gap-[1.6rem] tablet:gap-8 ">
      {socialMediaIcons.map((icon) => (
        <li key={icon.id} className="w-6">
          <a href={icon.url} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={icon.width}
              height={icon.height}
              className="fill-white hover:fill-primDGreen cursor-pointer"
              aria-label={icon.name}
              role="img"
            >
              <path d={icon.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
