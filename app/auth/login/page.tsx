import Navbar from "@/components/Navbar/Navbar";
import Login from "@/features/auth/Login";
import Image from "next/image";

export default function PageLogin() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center justify-center py-32 ">
        <Navbar />
        <Login />
      </main>
    </>
  );
}
