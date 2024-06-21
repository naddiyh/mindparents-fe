import Link from "next/link";
import { UserPage } from "@/features/user/";
import { list } from "./ListSide";

export const SideBar = () => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-primary-purple px-10 pt-10 text-white shadow-xl md:w-[20%]">
      <section className="flex flex-col gap-5">
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
