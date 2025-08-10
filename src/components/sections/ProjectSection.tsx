import Link from "../ui/Link";
import ProjectList from "../ui/ProjectList";

export default function ProjectSection() {
  return (
    <main id="projects" className="px-4 tablet:px-0 scroll-mt-48">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="text-heading-xl">Projects</h2>
        {/* <Link link="#contact" text="contact me" /> */}
        <Link to="#contact" className="text-small">
          {" "}
          Contact me
        </Link>
      </div>
      {/* Projects grid */}
      <ProjectList />
    </main>
  );
}
