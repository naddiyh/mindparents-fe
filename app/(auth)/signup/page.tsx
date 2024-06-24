import { SignUp } from "@/features/auth";
import { Navbar } from "@/components/Navbar";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center py-32">
      <Navbar />
      <SignUp />
    </main>
  );
}
