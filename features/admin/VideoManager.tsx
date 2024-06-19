"use client";
import React, { useState, useEffect } from 'react';
import { db, storage } from '@/config/firebase';
import { collection, addDoc, serverTimestamp, deleteDoc, updateDoc, doc, getDocs } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

const VideoManager: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [duration, setDuration] = useState('');
  const [authorImg, setAuthorImg] = useState<File | null>(null);
  const [authorImgUrl, setAuthorImgUrl] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [video, setVideo] = useState<File | null>(null); // State to hold video file
  const [videoUrl, setVideoUrl] = useState(''); // State to hold video URL
  const [path, setPath] = useState('');

  useEffect(() => {
    fetchVideos();
  }, [path]);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const videoFile = e.target.files[0];
      setVideo(videoFile); // Set the video file in state
    }
  };

  const handleAuthorImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAuthorImg(e.target.files[0]);
    }
  };

  const handleUpload = (file: File | null, type: 'video' | 'image') => {
    if (file) {
      const storagePath = type === 'video' ? `videos/${file.name}` : `images/${file.name}`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle upload progress if needed
        },
        (error) => {
          console.log(error); // Handle errors
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              if (type === 'video') {
                setVideoUrl(downloadURL); // Set the video URL
                alert('Video uploaded successfully!');
              } else {
                setAuthorImgUrl(downloadURL);
                alert('Author image uploaded successfully!');
              }
            })
            .catch((error) => console.error('Error getting download URL:', error));
        }
      );
    } else {
      alert(`Please select a ${type} to upload.`);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && videoUrl && name && desc && duration && authorImgUrl && authorName) {
      try {
        const videoData = {
          title,
          videoUrl,
          name,
          desc,
          duration,
          createdAt: serverTimestamp(),
          author: {
            img: authorImgUrl,
            name: authorName
          }
        };

        await addDoc(collection(db, `articles/${path}/video`), videoData);

        setTitle('');
        setVideo(null); // Reset video state after successful upload
        setName('');
        setDesc('');
        setDuration('');
        setAuthorImgUrl('');
        setAuthorName('');
        alert('Video berhasil ditambahkan!');
        fetchVideos();
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      alert('Mohon isi semua field.');
    }
  };

  const fetchVideos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, `articles/${path}/video`));
      const fetchedVideos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleDelete = async (videoId: string, videoUrl: string) => {
    try {
      await deleteDoc(doc(db, `articles/${path}/video`, videoId));
      const videoRef = ref(storage, videoUrl);
      await deleteObject(videoRef);
      alert('Video berhasil dihapus!');
      fetchVideos();
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const handleUpdate = async (videoId: string) => {
    try {
      await updateDoc(doc(db, `articles/${path}/video`, videoId), {
        title,
        videoUrl,
        name,
        desc,
        duration,
        author: {
          img: authorImgUrl,
          name: authorName
        }
      });
      setTitle('');
      setVideo(null); // Reset video state after successful update
      setName('');
      setDesc('');
      setDuration('');
      setAuthorImgUrl('');
      setAuthorName('');
      alert('Video berhasil diperbarui!');
      fetchVideos();
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Video Baru</h1>
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
          <label className="block text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Durasi</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
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
          <label className="block text-sm font-medium text-gray-700">Gambar Author</label>
          <input
            type="file"
            onChange={handleAuthorImgChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={() => handleUpload(authorImg, 'image')}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Upload Gambar Author
          </button>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Nama Author</label>
          <input
            type="text"
            value ={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Path</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => setPath(e.target.value)}
            value={path}
            required
          >
            <option value="">Pilih Path</option>
            <option value="kehamilan">Kehamilan</option>
            <option value="perkembangan-anak">Perkembangan Anak</option>
            <option value="persiapan-ortu">Persiapan Orang Tua</option>
          </select>
        </div>
        <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md">Simpan Video</button>
      </form>

      <h2 className="text-xl font-bold mb-4">Daftar Video</h2>
      <ul>
  {videos.map((video) => (
    <li key={video.id} className="mb-4">
      <h3 className="font-bold">{video.title}</h3>
      <p>{video.name}</p>  {/* Ensure video.name exists before rendering */}
      <p>{video.desc}</p>  {/* Ensure video.desc exists before rendering */}
      <p>{video.duration}</p>
      <p>{video.author?.name}</p> {/* Use optional chaining to safely access nested properties */}
      <img src={video.author?.img} alt="Author" className="w-16 h-16 rounded-full"/>
      <video src={video.videoUrl} controls className="w-full mt-2"></video>
      {/* Buttons for delete and update */}
    </li>
  ))}
</ul>

    </div>
  );
};

export default VideoManager;