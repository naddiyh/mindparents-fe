import { RawDraftContentState } from "draft-js";

export interface IArtikel {
  content: RawDraftContentState;

  timestamp(timestamp: any): import("react").ReactNode;
  subcategory: string;
  id: string;
  title: string;
  category: string;
  img: string;
  desc: string;
  createdAt: any;
  updateAt: string;
  creatorName: string;
}
