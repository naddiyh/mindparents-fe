// components/LikeDislike.tsx
"use client";
import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { doc, getDoc, updateDoc, increment, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const LikeDislike: React.FC = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "likes", "counter");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setLikes(data.likes || 0);
        setDislikes(data.dislikes || 0);
      } else {
        await setDoc(docRef, { likes: 0, dislikes: 0 });
      }
    };

    fetchData();
  }, []);

  const handleLike = async () => {
    const docRef = doc(db, "likes", "counter");

    if (liked) {
      await updateDoc(docRef, { likes: increment(-1) });
      setLikes((prev) => prev - 1);
      setLiked(false);
    } else {
      await updateDoc(docRef, { likes: increment(1) });
      setLikes((prev) => prev + 1);
      if (disliked) {
        await updateDoc(docRef, { dislikes: increment(-1) });
        setDislikes((prev) => prev - 1);
        setDisliked(false);
      }
      setLiked(true);
    }
  };

  const handleDislike = async () => {
    const docRef = doc(db, "likes", "counter");

    if (disliked) {
      await updateDoc(docRef, { dislikes: increment(-1) });
      setDislikes((prev) => prev - 1);
      setDisliked(false);
    } else {
      await updateDoc(docRef, { dislikes: increment(1) });
      setDislikes((prev) => prev + 1);
      if (liked) {
        await updateDoc(docRef, { likes: increment(-1) });
        setLikes((prev) => prev - 1);
        setLiked(false);
      }
      setDisliked(true);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 rounded-2xl bg-slate-50 px-4 py-2">
      <button
        onClick={handleLike}
        className={`flex w-full items-center gap-2 hover:rounded-2xl hover:bg-slate-100 ${liked ? "text-primary-purple" : "text-gray-400"}`}
      >
        <FaThumbsUp className="h-4 w-4" /> {likes}
      </button>
      <button
        onClick={handleDislike}
        className={`flex items-center gap-2 ${disliked ? "text-primary-purple" : "text-gray-400"}`}
      >
        <FaThumbsDown className="h-4 w-4" /> {dislikes}
      </button>
    </div>
  );
};
