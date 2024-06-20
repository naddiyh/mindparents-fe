import axios from "axios";

export async function fetchArticle(
  category: string,
  subcategory: string,
  id: string,
) {
  const response = await axios.get(
    `/articles/${category}/${subcategory}/${id}`,
  );
  return response.data;
}

export async function fetchVideo(id: string, subcategory: string) {
  const response = await axios.get(`/articles/${subcategory}/videos/${id}`);
  return response.data;
}
