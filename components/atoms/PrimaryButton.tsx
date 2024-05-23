interface PrimaryProps {
  children: React.ReactNode;
  fullwidth: boolean;

  onClick?: () => void;
}

export const PrimaryButton = (props: PrimaryProps) => {
  const { children, onClick, fullwidth = false } = props;
  const fullWidth = fullwidth ? "w-full" : "w-fit";
  return (
    <>
      <button
        onClick={onClick}
        className={`${fullWidth} items-center justify-center rounded-md bg-primary-purple p-[6px_24px] text-text-s text-white duration-300
        hover:bg-primary-purple-hover md:text-text-m  `}
      >
        {children}
      </button>
    </>
  );
};