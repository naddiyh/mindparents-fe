// services/articleService.ts
import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  orderBy,
  limit,
  CollectionReference,
  collectionGroup,
  DocumentData,
  onSnapshot,
  Unsubscribe,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { IArtikel, IVideo } from "@/interface";
import { FirebaseError } from "firebase/app";

export const getArticlesByCategoryAndSubcategory = async (
  category: string,
  subcategory: string,
) => {
  const q = query(collection(db, `articles/${category}/${subcategory}`));
  const querySnapshot = await getDocs(q);
  const articles = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as IArtikel[];
  return articles;
};

export const getVideosByCategoryAndSubcategory = async (
  category: string,
  subcategory: string,
): Promise<IVideo[]> => {
  const q = query(collection(db, `articles/${category}/${subcategory}`));
  const querySnapshot = await getDocs(q);
  const articles = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as IVideo[];
  return articles;
};

// export const getAllArticle = async (): Promise<IArtikel[]> => {
//   const subcollections = [
//     "trisemester-1",
//     "trisemester-2",
//     "trisemester-3",
//     "persiapan-mental",
//     "persiapan-intelektual",
//     "0-2tahun",
//     "2-6tahun",
//     "6-12tahun",
//     "12-18tahun",
//     "persiapan-hubungan",
//     "golden-age",
//   ];

//   let allArticles: IArtikel[] = [];

//   // Ambil semua dokumen dari setiap subkoleksi menggunakan collectionGroup
//   for (const subcollection of subcollections) {
//     const subCollectionQuery = query(collectionGroup(db, subcollection));
//     const subCollectionSnapshot = await getDocs(subCollectionQuery);

//     subCollectionSnapshot.forEach((doc) => {
//       allArticles.push({
//         id: doc.id,
//         ...doc.data(),
//       } as IArtikel);
//     });
//   }

//   // Mengurutkan artikel di sisi klien berdasarkan 'createdAt'
//   allArticles.sort((a, b) => b.createdAt - a.createdAt);

//   // Membatasi jumlah artikel yang dikembalikan menjadi 6 artikel terbaru
//   return allArticles.slice(0, 6);
// };

//Lates Articles Subcollection

const fetchLatestArticles = async (
  category: string,
  subcategories: string[],
): Promise<IArtikel[]> => {
  const latestArticles: IArtikel[] = [];

  for (const subcategory of subcategories) {
    const q = query(
      collection(db, `articles/${category}/${subcategory}`),
      orderBy("createdAt", "desc"),
      limit(4),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      latestArticles.push({
        id: doc.id,
        ...doc.data(),
        category,
        subcategory,
      } as IArtikel);
    });
  }

  return latestArticles;
};

export default fetchLatestArticles;

export const fetchLatestVideos = async (
  category: string,
): Promise<IVideo[]> => {
  const latestVideos: IVideo[] = [];

  const q = query(
    collection(db, `articles/${category}/video`), // Mengambil data dari subkategori 'video'
    orderBy("createdAt", "desc"),
    limit(4),
  );
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    latestVideos.push({
      id: doc.id,
      video: data.video,
      title: data.title,
      duration: data.duration,
      desc: data.desc,
      createdAt: data.createdAt,
    } as IVideo);
  });

  return latestVideos;
};

const getAllSubcollectionsDocs = async (
  mainCollectionNames: string[],
  subcollections: string[],
): Promise<IArtikel[]> => {
  let allDocs: IArtikel[] = [];

  for (const mainCollectionName of mainCollectionNames) {
    for (const subcollection of subcollections) {
      const subCollectionRef = collection(
        db,
        `articles/${mainCollectionName}/${subcollection}`,
      );
      const subCollectionSnapshot = await getDocs(subCollectionRef);
      const subCollectionDocs = subCollectionSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IArtikel[];
      allDocs = [...allDocs, ...subCollectionDocs];
    }
  }

  console.log(`Fetched docs from ${mainCollectionNames.join(", ")}:`, allDocs);
  return allDocs;
};

const getAllArticle = async (): Promise<IArtikel[]> => {
  try {
    const mainCollectionNames = [
      "persiapan-ortu",
      "kehamilan",
      "perkembangan-anak",
    ]; // Ganti dengan koleksi utama yang Anda inginkan
    const subcollections = [
      "persiapan-mental",
      "persiapan-intelektual",
      "0-2tahun",
      "2-6tahun",
      "6-12tahun",
      "trisemester-1",
      "trisemester-2",
      "trisemester-3",
      "12-18tahun",
      "persiapan-hubungan",
      "golden-age",
      // Tambahkan subkoleksi lainnya di sini sesuai kebutuhan Anda
    ];

    // Ambil semua artikel dari subkoleksi yang ditentukan
    const allArticles = await getAllSubcollectionsDocs(
      mainCollectionNames,
      subcollections,
    );

    // Mengurutkan artikel berdasarkan createdAt secara descending
    allArticles.sort((a, b) => b.createdAt - a.createdAt);

    // Ambil 7 artikel terbaru
    const latestArticles = allArticles.slice(0, 7);

    console.log("Latest articles:", latestArticles);
    return latestArticles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw new Error("Failed to fetch articles");
  }
};

