"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { ModalDiskusi } from "./ModalDiskusi";
import { PrimaryButton } from "@/components/atoms";
import { IDiskusi } from "@/interface";
import { Card } from "./components/Card";

export const ForumDiskusi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState<IDiskusi[]>([]);
  const [replyTo, setReplyTo] = useState<IDiskusi | null>(null);

  const handleOpen = () => {
    setIsOpen(true); // Reset replyTo when opening for a new discussion
  };

  const handleOpenReply = (comment: IDiskusi) => {
    setIsOpen(true);
    setReplyTo(comment);
  };

  const fetchComments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "forum-diskusi"));
      const commentsData: IDiskusi[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as IDiskusi;
        data.id = doc.id; // Set the id property directly on the data object
        commentsData.push(data);
      });

      // Organize comments and replies
      const organizedComments = organizeComments(commentsData);
      setComments(organizedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const organizeComments = (commentsData: IDiskusi[]): IDiskusi[] => {
    const commentMap: { [key: string]: IDiskusi } = {};

    commentsData.forEach((comment) => {
      commentMap[comment.id] = comment;
      comment.replies = [];
    });

    const organizedComments: IDiskusi[] = [];

    commentsData.forEach((comment) => {
      if (comment.repliesTo) {
        const parentComment = commentMap[comment.repliesTo];
        if (parentComment && parentComment.replies) {
          parentComment.replies.push(comment);
        }
      } else {
        organizedComments.push(comment);
      }
    });

    return organizedComments;
  };

  const addComment = (comment: IDiskusi) => {
    setComments((prevComments) => [comment, ...prevComments]);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-center bg-slate-100 px-6 py-36 md:px-28 ">
      <section className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-4 ">
          <PrimaryButton fullwidth onClick={handleOpen}>
            <p>Buat Diskusi Baru</p>
          </PrimaryButton>

          <div className="flex flex-col gap-2 rounded-xl  bg-white px-5 py-6">
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
          <div className="flex flex-col gap-2 rounded-xl bg-white px-5 py-6">
            <h3 className="font-semibold text-primary-purple">
              Filter Diskusi
            </h3>
            <div className="flex flex-col text-text-s  ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>Urutkan Terbaru</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>Urutkan Terlama</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-3/4 ">
          {comments.map((comment) => (
            <Card
              key={comment.id}
              comment={comment}
              onReply={handleOpenReply}
            />
          ))}
        </div>
      </section>
      <section className="relative flex h-full w-full items-center justify-center">
        {isOpen && (
          <ModalDiskusi
            addComment={addComment}
            replyTo={replyTo}
            closeModal={() => setIsOpen(false)}
          />
        )}
      </section>
    </main>
  );
};
