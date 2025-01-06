import { projectsList } from "../lib/data";
import Link from "./Link";
import Project from "./Project";

export default function ProjectsList() {
  return (
    <section className="mt-20 tablet:mt-[6.25rem] desktop:mt-[8.75rem] mx-4 tablet:mx-[1.875rem] desktop:mx-[10.3125rem]">
      <div className="flex justify-between items-center">
        <div className="text-h1Mobile tablet:text-h1Tablet desktop:text-h1 ">
          Projects
        </div>
        <Link link="#contact" text="contact me" />
      </div>
      <ul className="grid tablet:grid-cols-2 grid-rows-3 tablet:gap-x-6 desktop:gap-x-[1.875rem] gap-y-10 tablet:gap-y-[3.75rem] desktop:gap-y-[4.3125rem] mt-10 tablet:mt-[3.75rem] desktop:mt-20">
        {projectsList.map((item) => (
          <Project key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
