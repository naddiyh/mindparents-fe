interface PrimaryProps {
  children: React.ReactNode;
  fullwidth: boolean;
  border: boolean;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryProps> = ({
  children,
  onClick,
  fullwidth = false,
  border = false,
}) => {
  const fullWidth = fullwidth ? "w-full" : "w-fit";
  const Border = border ? "border" : "";
  return (
    <>
      <button
        onClick={onClick}
        className={`${fullWidth} ${Border} items-center justify-center rounded-md bg-primary-purple p-[6px_24px] text-text-s text-white duration-300
        hover:bg-primary-purple-hover md:text-text-m  `}
      >
        {children}
      </button>
    </>
  );
};
