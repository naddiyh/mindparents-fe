import { IDiskusi } from "@/interface";
import Image from "next/image";
import { FaReply } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { id as localeId } from "date-fns/locale";

interface CardProps {
  comment: IDiskusi;
  onReply: (comment: IDiskusi) => void;
}

export const Card: React.FC<CardProps> = ({ comment, onReply }) => {
  const [showMore, setShowMore] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const maxLines = 2;

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  const formattedTimestamp = comment.createdAt
    ? formatDistanceToNow(new Date(comment.createdAt), {
        addSuffix: true,
        locale: localeId,
      })
    : "";

  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(
        getComputedStyle(contentRef.current).lineHeight,
        10,
      );
      const maxHeight = lineHeight * maxLines;
      setIsOverflowing(contentRef.current.scrollHeight > maxHeight);
    }
  }, [comment.content]);

  return (
    <section className="relative flex w-full flex-col flex-wrap gap-4 rounded-xl bg-white px-8 py-6">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={comment.img || "/svg/pfp.svg"}
            height={50}
            width={50}
            alt={comment.author}
            objectFit="cover"
            className="rounded-full"
          />
          <p className="font-semibold">{comment.author}</p>
        </div>
        <p className="text-right text-text-s">{formattedTimestamp}</p>
      </section>
      <section className="flex w-full flex-col">
        <p
          ref={contentRef}
          style={{
            maxHeight: showMore ? "none" : `${maxLines * 1.5}em`,
            overflow: "hidden",
          }}
        >
          {comment.content}
        </p>
      </section>
      <section className="flex justify-between pt-4">
        <div className="flex gap-4">
          <button
            className="text-text-s font-semibold text-primary-purple"
            onClick={() => onReply(comment)}
          >
            <FaReply className="h-5 w-5" />
          </button>
          {comment.replies && comment.replies.length > 0 && (
            <p
              className="cursor-pointer text-text-s font-semibold text-primary-purple"
              onClick={handleShowReplies}
            >
              {comment.replies.length} balasan
            </p>
          )}
        </div>
        {isOverflowing && (
          <button
            className="text-text-s text-primary-purple"
            onClick={handleShowMore}
          >
            {showMore ? "Tampilkan Lebih Sedikit" : "Baca Selengkapnya"}
          </button>
        )}
      </section>
      {showReplies && comment.replies && comment.replies.length > 0 && (
        <div className="border-l pl-8 ">
          {comment.replies.map((reply) => (
            <Card key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}
    </section>
  );
};
