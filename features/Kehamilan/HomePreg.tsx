import { PrimaryButton, SubArticleButton } from "@/components/atoms";
import Card from "./components/Card";
import { tesvid } from "@/mock/tesvid";
import Link from "next/link";
import CardVideo from "./components/CardVideo";
import { tes } from "@/mock/tes";

export const HomePregnant = () => {
  return (
    <main className="flex flex-col gap-10  px-6 py-28 md:flex-row md:px-28">
      <section className="flex flex-col gap-10 border md:w-[80%] ">
        <section>
          <SubArticleButton>Artikel Rekomendasi</SubArticleButton>
        </section>

        <section className="flex flex-col gap-8">
          <SubArticleButton>Video Terkait</SubArticleButton>
          <section className="flex flex-col gap-8">
            <p className="w-fit rounded-md bg-primary-purple px-4 py-2 text-text-s text-white">
              Perkembangan Janin
            </p>
            <CardVideo tesvid={tesvid} />

            <Link
              href={`/trisemester-2`}
              className="text-right font-semibold hover:text-primary-purple-hover  "
            >
              Lihat Selengkapnya &rarr;
            </Link>
          </section>
        </section>

        <section className="flex flex-col gap-10 ">
          <SubArticleButton>Artikel Terkait</SubArticleButton>
          <section className="flex flex-col gap-8">
            <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
              Trisemester 1
            </p>
            <Card tes={tes} />
            <Link
              href={`/trisemester-2`}
              className="text-right font-semibold hover:text-primary-purple-hover  "
            >
              Lihat Selengkapnya &rarr;
            </Link>
          </section>
          <section className="flex flex-col gap-8">
            <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
              Trisemester 2
            </p>

            <Card tes={tes} />
            <Link
              href={`/trisemester-2`}
              className="text-right font-semibold hover:text-primary-purple "
            >
              Lihat Selengkapnya &rarr;
            </Link>
          </section>
          <section className="flex flex-col gap-8">
            <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
              Trisemester 3
            </p>

            <Card tes={tes} />
            <Link
              href={`/trisemester-3`}
              className="text-right font-semibold duration-300 hover:text-primary-purple"
            >
              Lihat Selengkapnya &rarr;
            </Link>
          </section>
        </section>
      </section>
      <section className="flex ">
        <SubArticleButton>Artikel Terbaru</SubArticleButton>
      </section>
    </main>
  );
};
