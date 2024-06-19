interface ShowMoreProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const ShowMore = (props: ShowMoreProps) => {
  const { children, onClick } = props;

  return (
    <button
      className="w-fit rounded-md border border-primary-purple px-3 py-1 text-text-s font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
