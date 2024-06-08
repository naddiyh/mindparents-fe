// "use client" is not needed here as we're not importing any dependencies
"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Card } from "./components/Card";
import { ModalDiskusi } from "./ModalDiskusi";
import { PrimaryButton } from "@/components/atoms";
import { IDiskusi } from "@/interface";

export const ForumDiskusi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState<
    { id: string; [key: string]: any }[]
  >([]); // Define the type for commentsData

  const handleOpen = () => {
    setIsOpen(true);
  };

  const fetchComments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "forum-diskusi"));
      const commentsData: IDiskusi[] = [];
      querySnapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() } as IDiskusi);
      });
      // Filter out deleted comments
      const activeComments = commentsData.filter((comment) => !comment.deleted);
      setComments(activeComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-center px-6 pt-40 md:px-28">
      <section className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-4 ">
          <PrimaryButton fullwidth onClick={handleOpen}>
            <p>Buat Diskusi Baru</p>
          </PrimaryButton>

          <div className="flex flex-col gap-2  rounded-md border border-primary-purple px-5 py-6">
            <h3 className="font-semibold text-primary-purple">
              Topik Spesifik
            </h3>
            <div className="flex flex-col text-text-s  ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>Masa Kehamilan</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>Perkembangan Anak</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>Persiapan Orang Tua</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-3/4 ">
          {comments.map((comment) => (
            <Card key={comment.id} comment={comment} />
          ))}
        </div>
      </section>
      <section className="relative flex h-full w-full items-center justify-center">
        {isOpen && <ModalDiskusi />}
      </section>
    </main>
  );
};

/* <div className="flex flex-col gap-2  rounded-md border border-primary-purple px-5 py-6">
            <h3 className="font-semibold text-primary-purple">
              Topik Spesifik
            </h3>
            <div className="flex flex-col text-text-s  ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>Masa Kehamilan</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>Perkembangan Anak</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>Persiapan Orang Tua</label>
              </div>
            </div>
          </div>*/
