"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import PrimaryButton from "@/components/atoms/Buttons/PrimaryButton";
import { FcGoogle } from "react-icons/fc";

interface IFormInput {
  nama: string;
  email: string;
  password: string;
  birth_of_parent: Date;
  birth_of_child: Date;
}
const PageLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      <main className="relative mx-8 items-center justify-center rounded-lg border px-6 shadow-xl lg:mx-28 lg:flex lg:min-h-screen lg:min-w-[1080px] lg:flex-row lg:justify-between lg:px-0">
        <section className="relative hidden lg:flex lg:h-[855px] lg:w-[60%]">
          <Image
            src={"/images/fotoLogin.webp"}
            layout="fill"
            priority
            objectFit="cover"
            alt={"FotoFamily"}
            className="bottom-0 rounded-md"
          />
          <p className="absolute left-16 top-40 w-3/4 justify-center text-heading-m font-bold leading-[50px] text-white">
            Gabung Bersama MindParents dan Dapatkan Berbagai Konten Menarik
            Seputar Parenting
          </p>
        </section>
        <section>
          <section className="flex w-full flex-col gap-4 px-6 py-10 lg:px-14">
            <section className="flex flex-col items-center ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col items-center gap-14 "
              >
                <p className="text-heading-s font-bold text-primary-purple md:text-heading-m">
                  Masuk Akun
                </p>
                <section className="flex w-full flex-col gap-4  text-text-s md:text-text-m">
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
                        pattern: {
                          value:
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,

                          message: "Format kata sandi belum valid",
                        },
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
                      <input type="submit" />
                    </PrimaryButton>
                    <div className="text-right">
                      <Link href={""} className="text-text-s text-blue-500">
                        Lupa password?
                      </Link>
                    </div>
                  </div>
                </section>
              </form>
              <section className="flex w-full flex-col items-center justify-center gap-4 ">
                <p className="text-text-m">atau masuk dengan</p>
                <Link
                  href={""}
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-md border text-text-s md:text-text-m"
                >
                  <FcGoogle className="h-5 w-5 md:h-6 md:w-6" />
                  Google
                </Link>

                <div className="flex flex-col gap-1 text-center text-text-s">
                  <p className="">
                    Belum punya akun?{" "}
                    <Link
                      href={"/signup"}
                      className="text-primary-purple underline"
                    >
                      Masuk
                    </Link>
                  </p>
                </div>
              </section>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default PageLogin;
