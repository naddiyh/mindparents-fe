interface SubArticleProps {
  children: React.ReactNode;
}

export const SubArticleButton = (props: SubArticleProps) => {
  const { children } = props;

  return (
    <div className="flex w-fit flex-col gap-2 ">
      <h2 className="text-text-m font-semibold md:text-text-l">{children}</h2>
      <p className="border border-b border-primary-purple "></p>
    </div>
  );
};
