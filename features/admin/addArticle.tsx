"use client";
import React, { useState, useEffect } from 'react';
import { db, storage } from '@/config/firebase';
import { collection, addDoc, serverTimestamp, deleteDoc, updateDoc, doc, getDocs } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const AdminPage: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [image, setImage] = useState<File | null>(null);
<<<<<<< HEAD
  const [imageUrl, setImageUrl] = useState('');
=======
  const [img, setImg] = useState('');
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
  const [video, setVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [path, setPath] = useState('');
  const [creatorName, setCreatorName] = useState('');
<<<<<<< HEAD
  const [references, setReferences] = useState<string>('');

  useEffect(() => {
    if (path) {
      fetchArticles();
    }
=======

  useEffect(() => {
    fetchArticles();
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
  }, [path]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
<<<<<<< HEAD
      setVideo(e.target.files[0]);
=======
      const videoFile = e.target.files[0];
      console.log('Selected video file:', videoFile); // Debugging line
      setVideo(videoFile);
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
    }
  };

  const handleUpload = (file: File | null, type: 'image' | 'video') => {
    if (file) {
      const storagePath = type === 'image' ? `images/${file.name}` : `videos/${file.name}`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle upload progress if needed
        },
        (error) => {
<<<<<<< HEAD
          console.error('Error uploading file:', error); // Handle errors
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              if (type === 'image') {
                setImageUrl(downloadURL);
                alert('Image uploaded successfully!');
              } else {
                setVideoUrl(downloadURL);
                alert('Video uploaded successfully!');
              }
            })
            .catch((error) => console.error('Error getting download URL:', error));
=======
          console.log(error); // Handle errors
        },
        () => {
          if (type === 'image') {
            setImg(storagePath);
            getDownloadURL(uploadTask.snapshot.ref) // Mendapatkan URL unduhan gambar
              .then((downloadURL) => {
                // Set URL unduhan gambar ke state atau melakukan operasi lain yang diperlukan
                console.log('Image download URL:', downloadURL);
                // Disini Anda bisa melakukan apapun dengan URL unduhan gambar, seperti menyimpannya ke state atau ke database
              })
              .catch((error) => console.error('Error getting download URL:', error));
            alert('Image uploaded successfully!');
          } else {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                setVideoUrl(downloadURL);
                alert('Video uploaded successfully!');
              })
              .catch((error) => console.error('Error getting download URL:', error));
          }
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
        }
      );
    } else {
      alert(`Please select a ${type} to upload.`);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
<<<<<<< HEAD
    if (title && editorState.getCurrentContent().hasText() && references) {
=======
    if (title && editorState.getCurrentContent().hasText()) {
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
      try {
        const articleData = {
          title,
          content: convertToRaw(editorState.getCurrentContent()),
<<<<<<< HEAD
          imageUrl,
          videoUrl,
          creatorName,
          references,
=======
          img,
          videoUrl,
          creatorName, // Include creatorName in the article data
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
          createdAt: serverTimestamp()
        };

        await addDoc(collection(db, `articles/${path}`), articleData);

        setTitle('');
        setEditorState(EditorState.createEmpty());
<<<<<<< HEAD
        setImageUrl('');
        setVideoUrl('');
        setCreatorName('');
        setReferences('');
=======
        setImg('');
        setVideoUrl('');
        setCreatorName('');
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
        alert('Artikel berhasil ditambahkan!');
        fetchArticles();
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      alert('Mohon isi semua field.');
    }
  };

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, `articles/${path}`));
      const fetchedArticles = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setArticles(fetchedArticles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleDelete = async (articleId: string) => {
    try {
      await deleteDoc(doc(db, `articles/${path}`, articleId));
      alert('Artikel berhasil dihapus!');
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleUpdate = async (articleId: string) => {
    try {
      await updateDoc(doc(db, `articles/${path}`, articleId), {
        title,
        content: convertToRaw(editorState.getCurrentContent()),
<<<<<<< HEAD
        imageUrl,
        videoUrl,
        creatorName,
        references,
      });
      setTitle('');
      setEditorState(EditorState.createEmpty());
      setImageUrl('');
      setVideoUrl('');
      setCreatorName('');
      setReferences('');
=======
        img,
        videoUrl,
        creatorName,
      });
      setTitle('');
      setEditorState(EditorState.createEmpty());
      setImg('');
      setVideoUrl('');
      setCreatorName('');
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
      alert('Artikel berhasil diperbarui!');
      fetchArticles();
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  const convertDraftToPlainText = (content: string) => {
    try {
      const contentState = convertFromRaw(JSON.parse(content));
      const plainText = contentState.getPlainText('\n');
      return plainText;
    } catch (error) {
      console.error('Error parsing content:', error);
      return ''; // Return empty string if parsing fails
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Artikel Baru</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Judul</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Konten</label>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Gambar</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
<<<<<<< HEAD
          />
          <button
            type="button"
            onClick={() => handleUpload(image, 'image')}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Upload Gambar
          </button>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Video</label>
          <input
            type="file"
            onChange={handleVideoChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={() => handleUpload(video, 'video')}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Upload Video
          </button>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Nama Kreator</label>
          <input
            type="text"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Path</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => setPath(e.target.value)}
          >
            <option value="">Pilih Path</option>
            <option value="kehamilan/trisemester-1">Kehamilan - Trisemester 1</option>
            <option value="kehamilan/trisemester-2">Kehamilan - Trisemester 2</option>
            <option value="kehamilan/trisemester-3">Kehamilan - Trisemester 3</option>
            <option value="perkembangan-anak/2-6tahun">Perkembangan Anak - 2-6 Tahun</option>
            <option value="perkembangan-anak/2-18tahun">Perkembangan Anak - 2-18 Tahun</option>
            <option value="perkembangan-anak/6-12tahun">Perkembangan Anak - 6-12 Tahun</option>
            <option value="persiapan-ortu/persiapan-hubungan">Persiapan Ortu - Persiapan Hubungan</option>
            <option value="persiapan-ortu/persiapan-intelektual">Persiapan Ortu - Persiapan Intelektual</option>
            <option value="persiapan-ortu/persiapan-mental">Persiapan Ortu - Persiapan Mental</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Referensi</label>
          <textarea
            value={references}
            onChange={(e) => setReferences(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Tambahkan Artikel
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Daftar Artikel</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p>{convertDraftToPlainText(JSON.stringify(article.content))}</p>
            {article.imageUrl && (
              <img src={article.imageUrl} alt="Article" className="mt-2 w-full h-auto" />
            )}
            {article.videoUrl && (
              <video controls className="mt-2 w-full h-auto">
                <source src={article.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p className="mt-2"><strong>Referensi:</strong> {article.references}</p>
            <button
              onClick={() => handleDelete(article.id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Hapus
            </button>
            <button
              onClick={() => {
                setTitle(article.title);
                setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(article.content))));
                setImageUrl(article.imageUrl);
                setVideoUrl(article.videoUrl);
                setCreatorName(article.creatorName);
                setReferences(article.references);
                handleUpdate(article.id);
              }}
              className="mt-2 ml-2 px-4 py-2 bg-yellow-500 text-white rounded-md"
            >
              Perbarui
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
=======
            />
            <button
              type="button"
              onClick={() => handleUpload(image, 'image')}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Upload Gambar
            </button>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Video</label>
            <input
              type="file"
              onChange={handleVideoChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => handleUpload(video, 'video')}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Upload Video
            </button>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Nama Kreator</label>
            <input
              type="text"
              value={creatorName}
              onChange={(e) => setCreatorName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Path</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setPath(e.target.value)}
            >
              <option value="">Pilih Path</option>
              <option value="kehamilan/trisemester-1">Kehamilan - Trisemester 1</option>
              <option value="kehamilan/trisemester-2">Kehamilan - Trisemester 2</option>
              <option value="kehamilan/trisemester-3">Kehamilan - Trisemester 3</option>
              <option value="perkembangan-anak/2-6tahun">Perkembangan Anak - 2-6 Tahun</option>
              <option value="perkembangan-anak/2-18tahun">Perkembangan Anak - 2-18 Tahun</option>
              <option value="perkembangan-anak/6-12tahun">Perkembangan Anak - 6-12 Tahun</option>
              <option value="persiapan-ortu/persiapan-hubungan">Persiapan Ortu - Persiapan Hubungan</option>
              <option value="persiapan-ortu/persiapan-intelektual">Persiapan Ortu - Persiapan Intelektual</option>
              <option value="persiapan-ortu/persiapan-mental">Persiapan Ortu - Persiapan Mental</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Tambahkan Artikel
          </button>
        </form>
        
        <h2 className="text-xl font-bold mb-4">Daftar Artikel</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id} className="mb-4 p-4 border rounded-md">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p>{convertDraftToPlainText(JSON.stringify(article.content))}</p>
              {article.img && (
                <img src={`/${article.img}`} alt="Article" className="mt-2 w-full h-auto" />
              )}
              {article.videoUrl && (
                <video controls className="mt-2 w-full h-auto">
                  <source src={article.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <button
                onClick={() => handleDelete(article.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Hapus
              </button>
              <button
                onClick={() => {
                  setTitle(article.title);
                  setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(article.content))));
                  setImg(article.img);
                  setVideoUrl(article.videoUrl);
                  setCreatorName(article.creatorName); // Set nama kreator pada form update
                  handleUpdate(article.id);
                }}
                className="mt-2 ml-2 px-4 py-2 bg-yellow-500 text-white rounded-md"
              >
                Perbarui
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AdminPage;
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
