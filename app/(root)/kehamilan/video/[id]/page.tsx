import dynamic from "next/dynamic";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
const DynamicDetailVideo = dynamic(
  () => import("@/features/Kehamilan/DetailVideo"),
  { ssr: false },
);

const VideoDetailPage = () => {
  return <DynamicDetailVideo />;
};

export default VideoDetailPage;
