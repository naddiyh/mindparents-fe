import { TfiClose } from "react-icons/tfi";
import Navitems from "./Navitems";
import { FaCircleUser } from "react-icons/fa6";
import { PrimaryButton } from "../atoms/index";

interface NavModalProps {
  className?: string;
  closeButton: () => void;
  isOpen: boolean;
}

const NavModal = ({ className, closeButton, isOpen }: NavModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 min-h-screen border bg-black bg-opacity-40 backdrop-blur-sm"
          onClick={closeButton}
        ></div>
      )}
      <section
        className={`${className} fixed left-0  top-0 z-50 flex h-screen w-[80%] flex-col gap-10  bg-primary-purple px-8 pb-10
           pt-16 text-text-s text-white shadow-right transition-transform duration-300 ${
             isOpen ? "translate-x-0" : "-translate-x-full"
           }`}
      >
        <button>
          <TfiClose
            onClick={closeButton}
            className={`ease absolute right-6 top-6 h-4 w-4 transition duration-300 
          `}
          />
        </button>
        <div className="flex flex-col ">
          <FaCircleUser className="text-primary-white block h-10 w-10" />
        </div>
        <Navitems />
        <PrimaryButton fullwidth={false} border={true}>
          Keluar
        </PrimaryButton>
      </section>
    </>
  );
};

export default NavModal;
