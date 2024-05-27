import { IVideo } from "@/interface";
import { GetStaticProps } from "next";
import { tesvid } from "@/mock/tesvid";
import Link from "next/link";
import Image from "next/image";
import { DurationButton } from "@/components/atoms";

interface Props {
  tesvid: IVideo[];
}

const CardVideo: React.FC<Props> = ({ tesvid }) => {
  return (
    <section className=" grid w-full grid-flow-row justify-between gap-2 md:grid-flow-col">
      {tesvid.map((video) => (
        <div className="  relative  flex justify-center transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          <Link
            href={`/kehamilan/${video.id}`}
            key={video.id}
            className="relative flex flex-col  "
          >
            <div className="relative">
              <iframe
                width="w-full"
                height="220"
                src={video.video}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="rounded-md border "
              ></iframe>
              <div className="absolute bottom-3 right-3">
                <DurationButton>{video.duration}</DurationButton>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-text-m font-semibold hover:underline">
                {video.title}
              </h2>
              <p className="text-text-s">{video.desc}</p>
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
      tesvid,
    },
  };
};

export default CardVideo;
