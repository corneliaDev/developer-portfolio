type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[23.5rem] tablet:max-w-[48rem] desktop:max-w-[90rem] flex flex-col items-center tablet:items-stretch gap-16 tablet:gap-20 desktop:gap-40 relative">
      {children}
    </div>
  );
}
