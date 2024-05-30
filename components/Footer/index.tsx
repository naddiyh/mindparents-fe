"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#290D4B] text-white">
      <div className="p-28">
        <div className="flex flex-row">
          <div className="basis-1/3 p-4">
            <div className="flex flex-row items-center">
              <img
                src="/icons/mp.svg"
                alt="logo"
                className="h-[65px] w-[65px] rounded-full object-cover"
              />
              <p className="ml-2 text-2xl font-bold">MindParents</p>
            </div>
            <p className="mt-8 text-justify">
              Platform berbagai hal tentang parenting, perkembangan anak,
              masalah anak, serta masalah kehamilan. Platform dengan teknologi
              kecerdasan buatan untuk mendapatkan jawaban secara cepat. Artikel
              parenting yang siap menambah wawasan terkait kehamilan dan
            </p>
          </div>
          <div className="mx-16 basis-1/3">
            <div className="mt-10 grid grid-cols-2 gap-2">
              <p className="col-span-2 font-bold">Kategori</p>
              <p>Beranda</p>
              <p>ChatBot</p>
              <p>Masa Kehamilan</p>
              <p>Tanya Psikolog</p>
              <p>Persiapan Orangtua</p>
              <p>FAQ</p>
              <p>Perkembangan Anak</p>
              <p className="col-span-2 mt-4 font-bold">Informasi</p>
              <p>Tentang Kami</p>
              <p>Kebijakan Privasi</p>
              <p>Tim Kami</p>
              <p>Syarat dan Ketentuan</p>
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
                  placeholder="Masukkan Email Anda"
                  className="w-3/4 rounded-l-lg p-2"
                />
                <button
                  onClick={() => {
                    alert("Kiriman Berhasil!");
                  }}
                  className="rounded-r-lg bg-[#7631CC] p-2"
                >
                  Kirim
                </button>
              </div>
              <p className="my-4 font-bold">Terhubung dengan kami</p>
              <div className="flex flex-row">
                <div className="rounded-full bg-white p-2">
                  <FaInstagram className="text-2xl text-[#7631CC]" />
                </div>
                <div className="ml-2 rounded-full bg-white p-2">
                  <FaFacebook className="text-2xl text-[#7631CC]" />
                </div>
                <div className="ml-2 rounded-full bg-white p-2">
                  <FaXTwitter className="text-2xl text-[#7631CC]" />
                </div>
                <div className="ml-2 rounded-full bg-white p-2">
                  <FaLinkedin className="text-2xl text-[#7631CC]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
