// utils/firebaseUtils.js

import { storage } from "../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";

const getImageUrl = async (imageName: string) => {
  try {
    const imageRef = ref(storage, `/images`);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error getting download URL:", error);
    return null;
  }
};

export { getImageUrl };
