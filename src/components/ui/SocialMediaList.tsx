import { socialMediaIcons } from "@/lib/data";

export default function SocialMediaList() {
  return (
    <>
      {socialMediaIcons.map((icon) => (
        <li key={icon.id} className="w-6">
          <a href={icon.url} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={icon.width}
              height={icon.height}
              className="light:fill-dark dark:fill-white hover:fill-primary dark:hover:fill-primary cursor-pointer"
              aria-label={icon.name}
              role="img"
            >
              <path d={icon.path} />
            </svg>
          </a>
        </li>
      ))}
    </>
  );
}
