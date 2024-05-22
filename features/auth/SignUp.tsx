"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { PrimaryButton } from "@/components/atoms/index";
import { FcGoogle } from "react-icons/fc";
import { Auth } from "firebase/auth";

enum TopikEnum {
  Persiapan_Orang_Tua = "Persiapan Orang Tua",
  Masa_Kehamilan = "Masa Kehamilan",
  Perkembangan_Anak = "Perkembangan Anak",
}

interface IFormInput {
  topik: TopikEnum;
  name: string;
  email: string;
  password: string;
  birth_of_parent: Date;
  birth_of_child: Date;
}
export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      <main className="relative mx-8  items-center justify-center rounded-lg border px-6 shadow-xl lg:mx-28 lg:flex lg:min-h-screen lg:min-w-[1200px] lg:justify-between  lg:px-0">
        <section className="relative hidden lg:flex lg:h-[955px] lg:w-[60%]">
          <Image
            src={"/images/fotoLogin.webp"}
            layout="fill"
            priority
            objectFit="cover"
            alt={"FotoFamily"}
            className="bottom-0 rounded-md"
          />
          <p className="absolute left-24 top-40 w-3/4 justify-center text-heading-m font-bold leading-[50px] text-white">
            Gabung Bersama MindParents dan Dapatkan Berbagai Konten Menarik
            Seputar Parenting
          </p>
        </section>
        <section className="">
          <section className="flex w-full flex-col gap-4 py-10 md:px-14">
            <section className="flex flex-col items-center gap-3 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col items-center gap-6 "
              >
                <p className="text-heading-s font-bold text-primary-purple md:text-heading-m">
                  Daftar Akun
                </p>
                <section className="flex w-full flex-col gap-4  text-text-s md:text-text-m">
                  <div>
                    <label>
                      Nama<span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Nama"
                      {...register("name", { required: "Nama wajib diisi" })}
                      className="h-10 w-full rounded-md border  pl-4"
                    />
                    {errors.name && (
                      <p className="text-text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

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

                  <div className="">
                    <label>
                      Tanggal Lahir<span className="text-red-500">*</span>
                    </label>

                    <input
                      type="date"
                      {...register("birth_of_parent", {
                        required: "Tanggal lahir wajib diisi",
                      })}
                      className="h-10 w-full rounded-md border p-2 pl-4"
                    />
                    {errors.birth_of_parent && (
                      <p className="text-text-xs text-red-500">
                        {errors.birth_of_parent.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label>
                      Tanggal Lahir Anak<span className="text-red-500">*</span>
                    </label>

                    <input
                      type="date"
                      {...register("birth_of_child", {
                        required: "Tanggal lahir wajib diisi",
                      })}
                      className="h-10 w-full rounded-md border p-2 pl-4"
                    />
                    {errors.birth_of_child && (
                      <p className="text-text-xs text-red-500">
                        {errors.birth_of_child.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label>
                      Fokus Parenting<span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("topik", {
                        required: "Topik wajib dipilih",
                      })}
                      className=" h-10 w-full rounded-md border  p-2 pr-2"
                    >
                      <option value="Persiapan Orang Tua">
                        Persiapan Orang Tua
                      </option>
                      <option value="Masa Kehamilan">Masa Kehamilan</option>
                      <option value="Perkembangan Anak">
                        Perkembangan Anak
                      </option>
                    </select>
                    {errors.topik && (
                      <p className="text-text-xs text-red-500">
                        {errors.topik.message}
                      </p>
                    )}
                  </div>
                  <PrimaryButton fullwidth>
                    <input type="submit" />
                  </PrimaryButton>
                </section>
              </form>

              <section className="flex flex-col items-center justify-center gap-4 py-2">
                <p className="text-text-m">atau</p>
                <button className="flex h-10 w-full items-center justify-center gap-2 rounded-md border text-text-s md:text-text-m">
                  <FcGoogle className="h-5 w-5 md:h-6 md:w-6" />
                  Daftar dengan google
                </button>

                <div className="flex flex-col gap-1 text-center text-text-s">
                  <p className="">
                    Sudah punya akun?{" "}
                    <Link
                      href={"/login"}
                      className="text-primary-purple underline"
                    >
                      Masuk
                    </Link>
                  </p>
                  <p className="">
                    Dengan mendaftar, kamu menyetujui{" "}
                    <Link href={""} className="text-primary-purple underline">
                      Persyaratan Pengguna
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
function useAuth(): { SignInWithGoogle: any } {
  throw new Error("Function not implemented.");
}
