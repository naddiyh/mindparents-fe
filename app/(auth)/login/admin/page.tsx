import { LoginAdmin } from "@/features/auth/LoginAdmin";
import { Navbar } from "@/components/Navbar";

export default function PageAdmin() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center justify-center py-32 ">
        <Navbar />
        <LoginAdmin />
      </main>
    </>
  );
}
