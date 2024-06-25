// components/LoadingIndicator.tsx
"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useLoading } from "@/context/Loading";

const LoadingIndicator: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center  bg-black">
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#7631CC"
        radius="10"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingIndicator;
