import Navbar from "@/components/Navbar/Navbar";
import { SignUp } from "@/features/auth/SignUp";

export default function PageSignUp() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center justify-center py-32 ">
        <Navbar />
        <SignUp />
      </main>
    </>
  );
}
