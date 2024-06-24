// components/CommentSection.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  img: string;
}

interface CommentSectionProps {
  articleId: string;
}

export const CommentSection: React.FC<CommentSectionProps> = ({
  articleId,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") {
      setError("Comment harus terisi");
      return;
    }

    // Simpan komentar baru ke backend atau state lokal (tergantung implementasi)
    const comment: Comment = {
      id: String(comments.length + 1), // Sementara gunakan panjang array + 1 sebagai ID
      author: "Anonymous", // Ganti dengan pengguna yang sebenarnya setelah implementasi login
      img: "/svg/pfp.svg",
      content: newComment,
      createdAt: new Date().toString(),
    };
    setComments([...comments, comment]);
    setNewComment("");
    setError(null); // Reset error state after successful submission
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <textarea
          placeholder="Enter your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="rounded-md border border-primary-purple p-2"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={handleCommentSubmit} className="w-1/2">
          Kirim
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-4">
            <div className="flex justify-between gap-10 border-t">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={comment.img}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt={""}
                />
                <strong>{comment.author}</strong>
              </div>
              <p>{comment.createdAt}</p>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
