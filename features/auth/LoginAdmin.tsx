"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "./useAuth";
import { TLoginForm } from "./types";
import { PrimaryButton } from "@/components/atoms";
interface IFormInput {
  email: string;
  password: string;
}

export const LoginAdmin: React.FC = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    defaultValues: {
      role: "admin",
    },
  });

  return (
    <main className="relative mx-8 items-center justify-center rounded-lg border px-6 shadow-xl lg:mx-28 lg:flex lg:min-h-screen lg:min-w-[1080px] lg:flex-row lg:px-0">
      <section className="relative hidden lg:flex lg:h-[855px] lg:w-full">
        <Image
          src={"/images/fotoLogin.webp"}
          layout="fill"
          priority
          objectFit="cover"
          alt={"FotoFamily"}
          className="bottom-0 rounded-md"
        />
        <p className="absolute left-16 top-40 w-3/4 justify-center text-heading-m font-bold leading-[50px] text-white">
          Selamat Datang Di Admin Panel MindParents
        </p>
      </section>

      <section className="flex flex-col gap-4 px-2 py-10 lg:w-[65%] lg:px-16">
        <section className="flex flex-col items-center ">
          <form
            onSubmit={handleSubmit((values) => login.mutateAsync(values))}
            noValidate
            className="flex w-full flex-col items-center gap-14"
          >
            <p className="text-center text-heading-s font-bold text-primary-purple md:text-heading-m">
              Masuk Akun Sebagai Admin
            </p>

            <section className="flex w-full flex-col gap-4 text-text-s md:text-text-m">
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
                  className="h-10 w-full rounded-md border p-2 pl-4"
                />
                {errors.email && (
                  <p className="text-text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label>
                  Kata Sandi<span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Kata Sandi"
                  type="password"
                  {...register("password", {
                    required: "Password wajib diisi",
                  })}
                  className="h-10 w-full rounded-md border p-2 pl-4"
                />
                {errors.password && (
                  <p className="text-text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 py-5">
                <PrimaryButton fullwidth>
                  <input type="submit" value="Masuk" className="w-full" />
                </PrimaryButton>
                <div className="text-right">
                  <Link
                    href="/forgotpassword"
                    className="text-text-xs text-blue-500"
                  >
                    Lupa password?
                  </Link>
                </div>
              </div>
            </section>
          </form>
        </section>
      </section>
    </main>
  );
};

export default LoginAdmin;
