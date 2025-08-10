import { ProjectItem } from "@/lib/types";
import Link from "./Link";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ProjectImage } from "./ProjectImage";

type ProjectProps = {
  item: ProjectItem;
};

export default function Project({ item }: ProjectProps) {
  return (
    <li className="flex flex-col gap-5">
      <figure className="relative group">
        {/* Image Wrapper */}
        <div className="h-[15.8125rem] desktop:h-[25rem] overflow-hidden ">
          <ProjectImage
            image={item.image}
            image_mobile={item.image_mobile}
            alt={item.alt}
          />
        </div>

        {/* Title & Tech Stack */}
        <figcaption className="mt-5">
          <h3 className="text-heading-md uppercase">{item.title}</h3>
          <p className="text-body uppercase py-1">{item.languages}</p>
        </figcaption>

        {/* Hover Overlay Actions */}
        <div className="hidden desktop:block absolute top-0 left-0 w-full h-[25rem] bg-white/70 dark:bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

        <div className="desktop:absolute desktop:top-1/2 desktop:left-1/2 desktop:-translate-x-1/2 desktop:-translate-y-2/3 desktop:opacity-0 desktop:group-hover:opacity-100 desktop:transition-all desktop:duration-700 text-caption text-center flex justify-start gap-7 desktop:flex-col desktop:justify-center z-50">
          <div className="desktop:group-hover:pb-1 transition-all duration-700">
            <Link to={item.linkProject}>view project</Link>
          </div>
          <div className="desktop:group-hover:pt-1 transition-all duration-700">
            <Link to={item.linkGithub}>view code</Link>
          </div>
        </div>
      </figure>
    </li>
  );
}
