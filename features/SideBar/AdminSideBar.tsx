import Link from "next/link";
import { UserPage } from "@/features/user/";
import { list } from "./ListSide";
import Image from "next/image";
export const SideBar = () => {
  return (
    <main className="fixed z-20 flex min-h-screen w-full flex-col gap-10 bg-primary-purple  px-10 pt-10  text-white shadow-2xl md:w-[20%]">
      <Image src={"/icons/mp.svg"} alt="logo" width={60} height={60} />
      <section className="flex flex-col gap-5 ">
        {list.map((item) => (
          <div key={item.id}>
            <Link href={item.src}>
              <button>{item.title}</button>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};
