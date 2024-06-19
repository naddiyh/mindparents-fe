import dynamic from "next/dynamic";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
const DynamicDetailArticle = dynamic(
  () => import("@/features/perkembangan/DetailArticle"),
  { ssr: false },
);

const ArticleDetailPage = () => {
  return <DynamicDetailArticle />;
};

export default ArticleDetailPage;
