import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

interface NavlinkProps {
  title: string;
  href: string;
  // icon?: IconType;
}

export const navlink: NavlinkProps[] = [
  {
    title: "Beranda",
    href: "/#beranda",
  },
  {
    title: "Persiapan Orang Tua",
    href: "/persiapan-ortu",
    // icon: IoIosArrowDown,
  },
  { title: "Masa Kehamilan", href: "/kehamilan" },
  {
    title: "Perkembangan Anak",
    href: "/perkembangan-anak",
    // icon: IoIosArrowDown,
  },
  { title: "Tanya Ahli", href: "/tanyaahli" },
  { title: "Forum Diskusi", href: "/forumdiskusi" },
];

// export const kehamilan = [
//   { title: "Trisemester I", href: "/kehamilan/trisemester-1" },
//   { title: "Trisemester II", href: "/kehamilan/trisemester-2" },
//   { title: "Trisemester III", href: "/kehamilan/trisemester-3" },
// ];

// export const perkembangan = [
//   { title: "0-1 Tahun", href: "/perkembangan-anak/0-1tahun" },
//   { title: "1-2 Tahun", href: "/perkembangan-anak/1-2tahun" },
//   { title: "2-6 Tahun", href: "/perkembangan-anak/2-6tahun" },
//   { title: "6-12 Tahun", href: "/perkembangan-anak/6-12tahun" },
//   { title: "12-18 Tahun", href: "/perkembangan-anak/12-18tahun" },
//   { title: "Golden Age", href: "/perkembangan-anak/golden-age" },
// ];

// export const persiapanortu = [
//   { title: "Persiapan Mental", href: "/persiapan-ortu/persiapan-mental" },
//   {
//     title: "Persiapan Intelektual",
//     href: "/persiapan-ortu/persiapan-intelektual",
//   },
//   {
//     title: "Persiapan Hubungan",
//     href: "/persiapan-ortu/persiapan-hubungan",
//   },
// ];
