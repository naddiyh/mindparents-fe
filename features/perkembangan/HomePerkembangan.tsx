"use client";
import { useState } from "react";
import Card from "./components/Card";
import { Search, ShowMore, SubArticleButton } from "@/components/atoms";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategoryAndSubcategory } from "@/service/artikel";
import NewCardPage from "./components/NewCard";
import CardVideo from "./components/CardVideo";
import NewVidPage from "./components/NewVid";

export const HomePerkembangan = () => {
  const [filterText, setFilterText] = useState("");
  const [showCountT1, setShowCountT1] = useState(3);
  const [showCountT2, setShowCountT2] = useState(3);
  const [showCountT3, setShowCountT3] = useState(3);
  const [showCountT4, setShowCountT4] = useState(3);
  const [showCountT5, setShowCountT5] = useState(3);
  const [showCountVid, setShowCountVid] = useState(3);

  // Use useQuery to fetch articles for each trimester
  const { data: articlesT1, isLoading: loadingT1 } = useQuery({
    queryKey: ["articles", "perkembangan-ortu", "0-2tahun"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "0-2tahun"),
  });

  const { data: articlesT2, isLoading: loadingT2 } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "2-6tahun"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "2-6tahun"),
  });

  const { data: articlesT3, isLoading: loadingT3 } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "6-12tahun"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "6-12tahun"),
  });

  const { data: articlesT4, isLoading: loadingT4 } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "12-18tahun"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "12-18tahun"),
  });

  const { data: articlesT5, isLoading: loadingT5 } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "golden-age"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "golden-age"),
  });

  const { data: video, isLoading: loadingVid } = useQuery({
    queryKey: ["articles", "perkembangan-anak", "video"],
    queryFn: () =>
      getArticlesByCategoryAndSubcategory("perkembangan-anak", "video"),
  });

  // Handle loading states
  if (
    loadingT1 ||
    loadingT2 ||
    loadingT3 ||
    loadingT4 ||
    loadingT5 ||
    loadingVid
  ) {
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
  const handleShowMoreT4 = () => {
    setShowCountT4((prevCount) => prevCount + 3);
  };
  const handleShowMoreT5 = () => {
    setShowCountT5((prevCount) => prevCount + 3);
  };

  const filteredArticlesT1 =
    articlesT1?.filter((article) =>
      article.title?.toLowerCase().includes(filterText?.toLowerCase() || ""),
    ) || [];

  const filteredArticlesT2 =
    articlesT2?.filter((article) =>
      article.title?.toLowerCase().includes(filterText?.toLowerCase() || ""),
    ) || [];
  const filteredArticlesT3 =
    articlesT3?.filter((article) =>
      article.title.toLowerCase().includes(filterText.toLowerCase()),
    ) || [];

  const filteredArticlesT4 =
    articlesT4?.filter((article) =>
      article.title.toLowerCase().includes(filterText.toLowerCase()),
    ) || [];

  const filteredArticlesT5 =
    articlesT5?.filter((article) =>
      article.title.toLowerCase().includes(filterText.toLowerCase()),
    ) || [];

  const filteredVideos =
    video?.filter((video) =>
      video.title.toLowerCase().includes(filterText.toLowerCase()),
    ) || [];

  const totalFilteredArticles =
    filteredArticlesT1.length +
    filteredArticlesT2.length +
    filteredArticlesT3.length +
    filteredArticlesT4.length +
    filteredArticlesT5.length;
  const noArticlesToShow =
    totalFilteredArticles === 0 && filteredVideos.length === 0;

  return (
    <main className="flex flex-col gap-10 px-6 py-48 md:px-28">
      <section>
        <Search filterText={filterText} onFilterTextChange={setFilterText} />
      </section>

      <section className="flex w-full flex-col gap-10 md:flex-row">
        {/* Bagian Kanan (dapat di-scroll) */}
        <div className="flex-1 ">
          {noArticlesToShow ? (
            <p className="italic">Maaf, artikel dan video belum ada!</p>
          ) : (
            <>
              {/* Render articles for each trimester */}
              {filteredArticlesT1.length > 0 && (
                <section className="flex flex-col gap-10">
                  <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                    0-2 Tahun
                  </p>
                  <Card
                    category="perkembangan-anak"
                    subcategory="0-2tahun"
                    showCount={showCountT1}
                  />
                  <div className="flex w-full justify-end">
                    {showCountT1 < filteredArticlesT1.length && (
                      <ShowMore onClick={handleShowMoreT1}>
                        Lihat lebih banyak
                      </ShowMore>
                    )}
                  </div>
                </section>
              )}
              {filteredArticlesT2.length > 0 && (
                <section className="flex flex-col gap-8">
                  <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                    2 - 6 Tahun
                  </p>
                  <Card
                    category="perkembangan-anak"
                    subcategory="2-6tahun"
                    showCount={showCountT2}
                  />
                  <div className="flex w-full justify-end">
                    {showCountT2 < filteredArticlesT2.length && (
                      <ShowMore onClick={handleShowMoreT2}>
                        Lihat lebih banyak
                      </ShowMore>
                    )}
                  </div>
                </section>
              )}
              {filteredArticlesT3.length > 0 && (
                <section className="flex flex-col gap-8">
                  <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                    6-12 Tahun
                  </p>
                  <Card
                    category="perkembangan-anak"
                    subcategory="2-6tahun"
                    showCount={showCountT3}
                  />
                  <div className="flex w-full justify-end">
                    {showCountT3 < filteredArticlesT3.length && (
                      <ShowMore onClick={handleShowMoreT3}>
                        Lihat lebih banyak
                      </ShowMore>
                    )}
                  </div>
                </section>
              )}
              {filteredArticlesT4.length > 0 && (
                <section className="flex flex-col gap-8">
                  <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                    6-18 Tahun
                  </p>
                  <Card
                    category="perkembangan-anak"
                    subcategory="12-18tahun"
                    showCount={showCountT4}
                  />
                  <div className="flex w-full justify-end">
                    {showCountT4 < filteredArticlesT4.length && (
                      <ShowMore onClick={handleShowMoreT4}>
                        Lihat lebih banyak
                      </ShowMore>
                    )}
                  </div>
                </section>
              )}
              {filteredArticlesT5.length > 0 && (
                <section className="flex flex-col gap-8">
                  <p className="w-fit rounded-md border bg-primary-purple px-4 py-2 text-text-s text-white">
                    Golden Age
                  </p>
                  <Card
                    category="perkembangan-anak"
                    subcategory="golden-age"
                    showCount={showCountT5}
                  />
                  <div className="flex w-full justify-end">
                    {showCountT5 < filteredArticlesT5.length && (
                      <ShowMore onClick={handleShowMoreT5}>
                        Lihat lebih banyak
                      </ShowMore>
                    )}
                  </div>
                </section>
              )}
              {filteredVideos.length > 0 && (
                <section className="flex flex-col gap-10">
                  <SubArticleButton>Video Terkait</SubArticleButton>
                  <section className="flex flex-col gap-8">
                    <CardVideo
                      category="perkembangan-anak"
                      subcategory="video"
                      showCount={showCountVid}
                    />
                    <div className="flex w-full justify-end">
                      {showCountVid < filteredVideos.length && (
                        <ShowMore onClick={handleShowMoreVid}>
                          Lihat lebih banyak
                        </ShowMore>
                      )}
                    </div>
                  </section>
                </section>
              )}
            </>
          )}
        </div>
        <aside className="sticky top-28 flex h-screen flex-shrink-0 flex-col gap-10 lg:w-1/4 ">
          <section className="flex flex-col gap-8">
            <SubArticleButton>Artikel Terbaru</SubArticleButton>
            <NewCardPage />
          </section>
          <section className="flex flex-col gap-8">
            <SubArticleButton>Video Terbaru</SubArticleButton>
            <NewVidPage />
          </section>
        </aside>
      </section>
    </main>
  );
};
