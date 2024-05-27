// app/pregnant/[pregnantId]/page.tsx

import { useRouter } from "next/navigation";
import { tes } from "@/mock/tes";
import { IArtikel } from "@/interface";

interface Props {
  article: IArtikel;
}

const getArticle = async (kehamilanId: string) => {
  const articleId = parseInt(kehamilanId, 10);
  return tes.find((article) => article.id === articleId) || null;
};

// This function generates static paths
export async function generateStaticParams() {
  return tes.map((article) => ({
    kehamilanId: article.id.toString(),
  }));
}

// Page component
const ArticleDetail = async ({
  params,
}: {
  params: { kehamilanId: string };
}) => {
  const article = await getArticle(params.kehamilanId);

  if (!article) {
    // Optionally, handle not found in a different way or return a specific component
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.desc}</p>
    </div>
  );
};

export default ArticleDetail;
