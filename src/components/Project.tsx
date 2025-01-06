import { ProjectItem } from "../lib/types";
import Link from "./Link";

type ProjectProps = {
  item: ProjectItem;
};

export default function Project({ item }: ProjectProps) {
  return (
    <li className="flex flex-col gap-5">
      <figure className="relative group">
        <div className="h-[15.8125rem] desktop:h-[25rem] overflow-hidden">
          <img
            loading="lazy"
            className="h-full object-cover scale-100 backface-hidden desktop:transition-all desktop:duration-500 desktop:group-hover:scale-110 desktop:group-hover:blur-sm desktop:group-hover:brightness-[0.4]"
            src={`./images/${item.image}`}
            alt={item.title}
          />
        </div>
        <h3 className="text-h3 uppercase pt-5">{item.title}</h3>
        <p className="text-body text-lightGray uppercase py-1">
          {item.languages}
        </p>
        <figcaption className="flex justify-start gap-[1.875rem] desktop:gap-0 desktop:flex-col desktop:justify-center desktop:absolute desktop:top-1/2 desktop:left-1/2 desktop:-translate-x-1/2 desktop:-translate-y-2/3 text-caption text-center desktop:duration-500 desktop:backface-hidden desktop:group-hover:opacity-100 desktop:opacity-0 desktop:transition-all ">
          <div className="desktop:group-hover:pb-4 transition-all duration-700">
            <Link link={item.linkProject} text="view project" />
          </div>
          <div className="desktop:group-hover:pt-4 transition-all duration-700">
            <Link link={item.linkGithub} text="view code" />
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
