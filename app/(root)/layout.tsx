// import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import Providers from "../providers";
import { Footer } from "@/components/Footer";
import { Bot } from "@/features/Aybubot";
import { UpButton } from "@/components/atoms";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-root">
      <Providers>
        <Navbar />
        {children}
        <Bot />
        <UpButton />
        <Footer />
      </Providers>
    </main>
  );
}
