import Link from "../ui/Link";

export default function AboutMeSection() {
  return (
    <section id="aboutMe" className="px-4 tablet:px-0 scroll-mt-48">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="text-heading-xl">About me</h2>
        <Link to="#contact" className="text-small">
          {" "}
          Contact me
        </Link>
      </div>
      <p className="text-body  mt-6 tablet:mt-8 desktop:mt-12">
        Based in Bavaria, Germany, I build modern, accessible websites with a
        focus on clean code and user-friendly design. I love exploring new
        technologies through projects and challenges, often combining hands-on
        development with AI support. Beyond front-end work, I specialize in
        Microsoft SharePoint and collaboration solutions, including custom
        intranet setups and cloud data migration. Currently, I work part-time as
        an Application Specialist for clinical applications. This site is part
        of my training and is based on a layout challenge from Frontend Mentor,
        where I practice and showcase my web development skills..
      </p>
    </section>
  );
}
