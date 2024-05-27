interface DurationProps {
  children: React.ReactNode;
}

export const DurationButton = (props: DurationProps) => {
  const { children } = props;

  return (
    <section className="w-fit rounded-md bg-white px-3 py-1 text-text-s ">
      {children}
    </section>
  );
};
