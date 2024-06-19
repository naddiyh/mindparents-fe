// // kehamilan/[subcategory]/[articleId]/page.tsx
// ArticleDetailPage.tsx

// pages/articles/[category]/[subcategory]/[id].tsx
import dynamic from "next/dynamic";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
const DynamicDetailArticle = dynamic(
  () => import("@/features/Kehamilan/DetailArticle"),
  { ssr: false },
);

const ArticleDetailPage = () => {
  return <DynamicDetailArticle />;
};

export default ArticleDetailPage;

// import { useRouter } from "next/navigation";
// import { getArticleById } from "@/service/artikel";
// import { IArtikel } from "@/interface";
// import { DetailArticle } from "@/components/DetailArticle";

// const ArticleDetail = async ({
//   params,
// }: {
//   params: { subcategory: string; articleId: string };
// }) => {
//   const { subcategory, articleId } = params;
//   const article = await getArticleById("kehamilan", subcategory, articleId);

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <div>
//       {/* <DetailArticle article={undefined} /> */}
//       {article.title}
//     </div>
//   );
// };

// export default ArticleDetail;

// app/pregnant/[pregnantId]/page.tsx

// import { useRouter } from "next/navigation";
// import { getArticleById } from "@/service/artikel";
// import { IArtikel } from "@/interface";
// import { useQuery } from "@tanstack/react-query";

// interface DetailArticleProps {
//   article: IArtikel;
// }
// const getArticle = async (kehamilanId: string) => {
//   const articleId = parseInt(kehamilanId, 10);
//   return tes.find((article) => article.id === articleId) || null;
// };

// // This function generates static paths
// export async function generateStaticParams() {
//   return tes.map((article) => ({
//     kehamilanId: article.id.toString(),
//   }));
// }

// // Page component
// const ArticleDetail = async ({
//   params,
// }: {
//   params: { kehamilanId: string };
// }) => {
//   const article = await getArticle(params.kehamilanId);

//   if (!article) {
//     // Optionally, handle not found in a different way or return a specific component
//     return <div>Article not found</div>;
//   }

//   return (
//     <div>
//       <h1>{article.title}</h1>
//       <p>{article.desc}</p>
//     </div>
//   );
// };

// export default ArticleDetail;
