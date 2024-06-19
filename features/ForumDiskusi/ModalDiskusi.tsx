"use client";

import { IDiskusi } from "@/interface";
import { useState } from "react";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { toast } from "react-toastify";
import { IoMdSend } from "react-icons/io";
import { useAuth } from "@/features/auth/useAuth";

interface ModalDiskusiProps {
  replyTo?: IDiskusi | null;
  addComment: (comment: IDiskusi) => void;
  closeModal: () => void;
}

export const ModalDiskusi: React.FC<ModalDiskusiProps> = ({
  replyTo,
  addComment,
  closeModal,
}) => {
  const [textareaValue, setTextareaValue] = useState("");
  const { user } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const commentData: IDiskusi = {
      createdAt: new Date().toISOString(),
      id: "",
      img: "",
      title: replyTo ? "" : "",
      content: textareaValue,
      author: user ? user.name : "Anonymous",
      replies: [],
      repliesTo: replyTo ? replyTo.id : null,
    };

    try {
      const docRef = await addDoc(collection(db, "forum-diskusi"), commentData);
      commentData.id = docRef.id;

      if (replyTo) {
        const replyRef = doc(db, "forum-diskusi", replyTo.id);
        await updateDoc(replyRef, {
          replies: arrayUnion(commentData),
        });
      }

      toast.success("Komentar berhasil terkirim", { toastId: docRef.id });
      setTextareaValue("");
      addComment(commentData);
      closeModal();
    } catch (error) {
      console.error("Error menambahkan komentar: ", error);
      toast.error("Gagal mengirim komentar");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-14 flex w-full flex-wrap shadow-xl md:w-1/2 md:flex-nowrap"
    >
      <textarea
        className=" min-h-[50px] w-full rounded-xl bg-slate-100 py-4 pl-6 pr-16 text-text-s text-black outline-none"
        placeholder="Apa yang kamu ingin diskusikan..."
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      />
      <button
        type="submit"
        className={`absolute bottom-3 right-4 rounded-md bg-primary-purple px-3 py-1 opacity-50 shadow-md ${
          textareaValue.length > 0 ? "opacity-90" : ""
        }`}
      >
        <IoMdSend className="h-5 w-5 text-white" />
      </button>
    </form>
  );
};
