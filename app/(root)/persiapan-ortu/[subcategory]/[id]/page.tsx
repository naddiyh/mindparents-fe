import dynamic from "next/dynamic";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
const DynamicDetailArticle = dynamic(
  () => import("@/features/PersiapanOrtu/DetailArticle"),
  { ssr: false },
);

const ArticleDetailPage = () => {
  return <DynamicDetailArticle />;
};

export default ArticleDetailPage;
