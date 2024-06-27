export interface Feature {
  src: string;
  alt: string;
  title: string;
  description: string;
  id: number;
}

export const features: Feature[] = [
  {
    id: 1,
    src: "/images/anakAnak.webp",
    alt: "perkembangan Anak",
    title: "Perkembangan anak",
    description:
      "Segala sesuatu tenang masa perkembangan anak mulai dari kandungan hingga masa remaja",
  },
  {
    id: 2,
    src: "/images/ibuHamil.webp",
    alt: "ibuHamil",
    title: "Masa Kehamilan",
    description:
      "Membantu ibu hamil dalam masa kehamilan serta memberikan informasi selama masa kehamilan",
  },
  {
    id: 3,
    src: "/images/perOrtu.webp",
    alt: "persortu",
    title: "Persiapan Orang tua",
    description:
      "Mempersiapkan orang tua menjadi lebih sigap dalam berkeluarga",
  },
  {
    id: 4,
    src: "/images/tanyaahli.webp",
    alt: "Tanya ahli",
    title: "Tanya Ahli",
    description: "Bila ingin lebih mendalam, yuk tanya kepada ahlinya",
  },
  {
    id: 5,
    src: "/images/aybu.webp",
    alt: "Bot",
    title: "Aybu Bot",
    description: "Chatbot yang akan selalu siap menjawab bila ada masalah ",
  },
  {
    id: 6,
    src: "/images/Article.webp",
    alt: "forum",
    title: "Forum Diskusi",
    description: "Media berbagi pengalaman bersama para orang tua lainnya",
  },
];
