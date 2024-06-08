"use client";
import { useState } from "react";
import Card from "./components/Card";
import { Search, ShowMore, SubArticleButton } from "@/components/atoms";
import { IArtikel } from "@/interface";
import { useQuery } from "@tanstack/react-query"; // Import useQuery
import { getArticlesByCategoryAndSubcategory } from "@/service/artikel";
import CardVideo from "./components/CardVideo";

export const HomeOrtu = () => {
  const [filterText, setFilterText] = useState("");
  const [showCountT1, setShowCountT1] = useState(3);
  const [showCountT2, setShowCountT2] = useState(3);
  const [showCountT3, setShowCountT3] = useState(3);
  const [showCountVid, setShowCountVid] = useState(3);

  // Use useQuery to fetch articles for each trimester
  const { data: articlesT1, isLoading: loadingT1 } = useQuery({
    queryKey: ["articles", "persiapan-ortu", "persiapan-mental"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("persiapan-ortu", "persiapan-mental"),
  });

  const { data: articlesT2, isLoading: loadingT2 } = useQuery({
    queryKey: ["articles", "persiapan-ortu", "persiapan-intelektual"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory(
        "persiapan-ortu",
        "persiapan-intelektual",
      ),
  });

  const { data: articlesT3, isLoading: loadingT3 } = useQuery({
    queryKey: ["articles", "persiapan-ortu", "persiapan-hubungan"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory(
        "persiapan-ortu",
        "persiapan-hubungan",
      ),
  });

  const { data: video, isLoading: loadingVid } = useQuery({
    queryKey: ["articles", "persiapan-ortu", "video"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("persiapan-ortu", "video"),
  });

  // Handle loading states
  if (loadingT1 || loadingT2 || loadingT3 || loadingVid) {
    return <div>Loading...</div>;
  }
  const handleShowMoreVid = () => {
    setShowCountVid((prevCount) => prevCount + 3);
  };
  const handleShowMoreT1 = () => {
    setShowCountT1((prevCount) => prevCount + 3);
  };

  const handleShowMoreT2 = () => {
    setShowCountT2((prevCount) => prevCount + 3);
  };

  const handleShowMoreT3 = () => {
    setShowCountT3((prevCount) => prevCount + 3);
  };

  return (
    <main className="flex flex-col gap-10 px-6 py-28 md:px-28">
      <section>
        <Search
          filterText={filterText}
          onFilterTextChange={setFilterText}
        ></Search>
      </section>

      <section className="flex flex-col justify-between gap-10 md:flex-row">
        <section className="flex flex-col gap-10 md:w-[80%] ">
          <section className="flex flex-col gap-10">
            <SubArticleButton>Artikel Rekomendasi</SubArticleButton>
          </section>
          <section className="flex flex-col gap-8">
            <SubArticleButton>Video Terkait</SubArticleButton>
            {video && (
              <section className="flex flex-col gap-8">
                {video.length === 0 ? (
                  <p className="italic">Maaf, video belum ada!</p>
                ) : (
                  <>
                    <CardVideo
                      category={"persiapan-ortu"}
                      subcategory={"video"}
                      showCount={showCountVid}
                    />
                    <div className="flex w-full justify-end ">
                      {showCountVid < video.length && (
                        <ShowMore onClick={handleShowMoreVid}>
                          Lihat lebih banyak
                        </ShowMore>
                      )}
                    </div>
                  </>
                )}
              </section>
            )}
          </section>
          {/* Render articles for each trimester */}
          <section className="flex flex-col gap-10">
            <SubArticleButton>Artikel Terkait</SubArticleButton>
            {/* Trimester 1 */}
            {articlesT1 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  Persiapan Mental
                </p>
                {articlesT1.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <>
                    <Card
                      category={"persiapan-ortu"}
                      subcategory={"persiapan-mental"}
                      showCount={showCountT1}
                    />
                    <div className="flex w-full justify-end ">
                      {showCountT1 < articlesT1.length && (
                        <ShowMore onClick={handleShowMoreT1}>
                          Lihat lebih banyak
                        </ShowMore>
                      )}
                    </div>
                  </>
                )}
              </section>
            )}
            {/* Trimester 2 */}
            {articlesT2 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  Persiapan Intelektual
                </p>
                {articlesT2.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <>
                    <Card
                      category={"persiapan-ortu"}
                      subcategory={"persiapan-intelektual"}
                      showCount={showCountT2}
                    />
                    <div className="flex w-full justify-end ">
                      {showCountT1 < articlesT2.length && (
                        <ShowMore onClick={handleShowMoreT2}>
                          Lihat lebih banyak
                        </ShowMore>
                      )}
                    </div>
                  </>
                )}
              </section>
            )}
            {/* Trimester 3 */}
            {articlesT3 && (
              <section className="flex flex-col gap-8">
                <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                  Persiapan Hubungan
                </p>
                {articlesT3.length === 0 ? (
                  <p className="italic">Maaf, artikel belum ada!</p>
                ) : (
                  <>
                    <Card
                      category={"persiapan-ortu"}
                      subcategory={"persiapan-hubungan"}
                      showCount={showCountT3}
                    />
                    <div className="flex w-full justify-end ">
                      {showCountT1 < articlesT3.length && (
                        <ShowMore onClick={handleShowMoreT3}>
                          Lihat lebih banyak
                        </ShowMore>
                      )}
                    </div>
                  </>
                )}
              </section>
            )}
          </section>
        </section>
        <section className="flex flex-col gap-10">
          <section className="flex flex-col gap-8">
            <SubArticleButton>Artikel Terbaru</SubArticleButton>
            <section className="flex flex-col gap-2">
              <section>yyyy</section>
            </section>
          </section>
          <section className="flex flex-col gap-8">
            <SubArticleButton>Video Terbaru</SubArticleButton>
            <section>yyyy</section>
          </section>
          <section>
            <SubArticleButton>Topik Lainnya</SubArticleButton>
          </section>
        </section>
      </section>
    </main>
  );
};
