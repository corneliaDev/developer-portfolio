import { projectsList } from "../../lib/data";
import Project from "./Project";

export default function ProjectList() {
  return (
    <>
      {/* Projects grid */}
      <ul className="grid mt-10 tablet:mt-16 desktop:mt-20 grid-cols-1 tablet:grid-cols-2 gap-y-10 tablet:gap-y-16 desktop:gap-y-[4.3125rem] tablet:gap-x-6 desktop:gap-x-8">
        {projectsList.map((item) => (
          <Project key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
