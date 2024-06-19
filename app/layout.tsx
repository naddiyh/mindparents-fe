import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";
import { UpButton } from "@/components/atoms";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";

const APP_NAME = "MindPar";
const APP_DEFAULT_TITLE = "MindParents";
const APP_TITLE_TEMPLATE = "%s - Mental and Intelectual";
const APP_DESCRIPTION = "Platform Parenting Kesayangan Orang Tua";

const OpenSans = Open_Sans({
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  fallback: ["Helvetica Neue", "sans-serif"],
  subsets: ["latin-ext", "latin"],
});

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },

  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>
        <Providers>
          {children}
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-left"
          />
        </Providers>
        <ToastContainer />
        <UpButton />
      </body>
    </html>
  );
}
