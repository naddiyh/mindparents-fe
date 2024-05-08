interface PrimaryProps {
  children: React.ReactNode;
  fullwidth: boolean;
  onClick?: () => void;
}

const PrimaryButton = (props: PrimaryProps) => {
  const { children, onClick, fullwidth = false } = props;
  const fullWidth = fullwidth ? "w-full" : "w-fit";
  return (
    <>
      <button
        onClick={onClick}
        className={`${fullWidth}  items-center justify-center rounded-md border bg-primary-purple  p-[7px_14px]
        
      text-white duration-300 hover:bg-primary-purple-hover`}
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;
