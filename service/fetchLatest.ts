import axios from "axios";

export const fetchLatestArticle = async () => {
  try {
    const response = await axios.get("/");
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("API response is not an array:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching latest articles:", error);
    return [];
  }
};
