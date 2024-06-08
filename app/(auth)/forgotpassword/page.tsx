import { Navbar } from "@/components/Navbar";
import { ForgotPassword } from "@/features/auth/forgotpassword";

export default function PageForgetPassword() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center justify-center pt-32 ">
        <Navbar />
        <ForgotPassword />
      </main>
    </>
  );
}
