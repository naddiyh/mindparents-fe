import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

interface NavlinkProps {
  title: string;
  href: string;
  icon?: IconType;
}

export const navlink: NavlinkProps[] = [
  {
    title: "Beranda",
    href: "/#beranda",
  },
  { title: "Persiapan Orang Tua", href: "/persiapan", icon: IoIosArrowDown },
  { title: "Masa Kehamilan", href: "/", icon: IoIosArrowDown },
  { title: "Perkembangan Anak", href: "/", icon: IoIosArrowDown },
  { title: "Forum diskusi", href: "/" },
];

export const Pregnant = [
  { title: "Trisemester I", href: "/" },
  { title: "Trisemester II", href: "/" },
  { title: "Trisemester III", href: "/" },
  { title: "Tios", href: "/" },
];

export const ChildGrow = [
  { title: "0-1 Tahun", href: "/" },
  { title: "1-2 Tahun", href: "/" },
  { title: "2-6 Tahun", href: "/" },
  { title: "6-12 Tahun", href: "/" },
  { title: "12-18 Tahun", href: "/" },
  { title: "Golden Age", href: "/" },
];

export const Parents = [
  { title: "Persiapan Mental", href: "/" },
  { title: "Persiapan Intelektual", href: "/" },
  { title: "Persiapan Hubungan", href: "/" },
];
