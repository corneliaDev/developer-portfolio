import SocialMediaList from "./SocialMediaList";

export default function LogoSection() {
  return (
    <section className="desktop:mx-[10.3125rem] tablet:mx-[1.875rem] py-5 tablet:py-[1.8125rem] desktop:py-[2.4375rem] flex flex-col gap-5 tablet:gap-0 tablet:flex-row tablet:justify-between items-center z-50">
      <p className="text-logoNameMobil tablet:text-logoName font-bold ">
        cornelia mueller
      </p>
      <div className="">
        <SocialMediaList />
      </div>
    </section>
  );
}
