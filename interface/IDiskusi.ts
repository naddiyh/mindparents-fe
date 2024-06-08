export interface IDiskusi {
  [key: string]: any; // Define an index signature
  createdAt : string
  id: string;
  img: string;
  title: string;
  content: string;
  author: string;
  replies?: IDiskusi[] | null;
}
