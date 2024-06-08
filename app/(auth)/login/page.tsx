import { Navbar } from "@/components/Navbar";
import { Login } from "@/features/auth";

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
