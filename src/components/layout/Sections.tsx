type SectionsProps = {
  children: React.ReactNode;
};

export default function Sections({ children }: SectionsProps) {
  return (
    <div className="tablet:mx-4 desktop:mx-40 flex flex-col items-center justify-center gap-16 tablet:gap-20 desktop:gap-40 relative">
      {children}
    </div>
  );
}