export { getAllArticle };

// const getAllSubcollectionsDocs = async (
//   mainDocId: string,
//   mainDocCategory: string,
// ) => {
//   const subcollections = [
//     "trisemester-1",
//     "trisemester-2",
//     "trisemester-3",
//     "persiapan-mental",
//     "persiapan-intelektual",
//     "0-2tahun",
//     "2-6tahun",
//     "6-12tahun",
//     "12-18tahun",
//     "persiapan-hubungan",
//     "golden-age",
//   ];
//   let allDocs: IArtikel[] = [];

//   for (const subcollection of subcollections) {
//     const subCollectionRef = collection(
//       db,
//       `articles/${mainDocId}/${subcollection}`,
//     );
//     const subCollectionSnapshot = await getDocs(subCollectionRef);
//     const subCollectionDocs = subCollectionSnapshot.docs.map((doc) => ({
//       id: doc.id,
//       category: mainDocCategory,
//       subcategory: subcollection,
//       ...doc.data(),
//     })) as IArtikel[];
//     allDocs = [...allDocs, ...subCollectionDocs];
//   }

//   console.log(`Fetched docs from ${mainDocId}:`, allDocs);
//   return allDocs;
// };

// Fungsi untuk mengambil semua artikel dari subkoleksi
// const getAllArticle = async (): Promise<IArtikel[]> => {
//   try {
//     const articlesCollection = collection(db, "articles");
//     const mainDocsSnapshot = await getDocs(articlesCollection);

//     let allArticles: IArtikel[] = [];

//     for (const mainDoc of mainDocsSnapshot.docs) {
//       const mainDocId = mainDoc.id;
//       const mainDocCategory = mainDoc.data().category; // Asumsikan setiap dokumen utama memiliki properti 'category'
//       const subCollectionDocs = await getAllSubcollectionsDocs(
//         mainDocId,
//         mainDocCategory,
//       );
//       allArticles = [...allArticles, ...subCollectionDocs];
//     }

//     // Mengurutkan semua artikel berdasarkan createdAt dalam urutan menurun
//     allArticles.sort((a, b) => b.createdAt - a.createdAt);

//     // Mengambil 6 artikel terbaru dari semua artikel
//     const latestArticles = allArticles.slice(0, 6);

//     console.log("Latest articles:", latestArticles);
//     return latestArticles;
//   } catch (error) {
//     console.error("Error fetching articles:", error);
//     throw new Error("Failed to fetch articles");
//   }
// };

// export { getAllArticle };

export const getArticleByKehamilan = async (
  subcategory: string,
  id: string,
): Promise<IArtikel> => {
  const docRef = doc(db, `articles/kehamilan/${subcategory}`, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as IArtikel;
  } else {
    throw new FirebaseError("/not-found", "Article not found");
  }
};

export const getVideoByKehamilan = async (id: string): Promise<IVideo> => {
  const docRef = doc(db, `articles/kehamilan/video`, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as IVideo;
  } else {
    throw new FirebaseError("/not-found", "Article not found");
  }
};

export const getArticleByPerkembangan = async (
  subcategory: string,
  id: string,
): Promise<IArtikel> => {
  const docRef = doc(db, `articles/perkembangan-anak/${subcategory}`, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as IArtikel;
  } else {
    throw new FirebaseError("/not-found", "Article not found");
  }
};

export const getVideoByPerkembangan = async (id: string): Promise<IVideo> => {
  const docRef = doc(db, `articles/perkembangan-anak/video`, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as IVideo;
  } else {
    throw new FirebaseError("/not-found", "Article not found");
  }
};

export const getArticleByPersiapan = async (
  subcategory: string,
  id: string,
): Promise<IArtikel> => {
  const docRef = doc(db, `articles/persiapan-ortu/${subcategory}`, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as IArtikel;
  } else {
    throw new FirebaseError("/not-found", "Article not found");
  }
};

export const getVideoByPersiapan = async (id: string): Promise<IVideo> => {
  const docRef = doc(db, `articles/persiapan-ortu/video`, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as IVideo;
  } else {
    throw new FirebaseError("/not-found", "Article not found");
  }
};
