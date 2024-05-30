// ForgotPassword.jsx
"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { auth } from "@/config/firebase";
import { getFirebaseErrorMessage } from "@/utils/getFirebaseError";
import { checkAccountExist } from "./service";
import { TForgotPassword } from "./types";
import { PrimaryButton } from "@/components/atoms";

export const ForgotPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForgotPassword>();

  const handleSendResetPassword = async ({ email }: TForgotPassword) => {
    const isEmailExist = await checkAccountExist(email);

    if (!isEmailExist) {
      toast.error("Sorry, we couldn't find your account");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent, thank you!");
      router.push("/login");
    } catch (error) {
      toast.error(
        error instanceof FirebaseError
          ? getFirebaseErrorMessage(error.code)
          : "Unknown Error",
      );
    }
  };

  return (
    <main className="relative  justify-center px-8 lg:px-24">
      <section className="h-[400px] max-w-[380px] rounded-lg px-10 shadow-xl md:min-h-[500px]">
        <section className="flex h-full flex-col  items-center pt-20 md:pt-24 ">
          <form
            onSubmit={handleSubmit(handleSendResetPassword)}
            noValidate
            className="flex w-full flex-col gap-8  "
          >
            <p className="text-center text-heading-s font-bold text-primary-purple md:text-heading-m">
              Reset Password
            </p>

            <section className="flex w-full flex-col justify-center gap-4  text-text-s md:text-text-m">
              <h2> Masukkan akun email anda untuk reset password</h2>
              <div>
                <label>
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="youremail@gmail.com"
                  {...register("email", {
                    required: "Email wajib diisi",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Format email tidak benar",
                    },
                  })}
                  className="h-10 w-full rounded-md border p-2 pl-4 outline-none"
                />
                {errors.email && (
                  <p className="text-text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="rounded-md border bg-primary-purple py-1 text-text-s text-white"
              >
                Send reset password link
              </button>
            </section>
          </form>
        </section>
      </section>
    </main>
  );
};
