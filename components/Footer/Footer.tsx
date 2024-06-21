"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";

export const Footer = () => {
  return (
    <main className="bg-[#290D4B] px-6 py-20 text-white md:px-28 md:py-28">
      <div className="flex flex-col gap-4 md:gap-10 lg:flex-row ">
        <div className="flex  flex-col lg:w-1/2 ">
          <div className="flex flex-row items-center">
            <Image
              src="/icons/mp.svg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full object-cover md:h-[65px] md:w-[65px]"
            />
            <p className="ml-2 text-2xl font-bold">MindParents</p>
          </div>
          <p className="mt-8 text-justify text-text-s">
            Platform berbagai hal tentang parenting, perkembangan anak, masalah
            anak, serta masalah kehamilan. Platform dengan teknologi kecerdasan
            buatan untuk mendapatkan jawaban secara cepat. Artikel parenting
            yang siap menambah wawasan terkait kehamilan dan
          </p>
        </div>
        <div className="basis-1/3">
          <div className="grid grid-cols-1 gap-2 py-10 text-text-s md:grid-cols-2">
            <p className="col-span-2 font-bold">Kategori</p>
            <Link href="/">Beranda</Link>
            <Link href="/">ChatBot</Link>
            <Link href={"/kehamilan"}>Masa Kehamilan</Link>
            <Link href={"/"}>Tanya Psikolog</Link>
            <Link href={"/persiapan-ortu"}>Persiapan Orangtua</Link>
            <Link href={"/perkembangan-anak"}>Perkembangan Anak</Link>
            <Link href={"/"} className="col-span-2 mt-4 font-bold">
              Informasi
            </Link>
            <Link href={"/"}>Tentang Kami</Link>
            <Link href={"/"}>Kebijakan Privasi</Link>
            <Link href={"/"}>Tim Kami</Link>
            <Link href={"/"}>Syarat dan Ketentuan</Link>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="mt-10">
            <p className="font-bold">
              Dapatkan Informasi Terkini dan Insight dari MindParents!
            </p>
            <div className="my-4 flex flex-row">
              <input
                type="text"
                placeholder="youremail@gmail.com"
                className="w-3/4 rounded-l-lg p-2"
              />
              <button className="rounded-r-lg bg-primary-purple p-2 text-text-s">
                Kirim
              </button>
            </div>
            <p className="my-4 font-bold">Terhubung dengan kami</p>
            <div className="flex flex-row">
              <div className="rounded-full bg-white p-2">
                <FaInstagram className="text-2xl text-primary-purple" />
              </div>
              <div className="ml-2 rounded-full bg-white p-2">
                <FaFacebook className="text-2xl text-primary-purple" />
              </div>
              <div className="ml-2 rounded-full bg-white p-2">
                <FaXTwitter className="text-2xl text-primary-purple" />
              </div>
              <div className="ml-2 rounded-full bg-white p-2">
                <FaLinkedin className="text-2xl text-primary-purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
