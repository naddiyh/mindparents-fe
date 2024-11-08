"use client";
import React, { useState, useEffect } from "react";
import { db, storage } from "@/config/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdminPage: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [video, setVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [path, setPath] = useState("");
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, [path]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const videoFile = e.target.files[0];
      console.log("Selected video file:", videoFile); // Debugging line
      setVideo(videoFile);
    }
  };

  const handleUpload = (file: File | null, type: "image" | "video") => {
    if (file) {
      const storagePath =
        type === "image" ? `images/${file.name}` : `videos/${file.name}`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle upload progress if needed
        },
        (error) => {
          console.log(error); // Handle errors
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              if (type === "image") {
                setImageUrl(downloadURL);
                alert("Image uploaded successfully!");
              } else {
                setVideoUrl(downloadURL);
                alert("Video uploaded successfully!");
              }
            })
            .catch((error) =>
              console.error("Error getting download URL:", error),
            );
        },
      );
    } else {
      alert(`Please select a ${type} to upload.`);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && editorState.getCurrentContent().hasText()) {
      try {
        const articleData = {
          title,
          content: convertToRaw(editorState.getCurrentContent()),
          imageUrl,
          videoUrl,
          createdAt: serverTimestamp(),
        };

        await addDoc(collection(db, `articles/${path}`), articleData);

        setTitle("");
        setEditorState(EditorState.createEmpty());
        setImageUrl("");
        setVideoUrl("");
        alert("Artikel berhasil ditambahkan!");
        fetchArticles();
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      alert("Mohon isi semua field.");
    }
  };

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, `articles/${path}`));
      const fetchedArticles = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleDelete = async (articleId: string) => {
    try {
      await deleteDoc(doc(db, `articles/${path}`, articleId));
      alert("Artikel berhasil dihapus!");
      fetchArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleUpdate = async (articleId: string) => {
    try {
      const updatedFields: any = {};
      if (title) updatedFields.title = title;
      if (editorState.getCurrentContent().hasText()) {
        updatedFields.content = convertToRaw(editorState.getCurrentContent());
      }
      if (imageUrl) updatedFields.imageUrl = imageUrl;
      if (videoUrl) updatedFields.videoUrl = videoUrl;

      await updateDoc(doc(db, `articles/${path}`, articleId), updatedFields);

      setTitle("");
      setEditorState(EditorState.createEmpty());
      setImageUrl("");
      setVideoUrl("");
      setCurrentArticleId(null);
      alert("Artikel berhasil diperbarui!");
      fetchArticles();
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  const handleEditClick = (article: any) => {
    setTitle(article.title);
    setEditorState(
      EditorState.createWithContent(convertFromRaw(article.content)),
    );
    setImageUrl(article.imageUrl || "");
    setVideoUrl(article.videoUrl || "");
    setCurrentArticleId(article.id);
  };

  const convertDraftToPlainText = (content: any) => {
    try {
      const contentState = convertFromRaw(content);
      const plainText = contentState.getPlainText("\n");
      return plainText;
    } catch (error) {
      console.error("Error parsing content:", error);
      return ""; // Return empty string if parsing fails
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Upload Artikel Baru</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Judul
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Konten
          </label>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Gambar
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={() => handleUpload(image, "image")}
            className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Upload Gambar
          </button>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Video
          </label>
          <input
            type="file"
            onChange={handleVideoChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={() => handleUpload(video, "video")}
            className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Upload Video
          </button>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Path
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => setPath(e.target.value)}
          >
            <option value="">Pilih Path</option>
            <option value="kehamilan/trisemester-1">
              Kehamilan - Trisemester 1
            </option>
            <option value="kehamilan/trisemester-2">
              Kehamilan - Trisemester 2
            </option>
            <option value="kehamilan/trisemester-3">
              Kehamilan - Trisemester 3
            </option>
            <option value="perkembangan-anak/0-2tahun">
              Perkembangan Anak - 0-2 Tahun
            </option>
            <option value="perkembangan-anak/2-6tahun">
              Perkembangan Anak - 2-6 Tahun
            </option>
            <option value="perkembangan-anak/12-18tahun">
              Perkembangan Anak - 2-18 Tahun
            </option>
            <option value="perkembangan-anak/6-12tahun">
              Perkembangan Anak - 6-12 Tahun
            </option>
         <option value="perkembangan-anak/12-18tahun">
              Perkembangan Anak - 6-12 Tahun
            </option>
            <option value="perkembangan-anak/golden-age">
              Perkembangan Anak - Golden Age
            </option>
            <option value="persiapan-ortu/persiapan-hubungan">
              Persiapan Ortu - Persiapan Hubungan
            </option>
            <option value="persiapan-ortu/persiapan-intelektual">
              Persiapan Ortu - Persiapan Intelektual
            </option>
            <option value="persiapan-ortu/persiapan-mental">
              Persiapan Ortu - Persiapan Mental
            </option>
  
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 rounded-md bg-green-500 px-4 py-2 text-white"
        >
          Tambahkan Artikel
        </button>
      </form>

      <h2 className="mb-4 text-xl font-bold">Daftar Artikel</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-4 rounded-md border p-4">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p>{convertDraftToPlainText(article.content)}</p>
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt="Article"
                className="mt-2 h-auto w-full"
              />
            )}
            {article.videoUrl && (
              <video controls className="mt-2 h-auto w-full">
                <source src={article.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button
              onClick={() => handleDelete(article.id)}
              className="mt-2 rounded-md bg-red-500 px-4 py-2 text-white"
            >
              Hapus
            </button>
            <button
              onClick={() => handleEditClick(article)}
              className="ml-2 mt-2 rounded-md bg-yellow-500 px-4 py-2 text-white"
            >
              Edit
            </button>
            {currentArticleId === article.id && (
              <button
                onClick={() => handleUpdate(article.id)}
                className="ml-2 mt-2 rounded-md bg-blue-500 px-4 py-2 text-white"
              >
                Perbarui
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
