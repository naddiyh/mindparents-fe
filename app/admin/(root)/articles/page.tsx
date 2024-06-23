"use client";
import React from "react";
import dynamic from "next/dynamic";

const AddArticle = dynamic(() => import("@/features/admin/addArticle"), {
  ssr: false,
});
const VideoManager = dynamic(() => import("@/features/admin/VideoManager"), {
  ssr: false,
});

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<"article" | "video">(
    "article",
  );

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center py-32 pl-80 pr-8">
      <div className="mb-4">
        <button
          onClick={() => setActiveTab("article")}
          className={`mr-2 px-4 py-2 ${activeTab === "article" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Manage Articles
        </button>
        <button
          onClick={() => setActiveTab("video")}
          className={`px-4 py-2 ${activeTab === "video" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Manage Videos
        </button>
      </div>
      {activeTab === "article" && <AddArticle />}
      {activeTab === "video" && <VideoManager />}
    </main>
  );
};

export default Admin;
