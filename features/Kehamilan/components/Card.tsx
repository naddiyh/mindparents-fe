import { IArtikel } from "@/interface";
import { GetStaticProps } from "next";
import { tes } from "@/mock/tes";
import Link from "next/link";
import Image from "next/image";

interface Props {
  tes: IArtikel[];
}

const Card: React.FC<Props> = ({ tes }) => {
  return (
    <section className=" jusify-center grid w-full grid-flow-row gap-5 md:grid-flow-col">
      {tes.map((artikel) => (
        <div className="  flex  transition-transform duration-300 ease-in-out  hover:scale-[1.02]">
          <Link
            href={`/kehamilan/${artikel.id}`}
            key={artikel.id}
            className="relative flex flex-col items-center gap-2 "
          >
            <Image
              src={artikel.img}
              width={300}
              height={100}
              alt={artikel.title}
              objectFit="cover"
              className="w-full"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-text-m font-semibold hover:underline">
                {artikel.title}
              </h2>
              <p className="text-text-s">{artikel.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      tes,
    },
  };
};

export default Card;
