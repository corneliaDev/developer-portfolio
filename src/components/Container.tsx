type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-[23.4375rem] tablet:w-[48rem] desktop:w-[90rem] flex flex-col items-center tablet:items-stretch relative">
      {children}
    </div>
  );
}
